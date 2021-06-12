//Utilizados para procesos de forma asincrona

function miFuncion1(){
    console.log('funcion 1');

}

function miFuncion2(){
    console.log('funcion 2');

}

miFuncion2();
miFuncion1();

//Funcion de tipo callback
let imp = function imprimir(mensaje){
    console.log(mensaje);

}

function sumar(op1, op2, funcionCallBack){
    let resultado = op1 + op2;
    let cadena = `Resultado: ${resultado}`;
    funcionCallBack(cadena)

}
sumar(5, 3, imp)