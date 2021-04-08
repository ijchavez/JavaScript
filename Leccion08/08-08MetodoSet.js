let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@mail.com',
    edad: 28,
    idioma: 'es',
    get lang(){
        return this.idioma.toUpperCase();

    },
    set lang(lang){
        this.idioma = lang.toUpperCase();
    },
    //sacamos el function y los : y le agregamos el get
    get nombreCompleto(){
        cadena = this.nombre + ' ' + this.apellido;
        return cadena;

    },

}


console.log(persona.lang);
persona.lang = 'en';
console.log(persona.lang);
console.log(persona.idioma);

console.log(persona)
/*
{ nombre: 'Juan', 
  apellido: 'Perez', 
  email: 'jperez@mail.com', 
  edad: 28, 
  idioma: 'EN', 
  lang: [Getter/Setter], 
  nombreCompleto: [Getter] } 
*/