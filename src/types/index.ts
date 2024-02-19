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

export type BuilderProp = { [key: string]: any };
export type BuilderResult = {
  [key: string]: BuilderResult | boolean | undefined;
};
export type Builder<T extends BuilderProp> = T extends object
  ? keyof T extends never
    ? boolean
    : Partial<{
        [U in keyof T]: NonNullable<T[U]> extends object
          ? NonNullable<T[U]> extends Array<any>
            ? NonNullable<T[U]>[number] extends object
              ? Builder<NonNullable<T[U]>[number]>
              : boolean
            : Builder<NonNullable<T[U]>>
          : boolean;
      }>
  : boolean;
