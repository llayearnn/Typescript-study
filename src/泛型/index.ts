/**
 * 在定义函数或者类，如果遇到类型不明确可以使用泛型
 */

function myFun<T>(a: T): T {
	return a
}
interface Person {
	name: string;
	age: number
}

myFun(10) // 1. 不指定泛型,TS 类型推断、
myFun<string>('Lakers')// 2. 手动指定 泛型

function myFun2<T, K>(a: T, b: K): T {
	return a
}
myFun2(123, 'hello')
myFun2<number, Array<number>>(123, [123456])
myFun2<Array<Person>, number>([{ name: 'ceshi', age: 80 }], 13)
myFun2<Person[], number>([{ name: 'hi', age: 40 }], 99)

// 泛型继承
interface lengthProps {
	length: number,
	toString: () => string
}
function myFun3<T extends lengthProps>(a: T): string {
	return a.toString()
}
myFun3({ a: 1, length: 2 })

// 泛型类

class MYClass<T>{
	name: T
	constructor(name: T) {
		this.name = name
	}
}