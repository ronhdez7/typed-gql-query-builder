import { Mutation, Query, schema } from "./generated/output";
import { QueryBuilder } from "./lib/builder/builder";

export function gql() {
  // return new QueryBuilder<Query>(Schema);
  return new QueryBuilder<Query, Mutation>(schema as any);
}
