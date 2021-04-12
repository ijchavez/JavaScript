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

class Orden{
    static contadorOrdenes = 0;

    static get MAX_PRODUCTOS(){
        return 5

    }
    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
        //this._contadorProductosAgregados = 0;

    }
    get idOrden(){
        return this._idOrden;

    }
    agregarProducto(producto){
        if (this._productos.length < Orden.MAX_PRODUCTOS){
            this._productos.push(producto);
            //this.productos[this._contadorProductosAgregados++] = producto
        }
        else{
            console.log('Ha llegado al número máximo de ' + MAX_PRODUCTOS + ' productos.')

        }

    }
    calcularTotal(){
        let totalVenta = 0;
        //iterar arreglos
        for(let producto of this._productos){
            totalVenta += producto.precio;

        }
        return totalVenta;

    }

    mostrarOrden(){
        let productosOrden = '';
        for (let producto of this._productos){
            productosOrden += '\n' + producto.toString() + '';

        }
        console.log(`
                    Orden: ${this._idOrden}
                    Total: $${this.calcularTotal()}
                    Productos:${productosOrden}
                    `);

    }

}
producto1 = new Producto('Pañales', 50)
console.log(producto1.toString())
producto2 = new Producto('Lavandina', 14)
console.log(producto2.toString())
producto3 = new Producto('Galletitas', 12)
console.log(producto3.toString())
producto4 = new Producto('Pan', 8)
console.log(producto4.toString())
producto5 = new Producto('Cigarrillos', 20)
console.log(producto5.toString())

let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.mostrarOrden();

/*
​​​​​Quokka '09-22PruebaSistemaVentas.js' (node: v14.16.1)​​​​ ​View recent Quokka files​
 
 
                    idProducto: 1 
                    Nombre: Pañales 
                    Precio: $50 
                      
  at ​​​producto1.toString()​​​ ​repositorio/JavaScript/Leccion09/SistemaDeVentas/09-22PruebaSistemaVentas.js:97:0​
 
 
                    idProducto: 2 
                    Nombre: Lavandina 
                    Precio: $14 
                      
  at ​​​producto2.toString()​​​ ​repositorio/JavaScript/Leccion09/SistemaDeVentas/09-22PruebaSistemaVentas.js:99:0​
 
 
                    idProducto: 3 
                    Nombre: Galletitas 
                    Precio: $12 
                      
  at ​​​producto3.toString()​​​ ​repositorio/JavaScript/Leccion09/SistemaDeVentas/09-22PruebaSistemaVentas.js:101:0​
 
 
                    idProducto: 4 
                    Nombre: Pan 
                    Precio: $8 
                      
  at ​​​producto4.toString()​​​ ​repositorio/JavaScript/Leccion09/SistemaDeVentas/09-22PruebaSistemaVentas.js:103:0​
 
 
                    idProducto: 5 
                    Nombre: Cigarrillos 
                    Precio: $20 
                      
  at ​​​producto5.toString()​​​ ​repositorio/JavaScript/Leccion09/SistemaDeVentas/09-22PruebaSistemaVentas.js:105:0​
 
 
                    Orden: 1 
                    Total: $64 
                    Productos: 
 
                    idProducto: 1 
                    Nombre: Pañales 
                    Precio: $50 
                      
 
                    idProducto: 2 
                    Nombre: Lavandina 
                    Precio: $14 
                      
                     
  at ​​​` Orden: ${ this._id...​​​ ​repositorio/JavaScript/Leccion09/SistemaDeVentas/09-22PruebaSistemaVentas.js:87:8​

*/