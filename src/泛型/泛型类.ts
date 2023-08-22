// 泛型类
class GenericNumber<T>{
	zeroValue: T;
	add: (x: T, y: T) => T
}
let myGenericNumberFunc = new GenericNumber<number>()
myGenericNumberFunc.zeroValue = 0
myGenericNumberFunc.add = function (x, y) {
	return x + y
}
// 泛型参数的默认类型 当使用泛型时 没有在代码中指定参数的类型，
// 从实际参数也无法推测出时，默认类型就会起作用
function createArray1<T = string>(length: number, value: T): T[] {
	let result: T[] = []
	for (let i = 0; i < length; i++) {
		result[i] = value
	}
	return result
}


