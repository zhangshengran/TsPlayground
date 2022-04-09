// 快速编写第三方包.d.ts 类型声明指南

// https://zhuanlan.zhihu.com/p/58123993

// 我们以一个 API 非常简单的包invert - color为例，它只对外提供 3 个 API：
// invert(color[, bw])
// invert.asRGB(color[, bw])
// invert.asRgbArray(color[, bw])


declare module 'my-lib' {
  export type RgbArray = [number, number, number]
  type RGB = {
    [key in 'r' | 'g' | 'b']: number
  }
  type COLOR = string | RgbArray | RGB
  export interface invert {
    (color: COLOR, bw?: boolean): string
    asRGB: (color: COLOR, bw?: boolean) => RGB
    asRgbArray: (color: COLOR, bw?: boolean) => RgbArray
  }

}