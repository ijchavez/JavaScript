class Orden{
    static contadorOrdenes = 0;
    constructor() {
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];

    }
    get idOrden(){
        return this._idOrden;

    }
    agregarComputadora(computadora){
        this._computadoras.push(computadora);

    }
    mostrarOrden(){
        let computadorasOrden = '';
        for (computadora of this._computadoras){
            computadorasOrden += `${computadora}`;

        }
        console.log(
            `
            Orden: ${this._idOrden}
            Computadoras ${computadorasOrden}
            `

        )

    }


}