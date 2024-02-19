import { __Field } from "../../types/schema";
import { handleTypes } from "./types";

export function handleFields(fields: __Field[]) {
  let output = "";

  for (const field of fields) {
    console.log(`did field ${field.name}`);
    let section = `${field.name}: ${handleTypes(field.type)};\n`;

    output += section;
  }

  return output;
}
