import { GET_SCHEMA_QUERY } from "./constants";
import { handleTypes } from "./kinds/types";
import { GraphqlResponse } from "../types";
import { __Schema, __TypeKind } from "../types/schema";
import * as fs from "fs";

export async function generateTypes() {
  // const FILENAME = "gql-builder.config.json";
  // const FULL_PATH = `${process.cwd()}/${FILENAME}`;

  const schemaEndpoint = "https://graphql.anilist.co";
  // const schemaEndpoint = "https://countries.trevorblades.com";
  // const schemaEndpoint = "https://graphql-pokeapi.graphcdn.app/";
  // console.log(GET_SCHEMA_QUERY);
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

  console.log(JSON.stringify(data.data.__schema, null, 4));

  const schema = data.data.__schema;

  let output = "";

  // include imports
  output += `import { __Schema, __Directive, __DirectiveLocation, __EnumValue, __Field, __InputValue, __Type, __TypeKind } from "../types/schema";\n\n`;

  for (const type of schema.types) {
    let value = handleTypes(type, true);
    if (!value) continue;

    if (value.endsWith("| null")) {
      value = value.slice(0, -6).trim();
    }

    let section = "";
    if (type.kind === __TypeKind.ENUM) {
      section = `export enum ${type.name} ${value};\n`;
    } else {
      section = `export type ${type.name} = ${value};\n`;
    }

    // const identifier = type.kind === __TypeKind.ENUM ? "enum" : "type";
    // const section = `export ${identifier} ${type.name} = ${value};\n`;

    output += section + "\n";
  }

  fs.writeFileSync(`${process.cwd()}/src/generated/output.ts`, output);
}
