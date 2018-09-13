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

let getEmpleado = async(id) => {


    let empleadoDB = empleados.find(empleado => empleado.id === id);
    if (!empleadoDB) {
        throw new Error(`No existe el empleado con el id ${ id }`)
    } else {
        return empleadoDB;
    }


}


let getSalario = async(empleado) => {


    //return new Promise((resolve, reject) => { con el asyn nos evitamos el encerrar nuestra funcion dentro de este return


    let salarioDB = salarios.find(salario => salario.id === empleado.id);

    if (!salarioDB) {
        throw new Error(`No existe el salario para el empleado con el nombre ${ empleado.nombre }`) //este no es un return, podemos seguir ejecutando códig despues de esta

    } else {
        return {
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        };
    }




}

let getInformacion = async(id) => { // aunque creamos una funcion mas este codigo se ve mas ordenado

    let empleado = await getEmpleado(id);
    let resp = await getSalario(empleado); //para que se ejecute esta linea tiene que regresarnos respuesta la anterior
    return `${ resp.nombre} tiene un salario ${ resp.salario}$`;

    /*la diferencia del uso de async y await este con respecto a la implementacion en callback2.js es, ya no se tiene que anidar un callback adentro de otro, asi como el cachar el error en cada uno'
        y ya sea que exista un error se envia mediante  throw new Error  y si la respuesta es exitosa se envia en un return


        la diferencia entre promises2.js y este, es que ya no es necesario indicar el reject y el resolve 
        y el uso de async da por implicita la promesa y evita encerrar el codigo entre return new Promise((resolve, reject) => {
     en esta funcion se gestiona los callbacks o promesas, en el orden de ejecucion, 
    */
}


//es al disparar esta funcion, que se mandan los parametros así como el catch de los errores 
getInformacion(1).then(mensaje => console.log(mensaje)).catch(err => console.log(err));