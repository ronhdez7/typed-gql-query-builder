export function removeNullable(value: string): string {
  // if (value.startsWith("nullable(")) {
  //   return value.slice(9, -1).trim();
  // } else {
  // 	return value
  // }
  if (value.endsWith("| null")) {
    value = value.slice(0, -6).trim();
  }

  return value;
}
