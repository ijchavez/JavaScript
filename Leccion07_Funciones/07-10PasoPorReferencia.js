// Tipos primitivos
let x = 10;
console.log(x);

function cambiarValor(a){
    a = 20;
    return a;

}
// le paso el valor a X y cualquier cambio en la variable A no modifica nada en X
cambiarValor(x);
console.log(x);
//console.log(a); // es un argumento de cambiarValor, se destruye al terminar de ejecutar el metodo, se creo dentro del mismo

//Persona almacena una referencia a un objeto
// Se crea un objeto en memoria, compuesta por nombre y apellido, juan perez
const persona = {

    nombre: 'Juan',
    apellido: 'Perez',
    edad: 21

}
// La funcion accede a la referencia del objeto
console.log(persona);

//llamamos a cambiarValorObjeto estamos pasando la referencia a la variable p1, apunta al mismo objeto en memoria y accedemos a esos atributos, pasando la variable
//p1 cambiamos juan perez por carlos lara

function CambiarValorObjeto(p1){
    p1.nombre = 'Carlos';
    p1.apellido = 'Lara';
    p1.edad = 23

}

CambiarValorObjeto(persona);
console.log(persona);

