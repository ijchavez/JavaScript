//si son atributos del objeto uso this, si son parametros no
let persona1 = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto: function (titulo, telefono){
        let cadena = titulo + ' ' + this.nombre + ' ' + this.apellido + ' tel: ' + telefono ;
        //let cadena = this.nombre + ' ' + this.apellido;
        return cadena

    }
}

let persona2 ={
    nombre: 'Carlos',
    apellido: 'Lara'

}

//Uso de call para utilizar el metodo nombreCompleto con persona2

console.log(persona1.nombreCompleto('Licenciado: ','44886622'));

titulo = 'Ingeniero: ';
telefono = '55443322';
let arregloInfo = [titulo, telefono]
console.log(persona1.nombreCompleto.apply(persona2, arregloInfo));
