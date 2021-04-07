
function miFuncion(/*Argumentos*/a, b){
    //Cuerpo de la funcion, dentro de la funcino solamente puedo utilizar arguments.
    console.log(arguments.length)
    console.log('Suma: ' + (a + b));

}
miFuncion(2,3);

console.log(typeof miFuncion);

let miFuncionTexto = miFuncion.toString();
console.log(miFuncionTexto);