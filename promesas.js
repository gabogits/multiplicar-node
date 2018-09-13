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

    getSalario(empleado).then(resp => { //y el callback se maneja con el then
        console.log(`El salario para el empleado ${ resp.nombre } es de ${ resp.salario }`)
    }, (err) => { //ai se manejan los errores con las promesas, po aárte
        console.log(err)
    });
    /*esto puede resumir así
    , (err) =>  console.log(err));
    **/

}, (err) => {
    console.log(err)
});
/*, (err) =>  console.log(err)

*/