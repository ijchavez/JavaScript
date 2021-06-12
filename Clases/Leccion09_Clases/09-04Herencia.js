//para hacer UML umletino.

class Persona{
    constructor(nombre, apellido,){
        //'atributo de nuestra clase' = 'parametro';
        this._nombre = nombre;
        this._apellido = apellido;

    }
    get nombre(){
        return this._nombre;

    }
    set nombre(nombre){
        this._nombre = nombre;

    }
    get apellido(){
        return this._apellido;

    }
    set apellido(apellido){
        this._apellido = apellido;

    }

}

class Empleado extends Persona{
    /*
    para que tome nombre y apellido de la clase Persona debemos pasar el constructor de la clase padre
    y pasar los parametros que estan en el constructo de la clase padre
    */
    constructor(nombre, apellido, departamento){
        super(nombre, apellido);
        this._departamento = departamento;

    }
    get departamento(){
        return this._departamento;

    }
    set departamento(departamento){
        this._departamento = departamento;

    }

}

let persona1 = new Persona('Jorge', 'Barrios');
console.log(persona1);

let empleado1 = new Empleado('Juan','Perez','Sistemas')
console.log(empleado1);
console.log(empleado1.nombre) //el get nombre esta heredado de la clase padre

/*
​​​​​Quokka '09-04Herencia.js' (node: v10.19.0)​​​​ ​View recent Quokka files​
 
Persona { _nombre: 'Jorge', _apellido: 'Barrios' } 
  at ​​​persona1​​​ ​repositorio/JavaScript/Leccion09/09-04Herencia.js:51:0​
 
Empleado { _nombre: 'Juan', 
  _apellido: 'Carlos', 
  _departamento: 'Sistemas' } 
  at ​​​empleado1​​​ ​repositorio/JavaScript/Leccion09/09-04Herencia.js:54:0​
*/