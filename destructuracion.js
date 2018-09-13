let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre: function() {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder} `
    }
}

//console.log(deadpool.getNombre());

// let nombre = deadpool.nombre;
// let apellido = deadpool.apellido;
// let poder = deadpool.poder;

let { nombre, apellido, poder: habilidad } = deadpool; //así se toman multiples propiedades de un objeto, que es equivalente a las tres lineas comentadas de arriba 
//el caso de poder: habilidad, se refiere a que nosotros renombramos la variable a habilidad

console.log(nombre, apellido, habilidad)