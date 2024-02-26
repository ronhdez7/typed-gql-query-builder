import { BuilderResult } from "../types";

export class BuiltQuery<T extends any> {
  private variables: Record<string, any> = {};

  constructor(private readonly query: string) {}

  getQuery() {
    return this.query;
  }

  toString() {
    return JSON.stringify(this.toJSON());
  }

  toJSON() {
    return { query: this.query, variables: this.variables };
  }

  setVariables(variables: Record<string, any>) {
    this.variables = { ...this.variables, variables };
  }
}
