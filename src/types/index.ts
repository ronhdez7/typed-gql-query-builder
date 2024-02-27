import { BuiltQuery } from "../lib/built";

type PickNullable<T> = {
  [P in keyof T as null extends T[P] ? P : never]: T[P];
};
type PickNotNullable<T> = {
  [P in keyof T as null extends T[P] ? never : P]: T[P];
};

export type FieldWithArgs = [Record<string, any>, any];

export type FieldArguments<T> = {
  [K in keyof PickNullable<T>]?: Exclude<T[K], null>;
} & {
  [K in keyof PickNotNullable<T>]: T[K];
};

export type BuilderProp = { [key: string]: any };
export type BuilderResult =
  | {
      [key: string]: BuilderResult | boolean | undefined;
    }
  | boolean;
export type Builder<T extends BuilderProp> = T extends Array<infer E>
  ? T extends FieldWithArgs
    ? (keyof PickNotNullable<T[0]> extends never
        ? {
            args?: FieldArguments<T[0]>;
          }
        : {
            args: FieldArguments<T[0]>;
          }) & {
        data: NonNullable<T[1]> extends BuilderProp
          ? Builder<NonNullable<T[1]>>
          : boolean;
      }
    : // get rid of arrays
    E extends BuilderProp
    ? Builder<E>
    : boolean // only if arrays doesn't have objects
  : // if no keys, then allow boolean
  keyof T extends never
  ? boolean
  : // query-builder
    | Partial<{
          [K in keyof T]: NonNullable<T[K]> extends BuilderProp
            ? Builder<NonNullable<T[K]>> | boolean
            : boolean;
        }>
      | boolean;

export type ModelSchema = {
  [key: string]: ModelField | string;
};

export type ModelField = {
  [key: string]:
    | string
    | [string]
    | [string, string, ...string[]]
    | [Record<string, string | string[]>, string | [string]];
};

/* Extraction */
// prettier-ignore
export type inferQuery<T extends BuiltQuery<any>> = T extends BuiltQuery<infer Q> ? Q : any;
export type inferResponse<S extends any, T extends any> = S extends object
  ? S extends Array<infer E>
    ? inferResponse<E, T>
    : T extends object
    ? {
        [K in keyof T]: K extends keyof S
          ? S[K] extends [Record<string, any>, infer D]
            ? inferResponse<D, "data" extends keyof T[K] ? T[K]["data"] : any>
            : inferResponse<S[K], T[K]>
          : any;
      }
    : ExtractData<S>
  : S;

type ExtractData<S = any> = S extends object
  ? S extends [Record<string, any>, infer D]
    ? ExtractData<D>
    : { [K in keyof S]: ExtractData<S[K]> }
  : S;
