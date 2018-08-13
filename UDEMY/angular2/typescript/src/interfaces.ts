interface Xmen {
    nombre:string,
    poder:string
}

// function enviarMision(xmen:{nombre:string}) {}
function enviarMision(xmen:Xmen) {
    console.log(`Enviando a ${xmen.nombre}`);
}
let enviarCuartel = (xmen:Xmen) => {
    console.log(`Enviando al cuartel a ${xmen.nombre} con el poder ${xmen.poder}`);
}

let wolverine:Xmen = {
    nombre: 'Wolverine',
    poder: 'Regeneración'
}

console.log('INTERFACES');
enviarMision(wolverine);
enviarCuartel(wolverine);
