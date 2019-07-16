interface Icar {
    brand: string;
    color: string;
    price: number;
}

export class MyClass implements Icar {
    // brand:string;
    // color:string;
    // price:number;

    static variable = 'statics variable';
    public brand: string;
    public color: string;
    public price: number;
    constructor() {}
    getBrand() {
        return this.brand;
    }
}

export function thisFunction( ) {
    const system: String = 'AP3';
    return system;
}

export function giveMeRandom( condition ) {
    return ( condition >= Math.random());
}
