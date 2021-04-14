//Promesa, await, async, y setTimeout
// await solo puede usarse ante una funcion async
async function fnConPromesaAwaitTimeOut(){
    console.log('Inicio de funcion')
    let miPromesa = new Promise(resolver =>{
        setTimeout(() => resolver('Promesa, con await y setTimeout'), 3000);

    });
    // como estamos esperando la promesa el fin de la funcion no aparecera hasta que no se cumpla el await
    console.log(await miPromesa);
    console.log('Fin de funcion')
}
fnConPromesaAwaitTimeOut();