"use strict";
let resultado = -3000;

try {
    if(isNaN(resultado)) throw 'No es un numero';
    else if(resultado === '') throw 'Es cadena vacia'
    else if(resultado >= 0) throw 'Valor positivo';
    else if(resultado < 0) throw 'Valor negativo';

}
catch(error){
    console.log('Error ' + error);
    //console.log(error.name);
    //console.log(error.message);
}
finally{
    console.log('Termina la revision de errores')
}