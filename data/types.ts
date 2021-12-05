export type Mutable<A extends Record<string, unknown>> = {
  -readonly [K in keyof A]: A[K]
}
