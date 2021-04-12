/*
Ejemplos de tipos de datos en JavaScript
*/
//Tipo de dato String
var nombre = "Carlos";
console.log(nombre);
console.log(typeof nombre);

nombre = 10
console.log(nombre);
console.log(typeof nombre);

//Tipo de dato Numerico
var numero = 1000;
console.log(numero);

//Tipo de dato Objeto
var objeto = {
    nombre: "Juan",
    apellido: "Perez",
    telefono: "55443322"

}
console.log(objeto)
console.log(typeof objeto)

//Tipo boolean (true/false)
var bandera = true;
console.log(bandera);
console.log(typeof bandera);

//Tipo de dato Function
function miFuncion(){}
console.log(miFuncion)
console.log(typeof miFuncion);

//Tipo de dato Symbol
var simbolo = Symbol('Mi Simbolo');
console.log(simbolo)
console.log(typeof simbolo)

//Tipo clase es una funcion
class Persona{
    constructor(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;

    }

}
console.log(Persona)
console.log(typeof Persona)

//Tipo de dato undefined, puede asignarse ese valor a la variable tambien
var x;
console.log(x)
console.log(typeof x)

//null >> ausencia de valor
y = null;
console.log(y)
console.log(typeof y)

//Tipo Array
var autos=['BMW','Audi','Volvo'];
console.log(autos)
console.log(typeof autos)

var z='';
console.log(z)
console.log(typeof z)

var numeroDecimal = 10.45;
console.log(numeroDecimal);
console.log(typeof numeroDecimal);
