import { __Type, __TypeKind } from "../../types/schema";
import { handleEnums } from "./enums";
import { handleFields } from "./field";
import { handleScalar } from "./scalar";

export function handleTypes(
  type: __Type,
  define: boolean = false
): string | null {
  console.log(`did type "${type.name}" of kind "${type.kind}"`);

  let value = "";
  if (type.name?.startsWith("__")) {
    return null;
  } else if (type.kind === __TypeKind.SCALAR) {
    if (define) {
      value = handleScalar(type) + " | null";
    } else value = type.name;
  } else if (type.kind === __TypeKind.OBJECT) {
    if (type.fields) {
      value = "{\n";
      value += handleFields(type.fields);
      value += "}";
    } else {
      value += type.name;
    }
    value += " | null";
  } else if (type.kind === __TypeKind.NON_NULL) {
    let val = handleTypes(type.ofType);
    if (val?.endsWith("| null")) {
      val = val.slice(0, -6).trim();
    }
    return val;
  } else if (type.kind === __TypeKind.LIST) {
    let val = handleTypes(type.ofType) || "any";
    if (val.endsWith("| null")) {
      val = val.slice(0, -6).trim();
    }
    return `${val}[] | null`;
  } else if (type.kind === __TypeKind.INPUT_OBJECT) {
    if (type.inputFields) {
      value = "{\n";
      console.log("inputfields: ", type);
      // @ts-ignore
      value += handleFields(type.inputFields);
      value += "}";
    } else {
      value = type.name;
    }

    value += " | null";
  } else if (type.kind === __TypeKind.ENUM) {
    if (type.enumValues) {
      value = "{\n";
      value += handleEnums(type.enumValues);
      value += "}";
    } else {
      value = type.name;
    }

    value += " | null";
  } else if (type.kind === __TypeKind.UNION) {
    if (type.possibleTypes) {
      value = "";
      for (let i = 0; i < type.possibleTypes.length; i++) {
        value += handleTypes(type.possibleTypes[i]!);
        if (value.endsWith("| null")) {
          value = value.slice(0, -6).trim();
        }
        if (i !== type.possibleTypes.length - 1) {
          value += " | ";
        }
      }
    } else {
      value += type.name;
    }

    value += " | null";
  } else {
    value += "any";
  }

  return value;
}
