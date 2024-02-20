import { Scalar } from "../../../types/type-kinds";
import { SCALAR_TYPES } from "../conversion";

export function handleScalar(type: Scalar) {
  const scalar = SCALAR_TYPES[type.name];
  return scalar ? `${scalar}` : "any";
}
