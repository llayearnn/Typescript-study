// 交叉类型(&): 功能类似于接口继承，用于组合多个类型为一个类型
interface Person {
  name: string;
}
interface Contact {
  phone: string;
}
type Family = {
  num: number;
};

type PersonDetail = Person & Contact & Family;
let obj1: PersonDetail = {
  name: "jack",
  phone: "7516641",
  num: 4,
};
// 使用交叉类型后 新的类型PersonDetail就同时具备Person和Contact的所有属性类型
export {};
