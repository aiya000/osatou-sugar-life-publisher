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

export function zipWith<A, B, C>(
  xs: Readonly<Array<A>>,
  ys: Readonly<Array<B>>,
  f: (x: A, y: B) => C,
): Array<C> {
  return xs.map((x, i) => {
    const y = ys[i] ?? raise(`Fatal error: zipWith ${i}`)
    return f(x, y)
  })
}
