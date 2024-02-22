import {
  Builder,
  BuilderProp,
  BuilderResult,
  QueryField,
  QuerySchema,
} from "../../types";
import { QueryParser } from "./parser";

export class QueryBuilder2<Query extends BuilderProp> {
  private readonly parser: QueryParser;

  constructor(private readonly schema: QuerySchema) {
    this.parser = new QueryParser(schema);
  }

  query(nameOrQuery: Builder<Query> | string): string;
  query(name: string, query: Builder<Query> | string): string;
  query(
    nameOrQuery: Builder<Query> | string,
    maybeQuery?: Builder<Query> | string
  ): string {
    let output = "query ";

    let query: BuilderProp | string;
    if (typeof maybeQuery === "undefined") {
      query = nameOrQuery;
    } else {
      output += nameOrQuery;
      query = maybeQuery;
    }

    if (typeof query === "string") return query;
    output += " {\n";

    const queryModel = this.schema["Query"];
    if (!queryModel || typeof queryModel === "string")
      return (output += " \n}");

    output += this.parser.parseFields(query, queryModel);

    output += "\n}";
    return output;
  }
}
