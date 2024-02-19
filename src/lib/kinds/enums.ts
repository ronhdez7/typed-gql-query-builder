import { __EnumValue } from "../../types/schema";

export function handleEnums(enums: __EnumValue[]) {
  let output = "";

  for (const e of enums) {
    let section = `${e.name}: "${e.name}",\n`;
    output += section;
  }

  return output;
}
