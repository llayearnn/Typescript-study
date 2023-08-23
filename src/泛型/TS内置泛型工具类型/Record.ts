// 1.Record<keys,Type>用来够艰难一个对象类型，属性的键为keys,属性类型为Type
type RecordObj1 = Record<"a" | "b" | "c", string[]>;
const obj1: RecordObj1 = {
  a: ["3"],
  b: ["2"],
  c: ["1"],
};
type RecordObj2 = Record<string, any>; //表示一个键为字符串类型，值为任意类型的对象。

const obj2: RecordObj2 = {
  a: 2,
};
