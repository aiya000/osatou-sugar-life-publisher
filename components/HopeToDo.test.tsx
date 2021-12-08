// eslint-disable-next-line import/no-unassigned-import
import '@testing-library/jest-dom'

import HopeToDo, { HopeToDoItem } from '@/components/HopeToDo'
import React from 'react'
import { increment } from '@/data/hooks/switch3'
import { render, fireEvent, screen, waitFor } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'
import { useIndexed } from '@/data/hooks/useIndexed'

test('toggles the state with useIndexed', async () => {
  const textsUnref: Array<HopeToDoItem> = ['A', 'B'].map((text) => ({ text, item: 0 }))

  const { result } = renderHook(() =>
    useIndexed(textsUnref, ({ text, item }) => ({
      text,
      item: increment(item),
    })),
  )
  const [texts, switchItem] = result.current
  const components = texts.map(({ text, item }, i) => ({
    text,
    item,
    doSwitch: () => switchItem(i),
  }))

  render(<HopeToDo components={components} />)
  const buttonB = screen.getAllByRole('button')[1]

  fireEvent.click(buttonB)
  await waitFor(() => buttonB)
  expect(/border-green-400/.test(buttonB.className)).toBeTruthy()

  fireEvent.click(buttonB)
  await waitFor(() => buttonB)
  expect(/border-red-400/.test(buttonB.className)).toBeTruthy()
})

export {}
