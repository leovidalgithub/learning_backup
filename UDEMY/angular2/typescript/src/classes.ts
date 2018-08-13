class Avenger {
    nombre:string;
    equipo:string;
    nombreReal:string;
    puedePelear:boolean = false;
    peleasGanadas:number = 0;
    constructor(nombre:string,equipo:string,nombreReal:string) {
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }
    imprimir() {
        console.log('Método Imprimir : ', this.nombreReal);
    }
}

let antman:Avenger = new Avenger('Antman','Cap','Scott Lang');

console.log(antman);
console.log('CLASSES');