class Persona{

    /* Los atributos estaticos se asocian con nuestra clase y los atributos no estaticos
    vamos a poder utilizarlos solamente si creamos objetos de la clase que estamos declarando */
    static contadorPersonas = 0; //Atributo de nuestros objetos

    // Definimos el constructor
    constructor(nombre, apellido, edad){
        //'atributo de nuestra clase' = 'parametro';
        this._idPersona = ++Persona.contadorPersonas;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;

    }
    //Definimos SET y GET
    //el idXXXX al ser incremental y secuencial siempre se crea el metodo GET
    get idPersona(){
        return this._idPersona;

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
    get edad(){
        return this._edad;

    }
    set edad(edad){
        this._edad = edad;

    }

    // Sobreescribimos la clase Object
    nombreCompleto(){
        //OTRA FORMA DE HACER UNA CADENA `${this._variable}`
        let cadena = `${this._idPersona}
                      ${this._nombre}
                      ${this._apellido}
                      ${this._edad}`;
        return cadena;

    }
    //Definimos toString()
    toString(){
        //Aplicamos polimorfismo (multiples formas en tiempo de ejecucion)El metodo que se ejecuta depende si es una referencia de tipo padre o de tipo hijo
        let cadena = this.nombreCompleto();
        return cadena;

    }


}
class Empleado extends Persona{
    /*
    para que tome nombre y apellido de la clase Persona debemos pasar el constructor de la clase padre
    y pasar los parametros que estan en el constructo de la clase padre
    */
    static contadorEmpleado = 0;
    
    constructor(nombre, apellido, edad, sueldo){
        super(nombre, apellido, edad);
        this._idEmpleado = ++ Empleado.contadorEmpleado;
        this._sueldo = sueldo;

    }
    //el idXXXX al ser incremental y secuencial siempre se crea el metodo GET
    get idEmpleado(){
        return this._idEmpleado;

    }
    get sueldo(){
        return this._sueldo;

    }
    set sueldo(sueldo){
        this._sueldo = sueldo;

    }
    toString(){
        let cadena = super. toString() + ' ' + this._idEmpleado + ', $' + this._sueldo;;
        return cadena;
   
    }

}
class Cliente extends Persona{
    static contadorCliente = 0;

    constructor(nombre, apellido, edad, fechaRegistro){
        super(nombre, apellido, edad);
        this._idCliente = ++ Cliente.contadorCliente;
        this._fechaRegistro = fechaRegistro;

    }
    //el idXXXX al ser incremental y secuencial siempre se crea el metodo GET
    get idCliente(){
        return this._idCliente;

    }
    get fechaRegistro(){
        return this._fechaRegistro;

    }
    set fechaRegistro(fechaRegistro){
        this._fechaRegistro = fechaRegistro;

    }
    toString(){
        let cadena = super.toString() + ' ' + this._idCliente + ' '  + this._fechaRegistro;
        return cadena

    }

}

//Pruebas
let persona1 = new Persona('Jorge', 'Barrios', 31);
console.log(persona1.toString())
/*
1 
                      Jorge 
                      Barrios 
                      31 
  at ​​​persona1.toString()​​​ ​repositorio/JavaScript/Leccion09/EjercicioHerenciaJS/09-17PruebaEjCompleto.js:147:0​

*/
let empleado1 = new Empleado('Juan','Perez',23,1500)
console.log(empleado1.toString())

/*
2 
                      Juan 
                      Perez 
                      23 1, $1500 
  at ​​​empleado1.toString()​​​ ​repositorio/JavaScript/Leccion09/EjercicioHerenciaJS/09-17PruebaEjCompleto.js:143:0
*/

let cliente1 = new Cliente('Jaime','Lara',51,new Date())
console.log(cliente1.toString());

/*
3 
                      Jaime 
                      Lara 
                      51 1 22/12/1996 
  at ​​​cliente1.toString()​​​ ​repositorio/JavaScript/Leccion09/EjercicioHerenciaJS/09-17PruebaEjCompleto.js:154:0
*/
