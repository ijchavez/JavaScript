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

//Agregar
persona.tel = '55443322';
console.log(persona);
//Modificar
persona.tel = '44332211';
console.log(persona);
//Borrar
delete persona.tel;
console.log(persona);