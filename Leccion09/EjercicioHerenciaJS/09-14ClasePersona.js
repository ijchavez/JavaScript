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
