import { GET_SCHEMA_QUERY } from "./constants";
import { handleTypes } from "./kinds/type";
import { GraphqlResponse } from "../../types";
import { __Schema, __TypeKind } from "../../types/schema";
import * as fs from "fs";
import { removeNullable } from "./utils";

export async function generateTypes() {
  const schemaEndpoint = "https://graphql.anilist.co";
  // const schemaEndpoint = "https://countries.trevorblades.com";
  // const schemaEndpoint = "https://graphql-pokeapi.graphcdn.app/";

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
  output += `import { __Schema, __Directive, __DirectiveLocation, __EnumValue, __Field, __InputValue, __Type, __TypeKind } from "../types/schema";\n`;

  for (const type of schema.types) {
    let value = handleTypes(type, true);
    if (!value) continue;

    value = removeNullable(value);

    let section = "";
    if (type.kind === __TypeKind.ENUM) {
      section = `export enum ${type.name} ${value};\n`;
    } else {
      section = `export type ${type.name} = ${value};\n`;
    }

    output += section + "\n";
  }

  fs.writeFileSync(`${process.cwd()}/src/generated/output.ts`, output);
}
