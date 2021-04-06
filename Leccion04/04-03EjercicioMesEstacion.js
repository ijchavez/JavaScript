let mes = 6;

let estacion = ['Invierno', 'Primavera', 'Verano', 'Otoño'];
let mesArr = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', "Octubre", "Noviembre", "Diciembre"];

if (mes > 12 || mes < 1){
    console.log(mes + "no es un numero de mes valido (1-12)")

}else{
    if (mes == 1 || mes == 2 || mes == 12){
        
        if (mes == 1){
            mesStr = mesArr[mes - 1];
        }
        if (mes == 2){
            mesStr = mesArr[mes - 1];
        }
        if (mes == 12){
            mesStr = mesArr[mes - 1];
        }
        console.log("La estación del mes " + mesStr + " es: "+ estacion[0])
    }
    else if(mes == 3 || mes == 4 || mes == 5){
        
        if (mes == 3){
            mesStr = mesArr[mes - 1];
        }
        if (mes == 4){
            mesStr = mesArr[mes - 1];
        }
        if (mes == 5){
            mesStr = mesArr[mes - 1];
        }
        console.log("La estación del mes " + mesStr + " es: "+ estacion[1])
    }
    else if(mes == 6 || mes == 7 || mes == 8){
        
        if (mes == 6){
            mesStr = mesArr[mes - 1];
        }
        if (mes == 7){
            mesStr = mesArr[mes - 1];
        }
        if (mes == 8){
            mesStr = mesArr[mes - 1];
        }
        console.log("La estación del mes " + mesStr + " es: "+ estacion[2])

    }
    else if(mes == 9 || mes == 10 || mes == 11){
        
        if (mes == 9){
            mesStr = mesArr[mes - 1];
        }
        if (mes == 10){
            mesStr = mesArr[mes - 1];
        }
        if (mes == 11){
            mesStr = mesArr[mes - 1];
        }
        console.log("La estación del mes " + mesStr + " es: "+ estacion[3])

    }

}