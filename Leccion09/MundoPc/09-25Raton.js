class Raton extends DispositivoEntrada{
    static contadorRatones = 0;
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca)
        this._idRaton = ++Raton.contadorRatones;

    }
    get idRaton(){
        return this._idRaton;

    }
    toString(){
        let cadena = `
                 Raton: 
                 ID: ${this._idRaton}
                 Entrada ${this._tipoEntrada}
                 Marca: ${this._marca}
                 `
        return cadena
    }
}
let tipoDeEntradas = ['USB', 'BT']
let marcas = ['HP','Genius','Logitech','Acer','Samsung','LG','Sorny']