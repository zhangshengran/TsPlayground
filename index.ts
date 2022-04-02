type A = [1, 2, 3]
type exampleA = A extends [infer First, ...infer Rest] ? First : never

type B = "123"
type exampleB = B extends `${infer FirstChar}${infer Rest}` ? FirstChar : never

type CheckLeftIsExtendsRight<T extends any, R extends any> = T extends R ? true : false

// type Example2 = 1 | 2 extends 1 ? true : false

type Example2 = 1 | 2 extends 1 ? true : false // true
type Example1 = { a: 1; b: 2 } extends { a: 1 } ? true : false // true
// 递归
type Example<C extends boolean = true,
  Tuples extends unknown[] = [1]
  > = C extends true ? Example<false, [...Tuples]> : [...Tuples]

type NumberLike = number | `${number}`

let a: NumberLike = 1; //
// let b: NumberLike ='sd'

// type SplitHelper<S extends string, SplitStr extends string, T extends string[] = []> =
//   S extends `${infer str}${SplitStr}${infer reset}`
//   ? SplitHelper<reset, SplitStr, array.Push<T, str>>
//   : S extends string ?
//   S extends ''
//   ? T
//   : array.Push<T, S>
//   : never

type SplitHelper<
  S extends string,
  SplitStr extends string = "",
  T extends string[] = []
  > = S extends `${infer Char}${SplitStr}${infer Rest}`
  ? SplitHelper<Rest, SplitStr, array.Push<T, Char>>
  : S extends string
  ? S extends ""
  ? T
  : array.Push<T, S>
  : never




type Split<S extends string, SplitStr extends string = ""> = SplitHelper<
  S,
  SplitStr
>

type Result = Split<'1,2,3', ','> // [1, 2, 3]


type And<A1 extends boolean, A2 extends boolean> =
  A1 extends true ?
  A2 extends true ? true : false
  : false
type c = And<true, false>