let hora = 7;
let estado = ['Durmiendo', 'Buenos Dias','Buenos Tardes','Buenos Noches']

if (hora < 0 || hora > 24){
    console.log("Ingrese una hora valida (0-24)")
}else{
    if (hora >= 0 && hora <= 6){
        console.log(estado[0])

    }
    else if (hora > 6 && hora <= 11){
        console.log(estado[1])

    }
    else if (hora >= 12 && hora <= 18){
        console.log(estado[2])

    }
    else if (hora >= 19 && hora <= 24){
        console.log(estado[3])

    }
}