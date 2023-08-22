// 1.Readonly<Type>用来构建（创建）一个类型，将Type的所有属性设置为只读
interface Props {
	id: string;
	children: number[]
}

const a: Props = {
	id: '13',
	children: [1, 2, 3]
}
a.id = '15'// 修改
type ReadonlyProps = Readonly<Props>
const b: ReadonlyProps = {
	id: '14',
	children: [1]
}
// b.id='15' // 当想给id属性重新赋值就会报错，因为它是只读的
export { }
// 构造出来的PartialProps结构和IdProps相同，但是所有属性变为可选