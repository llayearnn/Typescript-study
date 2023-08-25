// 使用字面量进行类型生命赋值
let a: 10;
let b: "male" | "female";
// unknown 表示未知类型
let e: unknown;
let s: string;
e = 10;
e = false;
// any类型可以赋值给任意变量
// unknown 不能直接赋值给其他类型
// s=e
// 解决办法1 类型断言
s = e as string; // as 断言
s = <string>e; //  <type> 断言

// never 表示永远不会有返回值
function throwErr(): never {
  throw new Error("报错了");
}

// 数组
let arr1: number[];
let arr: Array<number>;

// 元组 tuple  固定长度的数组
// 数组合并了相同类型的对象，而元组（Tuple）合并了不同类型的对象。
let tom: [string, number] = ["Tom", 25];

// 类型别名
type myType = string;
type myNumber = 1 | 2 | 3 | 5;
export {};
