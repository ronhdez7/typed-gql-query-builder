import { Union } from "../../../../types/type-kinds";
import { handleTypes } from "./type";

export function handleUnion(type: Union) {
  let value = "`";

  if (!type.possibleTypes || type.possibleTypes.length === 0) {
    return value + "`";
  }

  for (let i = 0; i < type.possibleTypes.length; i++) {
    let val = handleTypes(type.possibleTypes[i]!) ?? "any";
    if (i !== type.possibleTypes.length - 1) {
      value += val + " | ";
    } else {
      value += val + "`";
    }
  }

  return value;
}
