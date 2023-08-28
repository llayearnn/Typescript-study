/**
 * infer关键字通常用于条件类型（conditional types）中，
 * 条件类型是TypeScript中的高级类型操作符之一。通过条件类型，
 * 我们可以根据某个类型的特性，在类型系统中进行条件分支和类型的变换。
 */
// 在条件类型中使用infer关键字时，通常会将infer和extends关键字一起使用，形式如下
// type MyType<T> = T extends SomeType<infer U> ? U : never;
// 在上述示例中，infer U表示我们希望TypeScript根据泛型类型T的特性推断出一个新的类型U。
// 如果T满足SomeType条件，则返回U类型，否则返回never类型。
// 1.使用 infer 关键字获取 Person.name 的类型 让我们通过一个示例来说明infer关键字的使用。假设我们有一个类型Person，它包含名字和年龄两个属性：
type Person = {
  name: string;
  age: number;
};
type ExtractName<T> = T extends { name: infer U; age: number } ? U : never;
type NameOnly = ExtractName<Person>; // 类型为 string

// 2.使用 infer 关键字获取函数参数类型
function sum(a: number, b: number): number {
  return a + b;
}
type Params<T> = T extends (...args: infer P) => any ? P : never;
type SumParams = Params<typeof sum>;
export {};
