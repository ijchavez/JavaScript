let persona1 = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto: function (){
        cadena = this.nombre + ' ' + this.apellido;
        return cadena

    }
}

let persona2 ={
    nombre: 'Carlos',
    apellido: 'Lara'

}

//Uso de call para utilizar el metodo nombreCompleto con persona2

console.log(persona1.nombreCompleto());

console.log(persona1.nombreCompleto.call(persona2));
