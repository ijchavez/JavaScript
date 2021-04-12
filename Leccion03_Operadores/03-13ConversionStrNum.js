let miNumero = "10";
console.log(miNumero);
console.log(typeof miNumero);

let edad = Number(miNumero);
console.log(edad);
console.log(typeof edad);

if (edad >= 18){
    
    console.log("Puede votar")
}else{
    console.log("Muy joven para votar")

}

//con operador ternario
let resultado = (edad >= 18) ? "Puede votar" : "Muy joven para votar";
console.log(resultado)