import { HopeToDoComponent, HopeToDoItem } from '@/components/HopeToDo'
import { increment } from '@/data/hooks/switch3'
import { useIndexed } from '@/data/hooks/useIndexed'

export function useHopeToDoComponents(componentItemTexts: Array<string>): Array<HopeToDoComponent> {
  const itemsUnref: Array<HopeToDoItem> = componentItemTexts.map((text) => ({ text, state: 0 }))

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
