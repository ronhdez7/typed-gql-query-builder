import { __Schema, __TypeKind } from "../../../types/schema";
import { handleTypes } from "./kinds/type";

export function generateJS(schema: __Schema): string {
  let output = "";

  for (const type of schema.types) {
    let value = handleTypes(type, true);
    if (!value) continue;

    let section = `export const ${type.name} = ${value};\n`;

    output += section + "\n";
  }

  return output;
}
