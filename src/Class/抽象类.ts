/**
 * 一个类 仅用于来被继承，不能用来创建对象
 * 抽象类可以添加抽象方法
 */
abstract class People {
    name:string
    constructor(name:string) {
        this.name=name
    }
    /**
     * 抽象类可以添加抽象方法，abstract 开头
     * 抽抽象方法 没有方法体，子类必须进行重写
     */
    abstract sayHello():void
}
class Elves extends People{
    sayHello(){
        console.log('精灵族');
        
    }
}