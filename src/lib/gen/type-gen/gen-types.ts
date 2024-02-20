import { __Schema, __TypeKind } from "../../../types/schema";
import { handleTypes } from "./kinds/type";
import { removeNullable } from "./utils";

export function generateTypes(schema: __Schema): string {
  let output = "";

  for (const type of schema.types) {
    let value = handleTypes(type, true);
    if (!value) continue;

    value = removeNullable(value);

    let section = "";
    if (type.kind === __TypeKind.ENUM) {
      section = `export enum ${type.name} ${value};\n`;
    } else {
      section = `export type ${type.name} = ${value};\n`;
    }

    output += section + "\n";
  }

  return output;
}
