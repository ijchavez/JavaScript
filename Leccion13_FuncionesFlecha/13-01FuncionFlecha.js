let miFuncion = function(){
    console.log('saludos desde mi funcion')

}
//  las funciones flecha no aceptan hoisting
const miFuncionFlecha = () => {
    console.log('Saludos desde mi funcion Flecha')

}

miFuncion();
miFuncionFlecha();