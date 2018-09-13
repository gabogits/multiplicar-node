const fs = require('fs');
const colors = require('colors/safe');

// se puede exportar el archivo de esta manera tambien module.exports.crearArchivo


let listarTabla = (base, limite = 10) => { //podemos definir vlores por defecto en nuestros parametros es una particularidad unica de ecmascript 6

    console.log(`==============================`.blue);
    console.log(`=======tabla de ${base } =====`.blue);
    console.log(`==============================`.blue);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${ i } = ${base * i} `);
    }


}
let crearArchivo = (base, limite = 10) => {



    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido  ${base} No es un numero `);
            return; //es necesario aplicar el return para que no continue el programa, ya que con reject se continua ejecutando el codigo
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base}  * ${ i } = ${base * i}\n `;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`tabla-${base}.txt con limite ${limite}`);
            }


        });

    });



}

module.exports = { // en este obejeto podemos añadirle las funciones
    crearArchivo,
    listarTabla
}

/*existe un objeto global llamado modulo. Exports es un lugar donde podemos poner objetos para que puedan ser trabajados globalmente*/

/*en el modulo es un objeto global que esta disponible a lo largo de toda la aplicación*/