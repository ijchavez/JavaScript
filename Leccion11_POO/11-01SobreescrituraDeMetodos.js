class Empleado{
    constructor(nombre, sueldo){
        this._nombre = nombre;
        this._sueldo = sueldo;

    }
    get nombre(){
        return this._nombre;

    }
    set nombre(nombre){
        this._nombre = nombre;

    }
    get sueldo(){
        return this._sueldo;

    }
    set sueldo(sueldo){
        this._sueldo = sueldo;

    }
    obtenerDetalles(){
        let cadena = `Empleado: Nombre: ${this._nombre} ${this._sueldo}`;
        return cadena;

    }
}

class Gerente extends Empleado {
    constructor(nombre, sueldo, departamento){
        super(nombre, sueldo);
        this._departamento = departamento
    
    }
    obtenerDetalles(){
        let cadena = `Gerente: ${super.obtenerDetalles()} Departamento: ${this._departamento}`;
        return cadena;
    }

}

let empleado1 = new Empleado('Juan',3000)
console.log(empleado1.obtenerDetalles())

let gerente1 = new Gerente('Carlos', 5000, 'Sistemas')
console.log(gerente1.obtenerDetalles())