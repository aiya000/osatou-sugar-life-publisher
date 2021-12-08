import { renderHook, act } from '@testing-library/react-hooks'
import { useIndexed } from './useIndexed'

test('should increment counter', () => {
  const { result } = renderHook(() => useIndexed([0, 0], (i) => i + 1))

  act(() => {
    const increment = result.current[1]
    increment(1)
  })

  const actual = result.current[0]
  expect(actual).toStrictEqual([0, 1])
})
