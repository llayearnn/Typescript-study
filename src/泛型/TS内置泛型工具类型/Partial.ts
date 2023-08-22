// 1.Partial<Type>用来构建（创建）一个类型，将Type的所有属性设置为可选
interface IdProps {
	id: string;
	children: number[]
}

const a: IdProps = {
	id: '13',
	children: [1, 2, 3]
}
type PartialProps = Partial<IdProps>
const b: PartialProps = {
	id: '14'
}
export { }
// 构造出来的PartialProps结构和IdProps相同，但是所有属性变为可选