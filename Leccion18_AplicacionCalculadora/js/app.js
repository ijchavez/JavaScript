function sumar(){
    const forma = document.getElementById('forma');
    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];
    // necesito parsear los valores a un dato numerico para que realice la operacion
    let resultado = parseFloat(operandoA.value) + parseFloat(operandoB.value);
    if(isNaN(resultado)){
        resultado = 'La operación no incluye números';
    }
    document.getElementById('resultado').innerHTML = `Resultado de la suma: ${resultado}`;
    console.log(`Resultado: ${resultado}`);

}
function restar(){
    const forma = document.getElementById('forma');
    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];
    // necesito parsear los valores a un dato numerico para que realice la operacion
    let resultado = parseFloat(operandoA.value) - parseFloat(operandoB.value);
    if(isNaN(resultado)){
        resultado = 'La operación no incluye números';
    }
    document.getElementById('resultado').innerHTML = `Resultado de la resta: ${resultado}`;
    console.log(`Resultado: ${resultado}`);

}
function multiplicar(){
    const forma = document.getElementById('forma');
    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];
    // necesito parsear los valores a un dato numerico para que realice la operacion
    let resultado = parseFloat(operandoA.value) * parseFloat(operandoB.value);
    if(isNaN(resultado)){
        resultado = 'La operación no incluye números';
    }
    document.getElementById('resultado').innerHTML = `Resultado de la multiplicacion: ${resultado}`;
    console.log(`Resultado: ${resultado}`);

}
function dividir(){
    const forma = document.getElementById('forma');
    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];

    // necesito parsear los valores a un dato numerico para que realice la operacion
    let resultado = parseFloat(operandoA.value) / parseFloat(operandoB.value);
    if(isNaN(resultado)){
        resultado = 'La operación no incluye números';
    }
    if(operandoB.value == 0){
        resultado = `No se puede dividir por ${operandoB.value}`;
        console.log(resultado);
    }
    document.getElementById('resultado').innerHTML = `Resultado de la division: ${resultado}`;
    console.log(`Resultado: ${resultado}`);

}
function exponente(){
    const forma = document.getElementById('forma');
    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];
    // necesito parsear los valores a un dato numerico para que realice la operacion
    let resultado = parseFloat(operandoA.value) ** parseFloat(operandoB.value);
    if(isNaN(resultado)){
        resultado = 'La operación no incluye números';
    }
    document.getElementById('resultado').innerHTML = `Resultado del exponente: ${resultado}`;
    console.log(`Resultado: ${resultado}`);

}
function modulo(){
    const forma = document.getElementById('forma');
    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];
    // necesito parsear los valores a un dato numerico para que realice la operacion
    let resultado = parseFloat(operandoA.value) % parseFloat(operandoB.value);
    if(isNaN(resultado)){
        resultado = 'La operación no incluye números';
    }
    document.getElementById('resultado').innerHTML = `Resultado del modulo: ${resultado}`;
    console.log(`Resultado: ${resultado}`);

}
