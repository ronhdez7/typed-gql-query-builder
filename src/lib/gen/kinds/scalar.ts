import { Scalar } from "../../../types/type-kinds";
import { SCALAR_FUNCS } from "../conversion";

export function handleScalar(type: Scalar) {
  const scalar = SCALAR_FUNCS[type.name];
  return scalar ? `${scalar}()` : "asUnknown()";
}
