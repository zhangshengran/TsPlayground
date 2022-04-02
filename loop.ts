
// 循环  ts中 有 in  递归

import { type } from "os"

type Example<
  C extends boolean = true,
  Tuple extends unknown[] = [1]
  > = C extends true ? Example<false, [...Tuple, 1]> : Tuple
type A = Example //[1,1]

// 这的T怎么能设定是联合类型？
type Example2<T> = {
  [Key in T]: T
}
type Result2 = Example2<"1" | "2" | 3 | 4> // { 1: "1"; 2: "2"; 3: 3; 4: 4; }