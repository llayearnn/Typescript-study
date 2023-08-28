// 用法：Exclude<Type, ExcludedUnion>。简单理解Exclude就是数学集合中找出Type的“差集”，
// 就是将类型A与B对比，返回A中独有的类型。

type T0 = Exclude<"a" | "b" | "c", "a">;
// type T0 = "b" | "c"
type Person = {
  name: string;
  age: string;
  location: string;
};

export {};
