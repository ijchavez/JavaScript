//Utilizados para procesos de forma asincrona
/*
sincronica
F1     F2
 |
 >>>    |
        |
F1  <<< |

Asincronica
F1     F2
 |
 >>>    |
 |      |
 |  <<< |
 |

*/
let reloj = () => {
    let fecha = new Date();
    let cadena = `${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`
    console.log(cadena);

}
let intervaloDeUnSegundo = 1000;
setInterval(reloj,intervaloDeUnSegundo);

/*
18:49:38 ​​​​​at ​​​cadena​​​ ​repositorio/JavaScript/Leccion14_FuncionesCallback/14-03setInterval.js:22​

18:49:39 ​​​​​at ​​​cadena​​​ ​repositorio/JavaScript/Leccion14_FuncionesCallback/14-03setInterval.js:22​

18:49:40 ​​​​​at ​​​cadena​​​ ​repositorio/JavaScript/Leccion14_FuncionesCallback/14-03setInterval.js:22​

18:49:41 ​​​​​at ​​​cadena​​​ ​repositorio/JavaScript/Leccion14_FuncionesCallback/14-03setInterval.js:22​

18:49:42 ​​​​​at ​​​cadena​​​ ​repositorio/JavaScript/Leccion14_FuncionesCallback/14-03setInterval.js:22​

18:49:43 ​​​​​at ​​​cadena​​​ ​repositorio/JavaScript/Leccion14_FuncionesCallback/14-03setInterval.js:22​

18:49:44 ​​​​​at ​​​cadena​​​ ​repositorio/JavaScript/Leccion14_FuncionesCallback/14-03setInterval.js:22​

*/