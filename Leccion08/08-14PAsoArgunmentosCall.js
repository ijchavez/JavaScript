//si son atributos del objeto uso this, si son parametros no
let persona1 = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto: function (titulo, telefono){
        cadena = titulo + ' ' + this.nombre + ' ' + this.apellido + ' ' + telefono ;
        return cadena

    }
}

let persona2 ={
    nombre: 'Carlos',
    apellido: 'Lara'

}

//Uso de call para utilizar el metodo nombreCompleto con persona2

console.log(persona1.nombreCompleto('Licenciado', '22446688'));

titulo = 'Ingeniero'
telefono = '55443322'
console.log(persona1.nombreCompleto.call(persona2, titulo, telefono));
