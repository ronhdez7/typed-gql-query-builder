import { Query } from "./generated/output";
import { QueryBuilder } from "./lib/builder/query-builder";

export function gql() {
  return new QueryBuilder<Query>();
}
