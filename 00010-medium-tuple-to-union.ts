// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<TupleToUnion<[123, '456', true]>, 123 | '456' | true>>,
  Expect<Equal<TupleToUnion<[123]>, 123>>,
]


const a = [123, '456', true] as const

type ab = typeof a
type notReadonly<T> = T extends readonly [...infer U] ? U : never
type abc = notReadonly<ab>

// ============= Your Code Here =============
type TupleToUnion<T extends any[]> = T extends [infer V, ...infer W] ? V | TupleToUnion<W> : never
