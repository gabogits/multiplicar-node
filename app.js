const fs = require('fs'); //esta libreria es propia de node, ya existe nadamas tenemos que cargarla
//este paquete tiene muchas funciones: verificar si existe un archivo grabar un archivo, borrar un archivo


// const multiplicar = require('./multiplicar/multiplicar'); hecho de esta manera llaamos todo el archivo

const { crearArchivo } = require('./multiplicar/multiplicar'); //en esta manera solo llamamos a la funcionalidad al objeto que queremos importar

//console.log(multiplicar);
//al imprimir consola obtenemos { crearArchivo: [Function: crearArchivo] } , para indicar que tiene una propiedad crearArchivo que adentro  reconoce una funcionalidad  crearArchivo


//let base = "sa";

/*codigo anterior de multiplicar
let data = '';

for (let i = 1; i <= 10; i++) {
    data += `${base}  * ${ i } = ${base * i}\n `; // \n este es un salto de linea

}



fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => { //el primer parametro es el nombre del archivo con el path, si es requrido, la informacion que se va grabar (con opciones) , yn callback q
    if (err) throw err; //el callback incluye un error, por ejemplo que el path no exista, que no tenga permiso de escritura

    console.log(`El archivo tabla-${base}.txt ha sido creado`)
});
*/

//console.log(process) //en node hay varios objectos globales/variables de entorno que estan corriendo  al momento que la aplicacion se ejecuta
//al imprimir en consola process  aparece una gran cantidad de infoel siytema operativo, el usuario, el procesador


//console.log(process.argv)
//al imprimir  process.argv, regresa un arreglo con la ubicacion (path) de node y la ubicacion del archivo

//podemos utilizar comandos en la terminal que reciben parametros
//cuando escribimos en la terminal npm install express, aqui en la funcion npm estamos en realidad mandando a la funcion npm install y express, install y express son parametros


//en este punto al ejecutar el inicio de la aplicacion estamos mandando ahi mismo en esa linea el valor  de la base como parametro ( node app.js --base=5) para crear las tablas
let argv = process.argv;
let parametro = argv[2];
let base = parametro.split('=')[1]; //split divide la cadena en un arreglo, para separar una estring mediante un indicador = en varios elementos

console.log(base);
//hacerlo de esta manera es muy volatil ya que dependemos que nuestro paramtro lo escibam0s bajo esa estricta estructura, d eigual forma si no escribimos una base
//nos puede regresar un error en este momento entra yargs

crearArchivo(base).then(archivo => console.log(`Archivo creado: ${archivo}`)).catch(err => console.log(err));