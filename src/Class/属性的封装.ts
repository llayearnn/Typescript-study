
class Human {
    name: string
    private age: number
    private _hobby: string
    constructor(name: string, age: number,hobby: string, ) {
        this.name = name;
        this.age = age;
        this._hobby=hobby
    }

    get hobby(): string {
        return this._hobby
    }
    set hobby(v: string) {
        this.hobby=v
        this._hobby = v;
    }
}
// 简化写法
class Human1 {
    constructor(public name: string, public age: number,public hobby: string, ) {
        // 直接省略 this.xx=xx
    }
}