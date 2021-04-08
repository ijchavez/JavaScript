//Funcion especial para objetos en JS
function Persona(nombre, apellido, email, edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.edad = edad;
    this.nombreCompleto = function(){
        unNombreCompleto = this.nombre + ' ' + this.apellido;
        return unNombreCompleto;

    }

}

let padre = new Persona('Juan', 'Perez', 'jperez@mail.com', 31);
let madre = new Persona('Carla', 'Gomez','cgomez@gmail.com', 30);

let miObjeto = new Object();
let miObjeto2 = new Object();

//Funcion constructor del tipo string >> sintaxis formal
let miCadena1 = new String('hola');
let miNumero = new Number(1);
let miBoolean = new Boolean(true);
let miArreglo1 = new Array();
let miFuncion = new Function();

//es mas recomendable:
let miCadena2 = '';
let miNumero2 = 1;
let miBoolean2 = false;
let miArreglo2 = [];
let miFuncion2 = function(){};