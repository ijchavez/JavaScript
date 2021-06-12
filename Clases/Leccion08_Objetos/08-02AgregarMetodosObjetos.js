let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@mail.com',
    edad: 28,
    nombreCompleto: function (){
        cadena = this.nombre + ' ' + this.apellido;
        return cadena;
    },
    

}
//para llamar la funcion tengo que agregarle parentesis
console.log(persona.nombreCompleto());