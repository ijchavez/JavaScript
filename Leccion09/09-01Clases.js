/*
La clase es una plantilla que nos permite crear instancias, un objeto es una instancia de una clase
La clase no contiene valores, si los contiene son comunes a todos los objetos
La clase puede tener:
      - Atributos
      - Metodos
*/
class Persona{
    constructor(nombre, apellido,){
        //'atributo de nuestra clase' = 'parametro';
        this._nombre = nombre;
        this._apellido = apellido;

    }

}

let persona1 = new Persona('Jorge', 'Barrios');
console.log (persona1)
let persona2 = new Persona('Carlos', 'Lara');
console.log (persona2)
/*
​​​​​Quokka '09-01Clases.js' (node: v10.19.0)​​​​ ​View recent Quokka files​
 
Persona { nombre: 'Jorge', apellido: 'Barrios' } 
  at ​​​persona1​​​ ​repositorio/JavaScript/Leccion09/09-01Clases.js:19:0​

*/
