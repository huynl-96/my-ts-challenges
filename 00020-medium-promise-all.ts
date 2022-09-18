// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

const promiseAllTest1 = PromiseAll([1, 2, 3] as const)
const promiseAllTest2 = PromiseAll([1, 2, Promise.resolve(3)] as const)
const promiseAllTest3 = PromiseAll([1, 2, Promise.resolve(3)])

type cases = [
  Expect<Equal<typeof promiseAllTest1, Promise<[1, 2, 3]>>>,
  Expect<Equal<typeof promiseAllTest2, Promise<[1, 2, number]>>>,
  Expect<Equal<typeof promiseAllTest3, Promise<[number, number, number]>>>,
]

type a = typeof promiseAllTest1

// ============= Your Code Here =============
type Awaited<T> = T extends Promise<infer P> ? P : T
type AllAwaited<T> =
  T extends []
    ? []
    : T extends [infer Head, ...infer Tail]
      ? [Awaited<Head>, ...AllAwaited<Tail>]
      : never

declare function PromiseAll<T extends any[]>(values: readonly [...T]): T extends infer A ? Promise<AllAwaited<A>> : never
