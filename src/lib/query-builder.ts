import { Builder, BuilderProp, BuilderResult } from "../types";

export class QueryBuilder<Query extends BuilderProp> {
  query(query: Builder<Query>) {
    let output = "query {\n";

    output += parseFields(query);

    output += "}";
    return output;
  }
}

function parseFields(query: BuilderResult) {
  let output = "";
  for (const key in query) {
    if (typeof query[key] === "undefined") return;
    else if (typeof query[key] === "boolean") {
      if (query[key] === false) continue;
      else output += key + "\n";
    } else {
      output += key + " {\n";
      output += parseFields(query[key] as any);
      output += "}\n";
    }
  }
  return output;
}
