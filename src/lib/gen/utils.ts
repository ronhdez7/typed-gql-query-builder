export function removeNullable(value: string) {
  if (value.startsWith("nullable(")) {
    return value.slice(9, -1).trim();
  } else {
		return value
	}
}
