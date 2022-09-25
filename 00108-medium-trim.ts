// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Trim<'str'>, 'str'>>,
  Expect<Equal<Trim<' str'>, 'str'>>,
  Expect<Equal<Trim<'     str'>, 'str'>>,
  Expect<Equal<Trim<'str   '>, 'str'>>,
  Expect<Equal<Trim<'     str     '>, 'str'>>,
  Expect<Equal<Trim<'   \n\t foo bar \t'>, 'foo bar'>>,
  Expect<Equal<Trim<''>, ''>>,
  Expect<Equal<Trim<' \n\t '>, ''>>,
]


// ============= Your Code Here =============
type TrimLeft<S extends string> = S extends `${' ' | '\t' | '\n'}${infer T}` ? TrimLeft<T> : S
type TrimRight<S extends string> = S extends `${infer H}${' ' | '\t' | '\n'}` ? TrimRight<H> : S
type Trim<S extends string> = TrimLeft<TrimRight<S>>
