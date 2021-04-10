class Empleado extends Persona{
    /*
    para que tome nombre y apellido de la clase Persona debemos pasar el constructor de la clase padre
    y pasar los parametros que estan en el constructo de la clase padre
    */
    static contadorEmpleado = 0;
    
    constructor(nombre, apellido, edad, sueldo){
        this._idEmpleado = ++ Empleado.contadorEmpleado;
        super(nombre, apellido, edad);
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
    //Sobreescritura: redefinir el metodo en la clase padre para que la clase hija lo utilice
    nombreCompleto(){
        //let cadena = this._nombre + ' ' + this._apellido + ', departamento de: ' + this._departamento;
        let cadena = super. toString() + ' ' + this._idEmpleado + ', $' + this._sueldo;
        return cadena;

    }
    toString(){
        let cadena = nombreCompleto();
        return cadena;
   
    }

}