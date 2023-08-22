// 1.Pick<Type,'type'>用来从Type中选择一组属性来构造新类型
interface Props {
	id: string
	title: string
	children: number[]
}


type PickProps = Pick<Props, 'id' | 'title'>

// Pick 工具类型需要两个参数，第一表示谁的属性；第二个选择哪几个属性
//   第二个参数选择的属性必须是 第一个类型变量中存在的属性
export { }
