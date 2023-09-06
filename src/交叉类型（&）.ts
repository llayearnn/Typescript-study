// 交叉类型(&): 功能类似于接口继承，用于组合多个类型为一个类型
interface Person {
  name: string;
}
interface Contact {
  phone: string;
}
interface Contact {
  phone: string;
}
type Family = {
  num: number;
};
type Child = {
  hobby: string;
};
type body = Family & Child;
type PersonDetail = Person & Contact & Family;
let obj1: PersonDetail = {
  name: "jack",
  phone: "7516641",
  num: 4,
};
// 使用交叉类型后 新的类型PersonDetail就同时具备Person和Contact的所有属性类型
// 交叉类型（&）和继承（extends）的区别
interface A {
  fn: (args: number) => string;
}
// interface B extends A { // 会报错
//   // 继承就会报错  类型不兼容
//   fn: (args: string) => string;
// }
interface C {
  fn: (args: number) => string;
}
interface D {
  fn: (args: string) => string;
}
type F = C & D; // 不会报错,可以简单理解为下面
// fn: (args: number | string) => string

export {};
