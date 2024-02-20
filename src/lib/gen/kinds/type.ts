import { __Type, __TypeKind } from "../../../types/schema";
import { removeNullable } from "../utils";
import { handleEnums } from "./enums";
import { handleFields } from "./field";
import { handleScalar } from "./scalar";
import { handleUnion } from "./union";

export function handleTypes(
  type: __Type,
  define: boolean = false
): string | null {
  console.log(`did type "${type.name}" of kind "${type.kind}"`);

  if (type.name?.startsWith("__")) {
    return null;
  }

  let value = "";
  switch (type.kind) {
    case __TypeKind.SCALAR:
      if (define) {
        value = handleScalar(type);
      } else value = type.name;
      // value = `nullable(${value})`;
      value += " | null";
      break;
    case __TypeKind.OBJECT:
      if (type.fields) {
        value = "{\n";
        value += handleFields(type.fields);
        value += "}";
      } else {
        value += type.name;
      }
      // value = `nullable(${value})`;
      value += " | null";
      break;
    case __TypeKind.NON_NULL:
      {
        let val = handleTypes(type.ofType) || "any";
        if (val) {
          val = removeNullable(val);
        }
        value = val;
      }
      break;
    case __TypeKind.LIST:
      {
        let val = handleTypes(type.ofType) || "any";
        val = removeNullable(val);
        // value = `nullable(list(${val}))`;
        value = `${val}[] | null`;
      }
      break;
    case __TypeKind.INPUT_OBJECT:
      if (type.inputFields) {
        value = "{\n";
        // @ts-ignore
        value += handleFields(type.inputFields);
        value += "}";
      } else {
        value = type.name;
      }

      // value = `nullable(${value})`;
      value += " | null";
      break;
    case __TypeKind.ENUM:
      if (type.enumValues) {
        value = "{\n";
        value += handleEnums(type.enumValues);
        value += "}";
      } else {
        value = type.name;
      }

      // value = `nullable(${value})`;
      value += " | null";
      break;
    case __TypeKind.UNION:
      if (type.possibleTypes) {
        value = handleUnion(type);
      } else {
        value += type.name;
      }

      // value = `nullable(${value})`;
      value += " | null";
      break;
    default:
      value += "any";
      break;
  }
  return value;
}
