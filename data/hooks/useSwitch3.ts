/**
 * General purpose [[Switch3Item]] and the hook.
 *
 * Which does loop with the 0~2 values.
 */

import { useReducer } from 'react'
import { z } from 'zod'

export const switch3Item = z.literal(0).or(z.literal(1).or(z.literal(2)))
export type Switch3Item = z.infer<typeof switch3Item>

function ensureItem(x: number): asserts x is Switch3Item {
  const allSwitchItems: Array<Switch3Item> = [0, 1, 2]

  if (x in allSwitchItems) {
    return
  }
  throw new Error(`Fatal error! it is not Switch3 Switch3Item: ${x}`)
}

interface Switch3 {
  item: Switch3Item

  /**
   * Shifts [[item]] to the next item.
   */
  doSwitch: () => void
}

export function increment(x: Switch3Item): Switch3Item {
  const maxSwitchItem = 2

  const result = (x + 1) % (maxSwitchItem + 1)
  ensureItem(result)

  return result
}

export function useSwitch3(initial: Switch3Item): Switch3 {
  const [item, doSwitch] = useReducer(increment, initial)
  return { item, doSwitch }
}

export function fold<A>(item: Switch3Item, if0: A, if1: A, if2: A): A {
  switch (item) {
    case 0:
      return if0
    case 1:
      return if1
    case 2:
      return if2
  }
}
