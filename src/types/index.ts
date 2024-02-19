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

type FieldWithArgs = { args: Record<string, any>; data: any };
export type BuilderProp = { [key: string]: any };
export type BuilderResult = {
  [key: string]: BuilderResult | FieldWithArgs | boolean | undefined;
};
export type Builder<T extends BuilderProp> = T extends object
  ? keyof T extends never
    ? boolean
    : // : T extends FieldWithArgs
      // ? { args: T["args"]; data: Builder<NonNullable<T["data"]>> }
      Partial<{
        [U in keyof T]: NonNullable<T[U]> extends object
          ? NonNullable<T[U]> extends FieldWithArgs
            ? {
                args: Partial<NonNullable<T[U]>["args"]>;
                data: NonNullable<T[U]["data"]> extends Array<any>
                  ? NonNullable<T[U]["data"]>[number] extends object
                    ? Builder<NonNullable<T[U]["data"]>[number]>
                    : boolean
                  : Builder<NonNullable<T[U]["data"]>>;
              }
            : NonNullable<T[U]> extends Array<any>
            ? NonNullable<T[U]>[number] extends object
              ? Builder<NonNullable<T[U]>[number]>
              : boolean
            : Builder<NonNullable<T[U]>>
          : boolean;
      }>
  : boolean;
