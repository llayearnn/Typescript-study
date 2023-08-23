// 描述对象类型 接口

type myTypeIn = {
  name: string;
  age: number;
  [propName: string]: any;
};
const people: myTypeIn = {
  name: "eve",
  age: 18,
  hobby: "games",
};

interface MyTypeIn {
  name: string;
  age: number;
  [key: string]: any;
}

const people1: MyTypeIn = {
  name: "sam",
  age: 19,
};
interface myInterface {
  name: string;
  sayHello: (a: any, b: any) => void;
  doSomething(): void;
}
/**
 * 定义类时，可以使类去实现一个接口
 * 即 使类满足接口的要求
 */
class myClass implements myInterface {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  sayHello(a, b): void {
    console.log(a);
    console.log(b);
    console.log("aaa");
  }
  doSomething() {
    console.log("do something");
  }
}
