// 1.Record<keys,Type>用来够艰难一个对象类型，属性的键为keys,属性类型为Type
type RecordObj = Record<'a' | 'b' | 'c', string[]>
const obj: RecordObj = {
	a: ['3'],
	b: ['2'],
	c: ['1']
}