import { QueryBuilder } from "./lib/builder";
import { BuilderProp } from "./types";

export function gqlBuilder<
  Query extends BuilderProp = any,
  Mutation extends BuilderProp = any,
  Subscription extends BuilderProp = any
>(schema: any): QueryBuilder<Query, Mutation, Subscription> {
  // return new QueryBuilder<Query>(Schema);
  return new QueryBuilder<Query, Mutation, Subscription>(schema);
}
