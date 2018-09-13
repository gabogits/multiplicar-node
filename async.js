//asyn-await es otra propiedad de ecmascript 7 que podemos ocupar en node


/*-----ASYNC-----*/

let getNombre = async() => { //el nombre de la funcion es get nombre, no confundir con async() -async no es el nombre d ela funcion-, solo es para indicar que va devolver una promesa 

    //el async no necesariamente es para funciones de flecha se puede ocupar en una funcion normal asi
    //let getNombre = async function {

    //cualquier error que suceda aca lo va capturar el catch 
    //podemos ocupar throw new Error, para cachar un error;

    //throw new Error('No esiste un nombre para ese usuario');

    return 'Fernando'; //nuestro return es ahora una promesa
}

/*esto de aquí arriba es igual a
let getNombre = () => {
    return new Promise ((resolve, reject) => {
        resolve('Fernando');
    }); 
}
*/








getNombre().then(nombre => { //no envias ningun parametro, solo recibes el valor del return 'Fernando';
    console.log(nombre); //lo que sea que regrese la funcion va ser el resolve 
}).catch(e => { //Todo lo que suceda que mande error en esta funcion  let getNombre = async() => {, lo va agarrar este catch
    console.log('Error de ASYNC', e)
});



/*-----OTRO EJERCICIO-----*/

let getNombre2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('juan');
        }, 3000)

    });
}

getNombre2().then(nombre => { //no envias ningun parametro, solo recibes el valor del return 'Fernando';
    console.log(nombre); //lo que sea que regrese la funcion va ser el resolve 
}).catch(e => { //Todo lo que suceda que mande error en esta funcion  let getNombre = async() => {, lo va agarrar este catch
    console.log('Error de ASYNC', e)
});


/*----AWAIT-----*/

let saludo = async() => { //es necesario especificar el async en la funcion para utilizar el await, es decir el await tiene que estar dentro de una funcion async (como vimos en anterior ejercicio, el async si puede vivir solito)
    let nombre = await getNombre2() //utilizaremos la funcion del anterior ejercicio getNombre2(),
        //el await hace que las funciones que regresen promesas, tengan la sensacion de que son trabajos sincronos, es decir en el mismo hilo
        //con el await indicamos que la sig linea no se va disparar hasta que se obtenga la respuesta de esta
        //tener cuidado por que si no hay respuesta ahi se queda el programa


    //con esta funcion await yo fuedo ejecutar la promesa esperar el resultado, el resultado guardarlo en una variable y esa variable la podemos ocupar como si fuera una funcion o un codigo normal de javascript
    return `Hola ${ nombre }`;
}


saludo().then(mensaje => { //no envias ningun parametro, solo recibes el valor del return 'Fernando';
    console.log(mensaje); //lo que sea que regrese la funcion va ser el resolve 
});