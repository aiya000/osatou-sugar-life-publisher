import { HopeToDoComponent, HopeToDoItem } from '@/components/HopeToDo'
import { clone } from 'lodash'
import { increment } from '@/data/hooks/useSwitch3'
import { useIndexed } from '@/data/hooks/useIndexed'

export function useHopeToDoComponents(
  componentItems: Array<{ text: string; state: 0 | 1 | 2 }>,
): Array<HopeToDoComponent> {
  const itemsUnref = clone(componentItems)

  const [items, switchState] = useIndexed(itemsUnref, ({ text, state }) => ({
    text,
    state: increment(state),
  }))

  return items.map(({ text, state }, i) => ({
    text,
    state,
    doSwitch: () => switchState(i),
  }))
}
