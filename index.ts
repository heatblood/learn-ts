//interface
interface IDog{
    name: string;
    age?: number;
    readonly action: [string, number];
 
}

const realDog: IDog = {
    name: '1',
    action:['s',1]
}



interface Radio {
    switch(): void;
    name:string;
}
interface Battery{
    check();
}
interface SwitchWithBattery extends Radio{
    check();
} 


class Car implements Radio{
    name :string;
    switch() {
        
    };
}

class Plane implements SwitchWithBattery{
    name :string;
    check() {
        
    };
    switch() {
        
    };
}
    

//function

//函数声明
// /**
//  * 1.可选参数必须是最后一个
//  * 2.给参数添加默认值==可选参数
//  */

function add(x: number, y: number, z: string='1'): number {
    return 1;
}
const res = add(1, 1)

//函数表达式
const add1 = function (x: number, y: number, z: string='1'): number {
    return 1;
}
const add2: (x: number, y: number, z: string) => number = add1;


//class
class Animal{
    static catogery: string[] = ['bird', 'fish'];
    static isAnmimal(animal:any) {
        return animal instanceof Animal;
    }
    readonly read:string = '1';
    public name: string='1';//实例和子类都能访问
    private age: number=1;//自己内部可以访问
    protected sex: string = '1';//子类能访问
    
    constructor(name:string) {
        this.name = name;
    }
    run() {
       return `${this.name}  is runing`
   }
}

const dog = new Animal('dog');
console.log('dog.name------', dog.name)
console.log('dog.run()', dog.run())
console.log('isAnmimal', Animal.isAnmimal(dog))
console.log('Animal', Animal)

class Cat extends Animal{
    constructor(name:string) {
        super(name);
        this.name='11111111'
    }
    
   
    run() {
        return 'memiao----' + super.run();
    }
}
const cat = new Cat('111');
console.log('cat.name', cat.name)
console.log('cat.run()', cat.run())


enum Direction{
    Up=10,
    Down,
    Left,
    Right,
}
console.log('Direction[10]', Direction)

//约束泛型
interface Length{
    length: number;
}
function withLength<T extends Length>(arg: T): T{
    console.log('arg.length', arg.length)
    return arg;
    
}
//class 泛型
class Add<T>{
    private data = [];
    push(item: T) {
       return this.data.push(item);
    }
    pop():T{
       return this.data.shift();
    }
}


const addq = new Add<number>();//只允许传入数字
addq.push(1);
const addw = new Add<string>();//只允许传入字符串
addw.push('1');

//interface 泛型
interface QWER<T,U>{
    key: T;
    value:U
}
const zxcv: QWER<number, string> = { key: 1, value: '1' };
const arr: Array<number> = [1];


//方法类型 泛型
interface IFunciton<T>{
    (a: T, b?: T): T;
}
function IIfunction(a: number, b: number): number{
    return 1;
}
const d: IFunciton<number> = IIfunction;

//别名
type numberOrString = number | string;
type alias= (a: number)=> void;
function sd(a: numberOrString) {
    
}
const f: alias = sd;

//断言
function dd(a: numberOrString) {
    //断言成字符串
    if ((<string>a).length) {
        console.log('a.length', (<string>a).length)
    }
}

//声明文件


