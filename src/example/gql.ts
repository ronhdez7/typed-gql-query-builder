import { gqlBuilder } from "..";
import { Mutation, Query, schema } from "./generated/output";

export const gql = gqlBuilder<Query, Mutation>(schema);
