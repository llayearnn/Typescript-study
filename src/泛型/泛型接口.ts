// 泛型接口
interface CreateArrayFunc {
	<T>(length: number, value: T): Array<T>
}
let createArray: CreateArrayFunc
createArray = function <T>(length: number, value: T): Array<T> {
	let result: T[] = []
	for (let index = 0; index < length; index++) {
		result[index] = value
	}
	return result
}
console.log(createArray(3, 'x'));
// 进一步 可以把泛型参数提前到接口名上
interface CreateArrayFunc1<T> {
	(length: number, value: T): T[]
}