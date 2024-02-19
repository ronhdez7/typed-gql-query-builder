import { Query } from "./generated/output";
import { QueryBuilder } from "./lib/query-builder";

export function gql() {
  return new QueryBuilder(Query);
}
