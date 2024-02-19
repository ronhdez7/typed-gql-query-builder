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

type FieldWithArgs = {
  __typename: "__Field";
  args: Record<string, any>;
  data: BuilderProp | null;
};
type FieldArguments<T> = {
  [K in keyof PickNullable<T>]?: Exclude<T[K], null>;
} & {
  [K in keyof PickNotNullable<T>]: T[K];
};

export type BuilderProp = { [key: string]: any };
export type BuilderResult = {
  [key: string]: BuilderResult | FieldWithArgs | boolean | undefined;
};
export type Builder<T extends BuilderProp> = T extends Array<infer E>
  ? // get rid of arrays
    E extends BuilderProp
    ? Builder<E>
    : never // only if arrays doesn't have objects
  : // if no keys, then allow boolean
  keyof T extends never
  ? boolean
  : // query-builder
  T extends FieldWithArgs
  ? (keyof PickNotNullable<T["args"]> extends never
      ? {
          args?: FieldArguments<T["args"]>;
        }
      : {
          args: FieldArguments<T["args"]>;
        }) & {
      data: Builder<NonNullable<T["data"]>>;
    }
  : Partial<{
      [K in keyof T]: NonNullable<T[K]> extends BuilderProp
        ? Builder<NonNullable<T[K]>>
        : boolean;
    }>;

function c(): string | null {
  return "".at(0) ?? null;
}

const a = {
  b: c(),
} as const;
