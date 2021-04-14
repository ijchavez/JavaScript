/*
En una promesas utilizamos funciones de callback. Es codigo con varios estados. Se procesa y en caso de que se
ejecute correctamente ira por una funcion, y si no se ejecuta correctamente entra por otra funcion.
Se resuelve la promesa >> .then()
No se resuelve >> .catch()

En este caso se revisa la expresion y como es verdadera la funcion resolver pasa al primer argumento de miPromesa.then().
Si es falso se ejecuta rechazar y se pasa al segundo parametro de miPromesa.then()
*/
let miPromesa = new Promise((resolver, rechazar) => {
    let expresion = true;
    if (expresion){
        resolver('Resolvió correcto');
    }

    else{
        rechazar('Se produjo un error');
    }

});

/* Sin el catch
miPromesa.then(
    valor => console.log(valor),
    error => console.log(error)

);
*/
//Con el catch
miPromesa
.then(
    valor => console.log(valor)

).catch(
    error => console.log(error)

);