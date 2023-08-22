class Fish {
    name:string
    age:number
    // 静态属性 不需要实例来访问
    static hobby:string='study'
    // 只读属性
    readonly height:number=175;
    // 这可以在当前类中使用，（继承的子类也无法访问）实例则无法访问
    private count:number=0;
    // 受保护的属性，（子类也可以访问），实例则无法访问
    protected common:number=0;

    constructor(name:string,age:number) {
        this.name=name;
        this.age=age;        
    }
}