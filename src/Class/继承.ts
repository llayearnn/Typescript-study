class Animals {
    name:string
    age:number
    constructor(name:string,age:number) {
        this.name=name;
        this.age=age;        
    }
    sayHello(){
        console.log('动物叫');
    } 
}

class Dod extends Animals {
    height:number
    constructor(name:string,age:number,height:number){
        super(name,age)
        this.height=99
    }
    sayHi(){
        // 可以直接使用父类的方法
        super.sayHello()
    } 

}


