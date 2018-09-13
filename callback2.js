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


let salarios = [{ //a esto se le llama arreglo de objetos 
    id: 1,
    salario: 1000

}, {
    id: 2,
    salario: 2000

}]

//funcion para tener empleado por ID

let getEmpleado = (id, callback) => {

    //para buscar en un arreglo

    let empleadoDB = empleados.find(empleado => empleado.id === id); //aqui vas a iterar entre el arreglo de objetos y vas a regresar el objeto  que corresponda al id del parametro
    /*esto regresaria
    {
        id: 1,
        nombre: 'Fernando'

    },
    */
    if (!empleadoDB) {
        callback(`No existe el empleado con el id ${ id }`) //cuando se dispara el callback se le envia un parametro, que generalmente el primero es un error
    } else {
        callback(null, empleadoDB) //en este caso no hay un error solo una respuesta
    }

}



/*esto 
    let empleadoDB = empleados.find(empleado => empleado.id === id); 

es igual a aesto 
    let empleadoSB =  empleados.find(empleado =>  {
        return empleado.id === id;
    });

*/



let getSalario = (empleado, callback) => { // aqui empleado es este objeto { id: 2, nombre: 'Melissa' }, una vez obtenido en getEmpleado

    //para buscar en un arreglo

    let salarioDB = salarios.find(salario => salario.id === empleado.id);
    /* esto es lo que regresaría
    {
        id: 2,
        salario: 2000
    
    }
    */
    if (!salarioDB) {
        callback(`No existe el salario para el empleado con el id ${ empleado.nombre }`) //aqui ya estamos en el punto en el que el empleado existe, ya solo seria validar si tiene o no salario, como en este caso
    } else {
        callback(null, { //se conviene utilizr un objeto si esta enviando más de una propiedad, este objeto se construye con info de  empleados y salarios
            nombre: empleado.nombre, // este dato la obtenemos de getEmpleado cuando validamos existe el usuario
            salario: salarioDB.salario,
            id: empleado.id
        })
    }

}
getEmpleado(2, (err, empleado) => {
    if (err) {
        return console.log(err)
    }
    console.log("empleado");
    console.log(empleado);
    getSalario(empleado, (err, resp) => { // aqui empleado es este objeto { id: 2, nombre: 'Melissa' }, esto empieza cuando pasa el callback de get empleado para entrar a getSalario 
        if (err) {
            return console.log(err)
        }
        console.log(`El salario para el empleado ${ resp.nombre } es de ${ resp.salario }`)
    });
});