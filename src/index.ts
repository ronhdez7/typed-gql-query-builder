import { QueryBuilder } from "./lib/builder/builder";
import { BuilderProp, QuerySchema } from "./types";

export function gqlBuilder<
  Query extends BuilderProp = any,
  Mutation extends BuilderProp = any,
  Subscription extends BuilderProp = any
>(schema: any): QueryBuilder<Query, Mutation, Subscription> {
  // return new QueryBuilder<Query>(Schema);
  return new QueryBuilder<Query, Mutation, Subscription>(schema);
}
