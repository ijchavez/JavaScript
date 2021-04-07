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
