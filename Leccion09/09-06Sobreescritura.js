class Persona{
    constructor(nombre, apellido,){
        //'atributo de nuestra clase' = 'parametro';
        this.nombre = nombre;
        this.apellido = apellido;

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
    nombreCompleto(){
        let cadena = this._nombre + ' ' + this._apellido;
        return cadena;

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
        let cadena = super.nombreCompleto()  + ', departamento de: ' + this._departamento;
        return cadena;

    }

}
let empleado1 = new Empleado('Juan','Perez','Sistemas')
console.log(empleado1.nombreCompleto());
