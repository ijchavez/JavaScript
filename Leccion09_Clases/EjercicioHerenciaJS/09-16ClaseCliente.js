class Cliente extends Persona{
    static contadorCliente = 0;

    constructor(nombre, apellido, edad, fechaRegistro){
        this._idCliente = ++ Cliente.contadorCliente;
        super(nombre, apellido, edad);
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
    //Sobreescritura: redefinir el metodo en la clase padre para que la clase hija lo utilice
    nombreCompleto(){
        //let cadena = this._nombre + ' ' + this._apellido + ', departamento de: ' + this._departamento;
        let cadena = super.toString() + ' ' + this._idCliente + ' '  + this._fechaRegistro;
        return cadena;

    }
    toString(){
        let cadena = nombreCompleto();
        return cadena

    }

}