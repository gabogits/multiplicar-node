/*
function sumar(a, b) {
    return a + b;
}

*/
/*esto es equivalente a lo de arriba
let sumar = (a, b) => {
    return a + b;
}
*/
/*podemos cambiar la funcion de arriba de la sig forma. ya que es una funcion con una sola linea con un return*/
let sumar = (a, b) => a + b; //va implicito el return
//console.log(sumar(10, 20));

let saludar = () => 'Hola mundo';

//console.log(saludar());


let saludar2 = (nombre) => `Hola ${ nombre }`;

/*tambien funciona de esta manera

let saludar2 = nombre => `Hola ${ nombre }`; como solo recibimos un parametro no es necesario agregarle los parentesis a nombre

*/

//console.log(saludar2('Fernando'));



/*OTRO EJERCICIO*/


let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre() { ///Aqui no se puede transformar a la funcion flecha getNombre: () => {}, ya qyue no funciona this
        return `${this.nombre} ${this.apellido} - poder: ${this.poder} `
    }
}





console.log(deadpool.getNombre());