// 泛型高级类型
// 1. 多个类型变量；且变量之间可以约束 keyof
function getPropVal<Type, Key extends keyof Type>(obj: Type, key: Key) {
	return obj[key]
}
const person = { name: 'ohnSmith', age: 18 };

getPropVal(person, 'name')
// keyof 关键字接受一个对象类型，生成其键名称（可能是字符串或者数字）的联合类型
// keyof Type 实际上获取的是person对象所有键的联合类型 也就是 ’name’|’age'
// 类型变量 Key 受Type 约束，可以理解为Key只能是Type所有键中的任意一个，或者只能访问对象存在的属性