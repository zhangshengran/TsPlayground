
/**
 * 拆分字符串变为一个元组
 * @example
 * type Result = Split<'1,2,3', ','> // [1, 2, 3]
 */
未完成？
type SplitHelper<str extends string, splitStr extends string = '', T extends string[] = []> =
  str extends `${infer firstChar}${splitStr},${infer reset}`
  ? SplitHelper<reset, splitStr, array.Push<T, firstChar>>
  : str extends string
  ? str extends ''
  ? T
  : array.Push<T, str>
  :
  : never
type Split<S extends string, splitStr extends string> = SplitHelper<S, splitStr>

// 获取字符串长度
未完成？
type GetStringLength<S extends string> = SplitHelper<S>

type AA = GetStringLength<'123'>

// 判断字符串是否包涵子串
/**
 * 判断字符串是否包含子串
 * @example
 * type Result = Includes<"123", "12"> // true
 */
type Includes<S1 extends string, S2 extends string> = S1 extends `${infer B}${S2}${infer E}` ? true : false

type SS = Includes<'123', '12'>//true
type SS2 = Includes<'123', '124'>//false


/**
 * 判断字符串是否以子串为起始
 * @example
 * type Result = StartsWith<"123", "12"> // true
 */
type StartsWith<S1 extends string, S2 extends string> = S1 extends `${S2}${infer reset}` ? true : false

type S3 = StartsWith<'1234', '12'>//true
type S4 = StartsWith<'1234', '112'>//false


type endWith<S1 extends string, S2 extends string> = S1 extends `${infer startStr}${S2}` ? true : false

type S5 = endWith<'asdfg', 'fg'>//true

/**
 * 在字符串中查找并替换一处子串
 * @example
 * type Result = Replace<"23123", "23", "xx"> // "xx123"
 */
type Replace<
  S extends string,
  MatchStr extends string,
  ReplaceStr extends string
  > = S extends `${infer left}${MatchStr}${infer right}` ? `${left}${ReplaceStr}${right}` : S

type S6 = Replace<'asdf', 'sd', 'ggg'>//agggf

/**
 * 在字符串中查找并替换所有子串
 * @example
 * type Result = ReplaceAll<"23123", "23", "xx"> // "xx1xx"
 */
type ReplaceAll<
  S extends string,
  MatchStr extends string,
  ReplaceStr extends string
  > = Includes<S, MatchStr> extends true ? ReplaceAll<Replace<S, MatchStr, ReplaceStr>, MatchStr, ReplaceStr> : S
// > = Replace<S, MatchStr, ReplaceStr> extends S ? S : ReplaceAll<Replace<S, MatchStr, ReplaceStr>, MatchStr, ReplaceStr>
type S7 = ReplaceAll<'asdfsd', 'sd', 'ggg'>//"agggfggg"
// Replace < S, MatchStr, ReplaceStr > extends S
// Includes < S, MatchStr > extends true

/**
 * 重复 Times 次数的字符串
 * @example
 * type Result = Repeat<"1", 5> // "11111"
 */
type Repeat<S extends string, Times extends number> = Times extends 0 ? S : Repeat<`${S}${S}`, Times-1 >

  const CCC = ['2'] as const

const tesla = ['tesla', 'model 3', 'model X', 'model Y'] as const