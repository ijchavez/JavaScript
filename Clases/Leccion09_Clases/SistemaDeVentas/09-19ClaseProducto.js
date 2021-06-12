class Producto{
    static contadorProductos = 0;
    constructor(nombre, precio){
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;

    }
    get idProducto(){
        return this._idProducto;

    }
    get nombre(){
        return this._nombre;

    }
    set nombre(nombre){
        this_nombre = nombre;

    }
    get precio(){
        return this._precio;

    }
    set precio(precio){
        this_precio = precio;

    }
    toString(){
        let cadena = `
                    idProducto: ${this._idProducto}
                    Nombre: ${this._nombre}
                    Precio: $${this._precio}
                     `;

        return cadena;

    }

}

producto1 = new Producto('Pañales',50)
console.log(producto1.toString())
producto2 = new Producto('Lavandina',14)
console.log(producto2.toString())