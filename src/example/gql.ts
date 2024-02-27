import { gqlBuilder } from "..";
import { Schema, schema } from "./generated/output";

export const gql = gqlBuilder<Schema, Schema["Query"], Schema["Mutation"]>(
  schema
);
