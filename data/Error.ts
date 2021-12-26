/**
 * Throw an Error with [[msg]].
 */
export function raise(msg: string): never {
  throw new Error(msg)
}
