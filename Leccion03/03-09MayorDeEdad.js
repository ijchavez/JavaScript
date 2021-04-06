let edadAdulta = 18;
let edad = 19;

if (edad <= 0){
    console.log(edad + ' no es un numero valido para una edad')
}else{
    if (edad >= edadAdulta){
        console.log("Es mayor de edad con " + edad + " años.")
    }else{
        console.log("Es menor de edad con " + edad + " años.")
    }
}