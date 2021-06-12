class Teclado extends DispositivoEntrada{
    static contadorTeclados = 0;
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca)
        this._idTeclado = ++Teclado.contadorTeclados;

    }
    get idTeclado(){
        return this._idTeclado;

    }
    toString(){
        let cadena = `
                 Teclado: 
                 ID: ${this._idTeclado}
                 Entrada ${this._tipoEntrada}
                 Marca: ${this._marca}
                 `
        return cadena
    }
}