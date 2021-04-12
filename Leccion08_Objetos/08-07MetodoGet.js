let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@mail.com',
    edad: 28,
    //sacamos el function y los : y le agregamos el get
    get nombreCompleto(){
        cadena = this.nombre + ' ' + this.apellido;
        return cadena;
    },
    

}
//En el console log no hace falta poner ahora los parentesis.
console.log(persona.nombreCompleto);
