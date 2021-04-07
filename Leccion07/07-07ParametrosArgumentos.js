let sumar = function (a = 4 , b = 5) {
    //valores por defecto en caso de no insertar un valor en la funcion
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    return a + b + arguments[2];

};
//Si no coincide la cantidad de parametros con la cantidad de argumentos los accedemos con
let resultado = sumar(3, 2, 7)
console.log(resultado);
