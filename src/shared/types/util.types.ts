
// Used for typing some dynamic object, first param defines the value type, second the key type
export type DynamicObject<
  Value = any,
  Key extends (string | number) = string
> = {[K in Key]: Value};

export type Nullable<T = any> = T | undefined | null;
