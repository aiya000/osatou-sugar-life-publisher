import { clone } from 'lodash'
import { raise } from '@/data/Error'

/**
 * Updates the [[i]]-th element,
 * and returns new Array.
 */
export function updateAt<A>(xs: Array<A>, i: number, update: (_: A) => A): Array<A> {
  const ys = clone(xs)
  ys[i] = update(xs[i] ?? raise(`No such ${i}-th element of ${JSON.stringify(xs)}`))
  return ys
}
