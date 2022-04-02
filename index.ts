// if else 
// type A = 1
// type B = 2
// type example = A extends B ? true : false //false

// 数组、tuple模式匹配
type A = [1, 2, 3]
type FirstType<A extends unknown[]> = A extends [infer first, ... infer reset] ? first : never
type example = FirstType<A> //1

// 字符串模式匹配

type B = `abc`
type FirstCharType<T extends string> = T extends `${infer firstChar}${infer reset}` ? firstChar : never
type C = FirstCharType<B>//a
// 获取最后一个字符的类型 ？
type LastCharType<T extends string> = T['length']
type D = LastCharType<B>

// 实现与
type And<A, B> = A extends true
  ? B extends true
  ? true
  : false
  : false

type F = And<true, false> //false
type G = And<false, false> //false

// 或 有一个为真
type Or<A, B> = A extends true ? true : B extends true ? true : false

type AA = Or<false, false> //false
type BB = Or<true, false> //false

// 实现非

type Not<T extends boolean> = T extends true ? false : true

type FF = Not<true> //false
type CC = Not<false> //true