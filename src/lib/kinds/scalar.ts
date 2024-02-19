import { Scalar } from "../../types/type-kinds";
import { SCALAR } from "../conversion";

export function handleScalar(type: Scalar) {
  return SCALAR[type.name] ?? "unknown";
}
