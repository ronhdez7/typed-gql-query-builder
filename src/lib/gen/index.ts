import { GET_SCHEMA_QUERY } from "./type-gen/constants";
import { GraphqlResponse } from "../../types";
import { __Schema, __TypeKind } from "../../types/schema";
import * as fs from "fs";
import { generateTypes } from "./type-gen/gen-types";
import { generateJS } from "./js-gen/js-gen";

export async function generateSchema(schemaEndpoint: string) {
  const data: GraphqlResponse<{ __schema: __Schema }> = (await (
    await fetch(schemaEndpoint, {
      method: "post",
      body: `{ "query": "${GET_SCHEMA_QUERY}" }`,
      headers: { "Content-Type": "application/json" },
    })
  ).json()) as any;

  if (!data.data || data.errors) {
    throw new Error(`Err: ${data}`);
  }

  const schema = data.data.__schema;

  let output = "";

  // include imports
  output += `import { __Schema, __Directive, __DirectiveLocation, __EnumValue, __Field, __InputValue, __Type, __TypeKind } from "../types/schema";\n\n`;

  output += generateTypes(schema);
  // let out = generateJS(schema);
  output += "\n\n";
  output += generateJS(schema);

  fs.writeFileSync(`${process.cwd()}/src/generated/output.ts`, output);
  // fs.writeFileSync(`${process.cwd()}/src/generated/out.ts`, out);
}
