let empleados = [{ //a esto se le llama arreglo de objetos 
    id: 1,
    nombre: 'Fernando'

}, {
    id: 2,
    nombre: 'Melissa'

}, {
    id: 3,
    nombre: 'juan'

}]


let salarios = [{
    id: 1,
    salario: 1000

}, {
    id: 2,
    salario: 2000

}]

let getEmpleado = (id) => {

    //promises son una caracteristica del ecmascript 6 que podemos utilizar en node

    return new Promise((resolve, reject) => { //tiene tres callbacks resolve, reject y otra función


        let empleadoDB = empleados.find(empleado => empleado.id === id);
        if (!empleadoDB) {
            reject(`No existe el empleado con el id ${ id }`)
        } else {
            resolve(empleadoDB);
        }


    });



}


let getSalario = (empleado) => {

    return new Promise((resolve, reject) => {

        let salarioDB = salarios.find(salario => salario.id === empleado.id);

        if (!salarioDB) {
            reject(`No existe el salario para el empleado con el nombre ${ empleado.nombre }`) //este no es un return, podemos seguir ejecutando códig despues de esta

        } else {
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: empleado.id
            })
        }

    });

}


getEmpleado(3).then(empleado => {

    return getSalario(empleado); //una vez obtenido el empleado en el return va el segundo callback getSalario, en la que empleado recibido de  getEmpleado y el calbback esta en el resp
    // la sig promesa depende de este return
    // cuando hacemos un return en este caso de una funcion que tiene otra promesa getSalario(empleado), podemos ocupar otro then enseguida, esta raro
}).then(resp => {
    console.log(`El salario para el empleado ${ resp.nombre } es de ${ resp.salario }`)
}).catch(err => { //aqui encadenamos el error mediante un catch, y así se puede cachar ambos errores de los dos callbacks, tanto que no existe empleados, como que no hay salario para ese empleado en esecifico, asi ocupa cunado existe este tipo de cadenas
    console.log(err);
})