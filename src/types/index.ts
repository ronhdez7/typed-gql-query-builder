/* Graphql Response */
interface GraphqlErrorLocation {
  line: number;
  column: number;
}

export interface GraphqlError {
  message: string;
  locations?: GraphqlErrorLocation[];
  path?: (string | number)[];
  extensions?: Record<string, any>;
}

export interface GraphqlResponse<T> {
  data?: T | null;
  errors?: GraphqlError[] | null;
}

/* Lib types */
type PickNullable<T> = {
  [P in keyof T as null extends T[P] ? P : never]: T[P];
};
type PickNotNullable<T> = {
  [P in keyof T as null extends T[P] ? never : P]: T[P];
};

export type FieldWithArgs = ["__Field", Record<string, any>, any];

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
    ? (keyof PickNotNullable<T[1]> extends never
        ? {
            args?: FieldArguments<T[1]>;
          }
        : {
            args: FieldArguments<T[1]>;
          }) & {
        data: NonNullable<T[2]> extends BuilderProp
          ? Builder<NonNullable<T[2]>>
          : boolean;
      }
    : // get rid of arrays
    E extends BuilderProp
    ? Builder<E>
    : never // only if arrays doesn't have objects
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

export type QuerySchema = {
  [key: string]: QueryField | string;
};

export type QueryField = {
  [key: string]:
    | string
    | [string]
    | ["__Field", Record<string, string | string[]>, string | [string]];
};
