//09-03 Hoisting >> No es posible hacer hoisting previo a una clase
class Persona{
    constructor(nombre, apellido,){
        //'atributo de nuestra clase' = 'parametro';
        this._nombre = nombre;
        this._apellido = apellido;

    }
    get get_nombre(){
        return this._nombre;

    }
    set set_nombre(nombre){
        this._nombre = nombre;
    }

}

//obtenemos el valor
let persona1 = new Persona('Jorge', 'Barrios');
console.log(persona1.get_nombre);

//asignamos el valor
persona1.set_nombre = 'Juan Carlos';
console.log(persona1.get_nombre);
