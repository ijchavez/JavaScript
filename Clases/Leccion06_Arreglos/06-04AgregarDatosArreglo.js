//let autos = new Array('BMW', 'Mercedes Benz', 'Volvo');
const autos = ['BMW', 'Mercedes Benz', 'Volvo'];
console.log(autos)

//RECORRER UN ARREGLO

for (i=0; i < autos.length; i++){
    //console.log(autos[i]);
    console.log(i + ' : ' + autos[i]);
}

//Modificar un arreglo
autos[1] = 'Audi';
console.log(autos[1]);
console.log(autos)

//Agregar datos al arreglo
autos.push('Mercedes Benz');
console.log(autos)

//Cantidad de elementos de un arreglo
console.log(autos.length)

//Agregar un elemento al ultimo:
autos[autos.length] = 'Cadillac';
console.log(autos)

//No recomendable pero se puede hacer
autos[6] = 'Porsche';
console.log(autos)
