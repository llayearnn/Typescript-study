// Omit是TypeScript3.5新增的一个辅助类型，它的作用主要是：
//  以一个类型为基础支持剔除某些属性，然后返回一个新类型。
type Person = {
  name: string;
  age: string;
  location: string;
};
type PersonWithoutLocation = Omit<Person, "location" | "age">;

// PersonWithoutLocation equal to QuantumPerson
type QuantumPerson = {
  name: string;
  age: string;
};
export {};
