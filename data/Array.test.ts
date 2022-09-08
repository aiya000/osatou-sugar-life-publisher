import { updateAt } from './Array'

test('makes a new array and updateAt an old element', () => {
  const xs = [0, 1, 2]
  const ys = updateAt(xs, 1, (x) => (x ?? -100) + 1)

  expect(xs).toEqual([0, 1, 2])
  expect(ys).toEqual([0, 2, 2])
})

test('throws an error if undefined index specified', () => {
  const xs = [0]
  expect(() => updateAt(xs, 100, (_) => 0)).toThrow()
  expect(() => updateAt(xs, 10, (_) => 0)).toThrow()
  expect(() => updateAt(xs, 1, (_) => 0)).toThrow()
})
