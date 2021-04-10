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

Persona.prototype.tel = '44332211'; //se crea esta propiedad y valor a todos por defecto.

let padre = new Persona('Juan', 'Perez', 'jperez@mail.com', 31);
let madre = new Persona('Carla', 'Gomez','cgomez@gmail.com', 30);
console.log(padre);
console.log(madre);
console.log(madre.nombreCompleto());
//el prototype agrega un valor por defecto a una propiedad para todos los objetos que estamos creando
padre.tel = '55443322';
madre.tel = '66889900';
console.log(madre.tel);
console.log(padre.tel);

