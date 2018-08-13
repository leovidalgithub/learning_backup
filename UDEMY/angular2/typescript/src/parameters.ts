//funciones: parámetros obligatorios, opcionales y por defecto

function activar( quien:string, defecto:string= 'batiseñal', opcional?:number ) {
    let mensaje:string;
    if( opcional ) {
        mensaje = `${quien} activó la ${defecto} con parámetro opcinal : ${opcional}`;
    } else {
        mensaje = `${quien} activó la ${defecto} sin parámetro opcional`;
    }
    console.log(mensaje);
}

console.log('PARAMETERS');
activar('Pedro','Batiseñal',33);
activar('Luis','Capapoide');

