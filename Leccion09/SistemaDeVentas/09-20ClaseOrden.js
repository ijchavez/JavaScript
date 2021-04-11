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