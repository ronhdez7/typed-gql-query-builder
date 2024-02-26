import { Builder, BuilderProp, BuilderResult, ModelSchema } from "../types";
import { BuiltQuery } from "./built";
import { QueryParser } from "./parser";

export class QueryBuilder<
  Query extends BuilderProp = any,
  Mutation extends BuilderProp = any,
  Subscription extends BuilderProp = any
> {
  private readonly parser: QueryParser;

  constructor(private readonly schema: ModelSchema) {
    this.parser = new QueryParser(schema);
  }

  query<Q extends Builder<Query>>(nameOrQuery: Q | string): BuiltQuery<Q>;
  query<Q extends Builder<Query>>(
    name: string,
    query: Q | string
  ): BuiltQuery<Q>;
  query<Q extends Builder<Query>>(
    nameOrQuery: Q | string,
    maybeQuery?: Q | string
  ): BuiltQuery<Q> {
    let output = "query ";

    if (maybeQuery === undefined) {
      if (typeof nameOrQuery === "string")
        return new BuiltQuery<Q>(nameOrQuery);
      output += this.createQuery("Query", undefined, nameOrQuery);
      return new BuiltQuery<Q>(output);
    } else {
      if (typeof maybeQuery === "string") return new BuiltQuery<Q>(maybeQuery);
      output += this.createQuery("Query", nameOrQuery as string, maybeQuery);
      return new BuiltQuery<Q>(output);
    }
  }

  mutation(nameOrMutation: Builder<Mutation> | string): string;
  mutation(name: string, mutation: Builder<Mutation> | string): string;
  mutation(
    nameOrMutation: Builder<Mutation> | string,
    maybeMutation?: Builder<Mutation> | string
  ): string {
    let output = "mutation ";

    if (maybeMutation === undefined) {
      if (typeof nameOrMutation === "string") return nameOrMutation;
      output += this.createQuery("Mutation", undefined, nameOrMutation);
    } else {
      if (typeof maybeMutation === "string") return maybeMutation;
      output += this.createQuery(
        "Mutation",
        nameOrMutation as string,
        maybeMutation
      );
    }

    return output;
  }

  subscription(nameOrSubscription: Builder<Subscription> | string): string;
  subscription(
    name: string,
    subscription: Builder<Subscription> | string
  ): string;
  subscription(
    nameOrSubscription: Builder<Subscription> | string,
    maybeSubscription?: Builder<Subscription> | string
  ): string {
    let output = "subscription ";

    if (maybeSubscription === undefined) {
      if (typeof nameOrSubscription === "string") return nameOrSubscription;
      output += this.createQuery("Subscription", undefined, nameOrSubscription);
    } else {
      if (typeof maybeSubscription === "string") return maybeSubscription;
      output += this.createQuery(
        "Subscription",
        nameOrSubscription as string,
        maybeSubscription
      );
    }

    return output;
  }

  private createQuery(
    type: string,
    name: string | undefined,
    query: BuilderResult
  ) {
    let output = "";

    output += name ?? "";

    output += " {\n";

    const queryModel = this.schema[type];
    if (!queryModel || typeof queryModel === "string")
      return (output += " \n}");

    output += this.parser.parseFields(query, queryModel);

    output += "\n}";

    return output;
  }
}
