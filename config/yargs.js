 //en este archivo o enviar parametros desde la consola, utilizando yargs, para crear archivos con tablas de multiplicar

 const opts = {
     base: { //y como tercer argumento es la configuarcion de parametros que este comando puede recibir
         //este es  el objeto de este  parametro en particular con sus propiedades
         demand: true, //este parametro es obrligatorio se tiene que escribir en consola
         alias: 'b' //esta es otra forma de nombrar a base
     },

     limite: { //con este parametro establecemos un numero limite por el que se va multiplicar, es decir el valor maximo de i en el ciclo for
         alias: 'l',
         default: 10, // no es un valor obligatorio por lo que si no se especifica como parametro se da un valor de 10 por default
     }
 }

 const argv = require('yargs')
     .command('listar', 'Imprime en consola la tabla de multiplicar', opts //se puede hacer una concatenacion de un metodo command, llamado  listar, que imprime el  un mensaje como segundo parametro
     ).command('crear', 'Genera un archivo con la tabla de multiplicar', opts).help().argv;


 module.exports = {
     argv
 }