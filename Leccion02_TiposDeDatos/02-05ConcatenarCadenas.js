var nombre = 'Juan'
var apellido = 'Perez'
var nombreCompleto = nombre + ' ' + apellido
console.log(nombreCompleto)

var nombreCompleto2 = 'Carlos' + ' ' + 'Lara'
console.log(nombreCompleto2)

//se evalua de izq a der entonces encuentra primero un string toma el 219 como un string
var x = nombre + 219;
console.log(x);

x = nombre + (2 + 4);
console.log(x);

x = 2 + 4 + nombre;
console.log(x);

