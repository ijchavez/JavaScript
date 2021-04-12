let miFuncion = function(){
    console.log('saludos desde mi funcion')

}
//  las funciones flecha no aceptan hoisting
/*const miFuncionFlecha = () => {
    console.log('Saludos desde mi funcion Flecha')

}
*/

const miFuncionFlecha = () => console.log('Saludos desde mi funcion Flecha')

miFuncion();
miFuncionFlecha();

const saludar = () => {
    cadena = 'Saludos desde la funcion saludar() que es flecha'
    return cadena;

}
console.log(saludar());

const otroSaludar = () => 'Saludos desde la funcion otroSaludar() que es flecha';
console.log(otroSaludar());

const regresaObjeto = () => ({nombre: 'Juan', apellido : 'Lara'});
console.log(regresaObjeto());

//const funcionConParametros = (mensaje) => console.log(mensaje);
const funcionConParametros = mensaje => console.log(mensaje);

funcionConParametros('Saludos desde funcion flecha con parametros');

//const funcionConParametros = (op1, op2) => op1 + op2;
const funcionConVariosParametros = (op1, op2) => {
    let resultado = op1 + op2;
    let cadena = `Resultado: ${resultado}`
    return cadena;
    
};
console.log(funcionConVariosParametros(3, 5))

