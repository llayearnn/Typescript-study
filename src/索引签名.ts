interface anyObject {
  [key: string]: number;
}
let a: anyObject = {
  a: 55,
};
// js 中数组的键（索引）是数值类型
interface MyArray<T> {
  [key: number]: T;
}
let x: MyArray<string> = ["1", "2", "3"];
let Y: MyArray<number> = [1, 2, 3];
