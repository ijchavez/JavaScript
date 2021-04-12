//Agregamos metodo toString()

class Persona{

    /* Los atributos estaticos se asocian con nuestra clase y los atributos no estaticos
    vamos a poder utilizarlos solamente si creamos objetos de la clase que estamos declarando */
    static contadorPersonas = 0; //Atributo de nuestros objetos
    // Definimos el constructor
    constructor(nombre, apellido,){
        //'atributo de nuestra clase' = 'parametro';
        this._nombre = nombre;
        this._apellido = apellido;
        this._idPersona = ++ Persona.contadorPersonas;

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
