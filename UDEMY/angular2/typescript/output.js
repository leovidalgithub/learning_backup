var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//arrow functions
var miFuncionF = function (a) { return a; };
console.log(miFuncionF('Pepe'));
var miFn2 = function (a, b) { return a + b; };
console.log(miFn2(4, 5));
var miFn3 = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
console.log(miFn3('pedrito'));
var miFn4 = function (nombre) { return nombre.toUpperCase(); };
console.log(miFn4('juan'));
var hulk = {
    nombre: 'Using local context from Hulk object',
    smash: function () {
        var _this = this;
        setTimeout(function () { return console.log(_this.nombre + ' smash!'); }, 1900);
    }
};
hulk.smash();
function fn1() { return 9; }
;
var fn1F = function () { return 8; };
console.log(fn1());
console.log(fn1F());
var Avenger = /** @class */ (function () {
    function Avenger(nombre, equipo, nombreReal) {
        this.puedePelear = false;
        this.peleasGanadas = 0;
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }
    Avenger.prototype.imprimir = function () {
        console.log('Método Imprimir : ', this.nombreReal);
    };
    return Avenger;
}());
var antman = new Avenger('Antman', 'Cap', 'Scott Lang');
console.log(antman);
console.log('CLASSES');
// Decorator is a Function that receives a Class Constructor as parameter
console.log('DECORATOR');
var myDecorator = function (constructor) {
    console.log(constructor);
};
var Villano = /** @class */ (function () {
    function Villano(name) {
        this.name = name;
    }
    Villano = __decorate([
        myDecorator
    ], Villano);
    return Villano;
}());
var avenger = {
    nombre: 'Steve',
    clave: 'Capitán América',
    poder: 'Droga'
};
var clave = avenger.clave, poder = avenger.poder, nombre = avenger.nombre;
console.log('DESTRUCTURATION');
console.log('clave : ', clave);
//let { clave:string } ....
// dentro de una destructuración, lo que está después de : se considera como un alias de la variable
// console.log(nombre,clave,poder);
var avengers = ['Steve', 'Thor', 'Tony'];
var loki = avengers[0], capi = avengers[1], ironman = avengers[2];
console.log('loki : ', loki);
// console.log(loki, capi, ironman);
//destructuración de arreglos SÍ importa el orden
// loki corresponderá al elemento 0 del array
// function enviarMision(xmen:{nombre:string}) {}
function enviarMision(xmen) {
    console.log("Enviando a " + xmen.nombre);
}
var enviarCuartel = function (xmen) {
    console.log("Enviando al cuartel a " + xmen.nombre + " con el poder " + xmen.poder);
};
var wolverine = {
    nombre: 'Wolverine',
    poder: 'Regeneración'
};
console.log('INTERFACES');
enviarMision(wolverine);
enviarCuartel(wolverine);
//funciones: parámetros obligatorios, opcionales y por defecto
function activar(quien, defecto, opcional) {
    if (defecto === void 0) { defecto = 'batiseñal'; }
    var mensaje;
    if (opcional) {
        mensaje = quien + " activ\u00F3 la " + defecto + " con par\u00E1metro opcinal : " + opcional;
    }
    else {
        mensaje = quien + " activ\u00F3 la " + defecto + " sin par\u00E1metro opcional";
    }
    console.log(mensaje);
}
console.log('PARAMETERS');
activar('Pedro', 'Batiseñal', 33);
activar('Luis', 'Capapoide');
