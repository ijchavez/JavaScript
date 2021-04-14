//async con await
async function fnConPromesaAwait(){
    let miPromesa = new Promise(resolver =>{
        resolver('Promesa con await')

    });
    console.log(await miPromesa);

}
fnConPromesaAwait();