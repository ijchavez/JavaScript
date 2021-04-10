class Persona{

    /* Los atributos estaticos se asocian con nuestra clase y los atributos no estaticos
    vamos a poder utilizarlos solamente si creamos objetos de la clase que estamos declarando */
    static contadorPersonas = 0; //Atributo de nuestros objetos

    static get MAX_OBJ(){
        const CANTIDAD_MAXIMA_OBJETOS = 5;
        return CANTIDAD_MAXIMA_OBJETOS;
        
    }
    // Definimos el constructor
    constructor(nombre, apellido,){
        //'atributo de nuestra clase' = 'parametro';
        this._nombre = nombre;
        this._apellido = apellido;
        if (Persona.contadorPersonas < Persona.MAX_OBJ){
            this._idPersona = ++ Persona.contadorPersonas;
        }else{
            console.log('Se han superado el máximo de objetos permitidos')
        }

    }
    //Definimos SET y GET
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
    // Sobreescribimos la clase Object
    nombreCompleto(){
        let cadena = this._idPersona + ' ' + this._nombre + ' ' + this._apellido;
        return cadena;

    }
    //Definimos toString()
    toString(){
        //Aplicamos polimorfismo (multiples formas en tiempo de ejecucion)El metodo que se ejecuta depende si es una referencia de tipo padre o de tipo hijo
        let cadena = this.nombreCompleto();
        return cadena;

    }
    static saludar(){
        console.log('Saludos desde metodo static')
    
    }
    static saludardos(persona){
        console.log(persona.nombreCompleto());

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
    //Sobreescritura: redefinir el metodo en la clase padre para que la clase hija lo utilice
    nombreCompleto(){
        //let cadena = this._nombre + ' ' + this._apellido + ', departamento de: ' + this._departamento;
        let cadena = super.nombreCompleto()  + ', departamento de ' + this._departamento;
        return cadena;

    }

}



let persona1 = new Persona('Jorge', 'Barrios');
let empleado1 = new Empleado('Juan','Perez','Sistemas')

console.log(persona1.toString());
console.log(empleado1.toString());

console.log(Persona.contadorPersonas);

let persona2 = new Persona('Karla', 'Ramirez');
console.log(persona2.toString());
console.log(Persona.contadorPersonas);

console.log(Persona.MAX_OBJ);

let persona3 = new Persona('Mariano', 'Lara');
let persona4 = new Persona('Armando', 'Toledo');
let persona5 = new Persona('Laura', 'Quintero');

/*
​​​​​Quokka '09-12ConstantesStatic.js' (node: v14.16.1)​​​​ ​View recent Quokka files​

1 Jorge Barrios ​​​​​at ​​​persona1.toString()​​​ ​repositorio/JavaScript/Leccion09/09-12ConstantesStatic.js:99:0​
 
2 Juan Perez, departamento de Sistemas 
  at ​​​empleado1.toString()​​​ ​repositorio/JavaScript/Leccion09/09-12ConstantesStatic.js:100:0​

2 ​​​​​at ​​​Persona.contadorPersonas​​​ ​repositorio/JavaScript/Leccion09/09-12ConstantesStatic.js:102:0​

3 Karla Ramirez ​​​​​at ​​​persona2.toString()​​​ ​repositorio/JavaScript/Leccion09/09-12ConstantesStatic.js:105:0​

3 ​​​​​at ​​​Persona.contadorPersonas​​​ ​repositorio/JavaScript/Leccion09/09-12ConstantesStatic.js:106:0​

5 ​​​​​at ​​​Persona.MAX_OBJ​​​ ​repositorio/JavaScript/Leccion09/09-12ConstantesStatic.js:108:0​
 
Se han superado el máximo de objetos permitidos 
  at ​repositorio/JavaScript/Leccion09/09-12ConstantesStatic.js:20:12
*/