import { Schema } from "./generated/out";
import { Query } from "./generated/output";
import { QueryBuilder2 } from "./lib/builder/builder";
import { QueryBuilder } from "./lib/builder/query-builder";

export function gql() {
  // return new QueryBuilder<Query>(Schema);
  return new QueryBuilder2<Query>(Schema as any);
}
