import { clone } from 'lodash'

/**
 * Updates the [[i]]-th element,
 * and returns new Array.
 */
export function updateAt<A>(xs: Array<A>, i: number, update: (_: A) => A): Array<A> {
  const ys = clone(xs)
  ys[i] = update(xs[i])
  return ys
}
