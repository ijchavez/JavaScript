//Async obliga a la funcion a devolver una promesa
//El código es asincrono, primero se en via el inicio y fin y luego el valor de la promesa a los 3 seg
async function miFuncionConPromesa(){
    return 'saludos con promesa y async';

}

miFuncionConPromesa().then(valor => console.log(valor));