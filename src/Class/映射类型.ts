type PropKeys = "x" | "y" | "z";
type Type1 = {
  x: number;
  y: number;
  z: number;
};
// 针对上面可以用映射类型来简化
type Type2 = {
  [key in PropKeys]: number;
};
const testObj: Type2 = {
  x: 14,
  y: 14,
  z: 14,
};
// 映射类型基于索引类型；key in PropKeys可以是 联合类型中的任意一个
// 映射类型只能在类型别名（Type)中使用，不能在接口(interface)中使用

type Props = {
  a: number;
  b: string;
  c: string[];
};
type Type3 = {
  [key in keyof Props]: number;
};
// 前面说的 Partial 就是基于 映射类型
type MyPartial<T> = {
  // key 表示属性，T[key] 可以理解 为 T.key 拿到的就是类型
  [P in keyof T]?: T[P];
};
// 索引查询(访问)类型 T[P],上面用到的
type PropsA<T> = {
  a: number;
  b: string;
  c: T[];
};
// type xx = number | string;
let a1: PropsA<number> = {
  a: 10,
  b: "ss",
  c: [4],
};
