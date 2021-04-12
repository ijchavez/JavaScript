//Utilizados para procesos de forma asincrona
/*
sincronica
F1     F2
 |
 >>>    |
        |
F1  <<< |

Asincronica
F1     F2
 |
 >>>    |
 |      |
 |  <<< |
 |

*/
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

//Llamadas asincronas con uso setTimeOut
function miFuncionCallback(){
    console.log('Saludo asincrono despues de 3 seg');

}

let miliSegundosDeEsperaParaTresSegundos = 3000;
setTimeout(miFuncionCallback,miliSegundosDeEsperaParaTresSegundos)

let miliSegundosDeEsperaParaCuatroSegundos = 4000;
setTimeout(function miFuncionCallback(){console.log('Saludo asincrono despues de ' + miliSegundosDeEsperaParaCuatroSegundos / 1000 +  'seg');},4000);

let miliSegundosDeEsperaParaCincoSegundos = 5000;
setTimeout(() => console.log('saludo asincrono de ' + miliSegundosDeEsperaParaCincoSegundos / 1000 +  ' segundos'), miliSegundosDeEsperaParaCincoSegundos);