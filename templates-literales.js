let nombre = 'Deadpool';
let real = 'wade winston';

//console.log(nombre + ' ' + real);

//console.log(`${nombre} ${real}`);

let nombreCompleto = nombre + ' ' + real;
let nombreTemplate = `${nombre} ${real}`;

//console.log(nombreCompleto === nombreTemplate);

//podemos mandar a llamar funciones anidar los template stringss


function getNombre() {
    return `${nombre} ${real}`; // cuando juntas dos variables  en un template literal ${nombre} ${real} es quivalente a concatenacion clásica nombre+real
}


console.log(`El nombre de: ${getNombre()}`); //concatenamos una cadena con una funcion que regresa una concatenacion de una variable