import { BuilderResult, ModelField, ModelSchema } from "../types";

export class QueryParser {
  private count = 0;

  constructor(private readonly schema: ModelSchema) {}

  parseFields(
    query: BuilderResult | boolean | undefined,
    model: ModelField
  ): string {
    let output = "";

    if (typeof query === "undefined") return "";
    else if (typeof query === "boolean") {
      if (query === false) return "";
      output += this.parseAllFields(model);
    } else {
      for (const queryKey in query) {
        output += "\n" + queryKey;
        const queryField = query[queryKey];
        const modelField = model[queryKey];

        if (modelField === "ENUM") continue;

        if (
          typeof queryField === "undefined" ||
          typeof modelField === "undefined"
        )
          continue;
        else if (typeof queryField === "boolean") {
          if (queryField === false) continue;
          let valName: string;
          if (typeof modelField === "string") valName = removeMark(modelField);
          else if (modelField.length === 1) valName = removeMark(modelField[0]);
          else valName = removeMark(grabString(modelField[1]));
          const newModel = this.schema[valName];
          if (typeof newModel !== "object") continue;
          output += `{\n ${this.parseAllFields(newModel)}\n}`;
        } else {
          let valName: string;
          let data: BuilderResult | boolean | undefined;
          if (typeof modelField === "string" || modelField.length === 1) {
            valName = removeMark(grabString(modelField));
            data = queryField;
          } else {
            // handle args
            const args = queryField["args"] as Record<string, any>;
            output += this.parseArguments(args);
            valName = removeMark(grabString(modelField[1]));
            data = queryField["data"];
          }
          const fields = this.schema[valName];
          if (typeof fields !== "object") continue;
          // handle fields
          output += " {\n";
          output += this.parseFields(data, fields);
          output += "\n}";
        }
      }
    }

    return output;
  }

  /**
   * WARNING: Be careful when using with lots of data due to huge queries
   * Will only parse 500,000 fields to prevent massive wait times
   * @param model Field to get all fields from
   * @param skip Fields to skip (used internally to avoid recursions)
   * @returns String with querying fields
   */
  parseAllFields(model: ModelField, skip: string[] = []): string {
    let output = "";

    for (const key in model) {
      this.count++;
      if (this.count >= 500000) {
        throw new Error("Maximum amount of parsed fields reached");
      }

      const visited = [...skip];
      if (visited.includes(key)) continue;
      else visited.push(key);
      output += "\n" + key;
      const val = model[key];

      if (val === "ENUM") continue;

      if (typeof val === "undefined") continue;
      else if (typeof val === "string") {
        const valName = val.endsWith("!") ? val.slice(0, -1) : val;
        const field = this.schema[valName];
        if (!field || typeof field === "string") continue;
        output += ` {\n${this.parseAllFields(field, visited)}\n}\n`;
      } else if (val.length === 1) {
        const valName = val[0].endsWith("!") ? val[0].slice(0, -1) : val[0];
        const field = this.schema[valName];
        if (!field || typeof field === "string") continue;
        output += ` {\n${this.parseAllFields(field, visited)}\n}\n`;
      } else {
        const args = val[0];
        let argsRequired = false;
        for (const argKey in args) {
          const argVal = args[argKey];
          if (typeof argVal === "undefined") continue;

          const argType = grabString(argVal);
          if (argType.endsWith(`!`)) {
            argsRequired = true;
            break;
          }
        }
        if (argsRequired) {
          // console.log("has required args: ", key);
          output = output.split("\n").slice(0, -1).join("\n");
          continue;
        }

        const fieldVal = val[1];
        let valName = typeof fieldVal === "string" ? fieldVal : fieldVal[0];
        if (!valName) continue;
        if (valName.endsWith("!")) valName = valName.slice(0, -1);
        // if (!valName || visited.includes(valName)) continue;
        // visited.push(valName);

        const newModel = this.schema[valName];
        if (!newModel || typeof newModel === "string") continue;

        output += ` {\n${this.parseAllFields(newModel, visited)}\n}\n`;
      }
    }

    return output;
  }

  parseArguments(args: Record<string, any> | undefined): string {
    let output = "(";

    if (args === undefined) return "";

    const keys = Object.keys(args);
    for (let k = 0; k < keys.length; k++) {
      const key = keys[k]!;
      const val = args[key];
      if (val === undefined || val === null) continue;
      output += `${key}: `;
      if (typeof val === "string") output += `"${val}"`;
      else output += String(val);

      if (k !== keys.length - 1) output += ", ";
    }

    output += ")";
    if (output === "()") return "";

    return output;
  }
}

function grabString(name: string | string[]): string {
  if (typeof name === "string") return name;
  else return name[0] ?? "";
}

function removeMark(name: string): string {
  let val = name;
  if (val[val.length - 1] === "!") {
    val = name.slice(0, -1);
  }
  return val;
}
