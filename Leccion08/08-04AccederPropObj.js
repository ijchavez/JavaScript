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

//console.log(persona['apellido']);

//for in

for (nombrePropiedad in persona){
    //propiedades
    console.log(nombrePropiedad);
    //valores de las propiedades
    console.log(persona[nombrePropiedad]);
}