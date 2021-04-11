class Computadora{
    static contadorComputadoras = 0;

    constructor (nombre, monitor, raton, teclado){
        this.idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._raton = raton;
        this._teclado = teclado;

    }
    toString(){
        let cadena = `
                 Computadora:
                 ID: ${this.idComputadora}
                 Nombre: ${this._nombre}
                         ${this._monitor}
                         ${this._raton}
                         ${this._teclado}
                     `
        return cadena
    }
}
