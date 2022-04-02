// if else 
// type A = 1
// type B = 2
// type example = A extends B ? true : false //false

import { type } from "os"

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

// 判断相等

type CheckLeftIsExtendsRight<T, R> = T extends R ? true : false
type SS = CheckLeftIsExtendsRight<true, true> //true
type SS2 = CheckLeftIsExtendsRight<true, false> //false
type SS3 = CheckLeftIsExtendsRight<1, number> //true

//判断左侧类型是否和右侧一致 
// isEqual 

// 将支持的类型转化为字符串
// 设置只可将安全类型转为字符串，不安全的不考虑
type canStringified = string | number | bigint | boolean | null | undefined

type Stringify<T extends canStringified> = `${T}`

type S1 = Stringify<123>//"123"
type S2 = Stringify<'sadsa'>//"sadsa"
// type S3 = Stringify<{}>//error

