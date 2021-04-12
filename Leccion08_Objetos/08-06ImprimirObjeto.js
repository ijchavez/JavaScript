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
// En un navegador web es conveniente hacer:
// Concatenar cada valor de cada propiedad
console.log(persona.nombre + ' ' + persona.apellido + ' ' + persona.email + ' Edad: ' + persona.edad)

//for in
for (nombrePropiedad in persona){
    console.log(persona[nombrePropiedad])

}

//Definiendo un array y llamando a Object.values('objeto')

let personaArray = Object.values(persona);
console.log(personaArray);

//JSON.stringify
let personaString = JSON.stringify(persona);
console.log(personaString);
