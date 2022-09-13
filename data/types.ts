export type Mutable<A extends Record<string, unknown>> = {
  -readonly [K in keyof A]: A[K]
}

export type DeepReadonly<A> = A extends Record<string, unknown>
  ? {
      readonly [K in keyof A]: DeepReadonly<A[K]>
    }
  : A
