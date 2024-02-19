export const SCALAR_TYPES: Record<string, string> = {
  String: "string",
  Int: "number",
  ID: "string",
  Boolean: "boolean",
  Float: "number",
  Json: "object",
};

export const SCALAR_FUNCS: Record<string, string> = {
  String: "asString",
  Int: "asNumber",
  ID: "asString",
  Boolean: "asBoolean",
  Float: "asNumber",
  Json: "asObject",
};
