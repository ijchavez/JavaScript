let mes = 1;
let index;
let estacion = ['Invierno', 'Primavera', 'Verano', 'Otoño','Inválida'];
let mesArr = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', "Octubre", "Noviembre", "Diciembre"];
// switch realiza una comparacion estricta

switch(mes){
    case 1: case 2: case 12:
        mesStr = mesArr[mes - 1];
        index = 0;
        break;

    case 3: case 4: case 5:
        mesStr = mesArr[mes - 1];
        index = 1;
        break;

    case 6: case 7: case 8:
        mesStr = mesArr[mes - 1];
        index = 2
        break;

    case 9: case 10: case 11:
        mesStr = mesArr[mes - 1];
        index = 3;

    default:
        index = 4;
        mesStr = mes;
}
console.log("La estación del mes " + mesStr + " es: "+ estacion[index])
