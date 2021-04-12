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
    get departamento(){
        return this._departamento;

    }
    set departamento(departamento){
        this._departamento = departamento;

    }
    obtenerDetalles(){
        let cadena = `Gerente: ${super.obtenerDetalles()} Departamento: ${this._departamento}`;
        return cadena;
    }

}
// Metodo independiente por fuera de las dos clases
function imprimir(tipo){
    console.log(tipo.obtenerDetalles());
    determinarTipo(tipo);
}
function determinarTipo(tipo){
    //Jerarquia >> de menor a mayor
    if (tipo instanceof Gerente){
        console.log('es un objeto de tipo Gerente')
        console.log(tipo.departamento)
    }
    else if (tipo instanceof Empleado){
        console.log('es un objeto de tipo Empleado')

    }
    else if (tipo instanceof Object){
        console.log('es un objeto de tipo Object')

    }

}

let empleado1 = new Empleado('Juan',3000)

let gerente1 = new Gerente('Carlos', 5000, 'Sistemas')

imprimir(empleado1);
imprimir(gerente1);
