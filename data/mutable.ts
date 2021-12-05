import { clone } from 'lodash'
import { Mutable } from '@/data/types'

/**
 * Allows mutability for the value by cloning object.
 */
export function mutable<A extends Record<string, unknown>>(x: Readonly<A>): A {
  return clone(x) as Mutable<A>
}

/**
 * Simular to [[mutable]].
 */
export function mutableArray<A>(xs: Readonly<Array<A>>): Array<A> {
  return clone(xs) as Array<A>
}
