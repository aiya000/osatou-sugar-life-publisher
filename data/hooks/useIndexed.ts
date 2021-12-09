import * as Arrays from '@/data/Array'
import { Dispatch, useReducer } from 'react'

/**
 * Allows to update an older value of an array's [[index]] to `update(older)` by dispatching.
 *
 * Please also see this test.
 */
export function useIndexed<A>(
  initial: Array<A>,
  update: (_: A) => A,
): [Array<A>, Dispatch<number>] {
  function reduce(xs: Array<A>, index: number): Array<A> {
    if (index < 0) {
      throw new Error(`index must be greater than 0 ${index}`)
    }

    return Arrays.updateAt(xs, index, update)
  }

  return useReducer(reduce, initial)
}
