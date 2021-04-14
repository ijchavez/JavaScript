//El código es asincrono, primero se en via el inicio y fin y luego el valor de la promesa a los 3 seg

let promesa = new Promise((resolver) => {
    console.log('Inicio Promesa')
    setTimeout(() => resolver('Saludos con promesa y Timeout'), 3000);
    console.log('Fin Promesa')

});

promesa.then(valor => console.log(valor));