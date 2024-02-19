import { __Field } from "../../types/schema";
import { handleTypes } from "./types";

export function handleFields(fields: __Field[]) {
  let output = "";

  for (const field of fields) {
    console.log(`did field ${field.name}`);
    let section = `${field.name}: `;

    if (field.args && field.args.length > 0) {
      section += `{\n__typename: "__Field",\nargs: {\n`;
      for (const arg of field.args) {
        section += `${arg.name}: ${handleTypes(arg.type)},\n`;
      }
      section += `}, \ndata: ${handleTypes(field.type)}\n};\n`;
    } else {
      section += `${handleTypes(field.type)};\n`;
    }

    output += section;
  }

  return output;
}
