// Decorator is a Function that receives a Class Constructor as parameter

console.log('DECORATOR');

let myDecorator = (constructor:Function) => {
    console.log(constructor);
}

@myDecorator
class Villano {
    constructor(public name:string) {}
}
