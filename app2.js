//podemos mandar comandos con parametros 

const argv = require('./config/yargs').argv; //ese  .argv es la funcionalidad  que esta dentro del archivo que vamos a ocupar, 
// antes de separarlo en otro archivo lo teniamos asi por que estabamos cargando la libreria y ahi mismo teniamos los comandos
/*
const argv = require('yargs')
.command('listar', 'Imprime en consola la tabla de multiplicar', opts //se puede hacer una concatenacion de un metodo command, llamado  listar, que imprime el  un mensaje como segundo parametro
).command('crear', 'Genera un archivo con la tabla de multiplicar', opts).help().argv;

*/

const colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar'); //importamos dos funciones

//let argv2 = process.argv;

// console.log(argv); //este es el de yargs   regresa esto { _: [], '$0': 'app2.js' }
//  console.log(argv2); // y este es el argv que recibimos de los procesos  [ '/usr/bin/node', '/home/kubo/Escritorio/node-udemy/node/02-fundamentos/app2.js' ]


/* node app2 listar --base 5 al imprimir esto  yargs  me regresa base en pares de valores es decir propiedad y valor y process arv, solo lista los parametros

{ _: [ 'listar' ], base: 5, '$0': 'app2' }


[ '/usr/bin/node',
  '/home/kubo/Escritorio/node-udemy/node/02-fundamentos/app2',
  'listar',
  '--base',
  '5' ]


*/





//si imprimiera  esto nos devolveria solo el valor de -base o -b
//console.log(argv.base);

//  node app2 listar --limite=20  -b 10, de esta manera podría mandar el parametro de base en el orden que sea, sin necesaidad de tener que estar en la tercera posición


//console.log(argv.limite);

//comandos independies, vamos a trabajar con los comandos crear y listar



let comando = argv._[0]; //aqui voy a obtener el comando, del objeto argv
/*
 { _: [ 'listar' ],
  limite: 20,
  l: 20,
  b: 10,
  base: 10,
  '$0': 'app2' }
  */

switch (comando) { //dependiendo del comando que entre listar o crear a los parametros de consola se va realizar una acción
    case 'listar':
        console.log('listar'); //node app2 listar --limite=20  -b 10


        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        console.log('crear'); //node app2 crear --base 10

        crearArchivo(argv.base, argv.limite).then(archivo => console.log(`Archivo creado:`, colors.yellow(archivo))).catch(err => console.log(err));
        // argv.base ahora la base esta especificada en el parametro declarado dentro del comando
        break;
    default:
        console.log("comando no reconocido")

}
//uso de colors
//console.log("hola soy un mensaje verde".green);