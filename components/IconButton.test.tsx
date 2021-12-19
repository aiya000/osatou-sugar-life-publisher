// eslint-disable-next-line import/no-unassigned-import
import '@testing-library/jest-dom'

import * as Hooks from '@testing-library/react-hooks'
import IconButton from '@/components/IconButton'
import React from 'react'
import { useSwitch3 } from '@/data/hooks/switch3'
import { render, fireEvent, screen } from '@testing-library/react'

test('switches the state', async () => {
  const { result } = Hooks.renderHook(() => useSwitch3(0))

  const { item, doSwitch } = result.current
  const doSwitch_ = () => Hooks.act(() => doSwitch())

  render(<IconButton text="howdy :D" current={item} onClick={doSwitch_} />)

  fireEvent.click(screen.getByRole('button'))
  expect(result.current.item).toBe(1)

  fireEvent.click(screen.getByRole('button'))
  expect(result.current.item).toBe(2)

  fireEvent.click(screen.getByRole('button'))
  expect(result.current.item).toBe(0)
})

export {}
