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
console.log(padre);
console.log(madre);
console.log(madre.nombreCompleto());
