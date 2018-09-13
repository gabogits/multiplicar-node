let nombre = "Wolverine1"; //con let no puedes repetir una variable con un mismo nombre

if (true) {
    let nombre = "Nombre";
}

console.log(nombre);



/*cuando
var nombre = "Wolverine1";
var nombre = "Wolverine2";
var nombre = "Wolverine3";
var nombre = "Wolverine4";
*/

/*
for (var i = 0; i <= 5; i++) {
    console.log(`i: ${ i }`);

}
console.log(i);
*/
let i;
for (let i = 0; i <= 5; i++) { //este let i solo sirve dentro de este contexto, no podemos imprimir el valor de este ciclo for por fuera
    console.log(`i: ${ i }`);

}
console.log(i);