class DispositivoEntrada{
    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;

    }
    get tipoEntrada(){
        return this._tipoEntrada;

    }
    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;

    }
    get marca(){
        return this._marca;

    }
    set marca(marca){
        this._marca = marca;

    }


}
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

class Monitor{
    static contadorMonitores = 0;
    constructor(marca, tamanio){
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamanio = tamanio;

    }
    get idMonitor(){
        return this._idMonitor;

    }
    get marca(){
        return this._marca;

    }
    set marca(marca){
        this._marca = marca;

    }
    get tamanio(){
        return this._tamanio;

    }
    set tamanio(tamanio){
        this._tamanio = tamanio;

    }
    toString(){
        let cadena = 
                 `
                 Monitor:
                 ID: ${this._idMonitor}
                 Marca: ${this._marca}
                 Tamaño: ${this._tamanio}
                 `
        return cadena

    }

}
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
        for (let computadora of this._computadoras){
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


let tipoDeEntradas = ['USB', 'BT'];
let marcas = ['HP','Genius','Logitech','Acer','Samsung','LG','Sorny','MSI'];
let tamanioMonitor = [17,19,21,23];
let tipoComputadoras = ['Gamer','Clon','Oficina','Multimedia'];


let raton1 = new Raton(tipoDeEntradas[0],marcas[0])
console.log(raton1.toString())
let raton2 = new Raton(tipoDeEntradas[1],marcas[2])
console.log(raton2.toString())

let teclado1 = new Teclado(tipoDeEntradas[1],marcas[3])
console.log(teclado1.toString())
let teclado2 = new Teclado(tipoDeEntradas[0],marcas[1])
console.log(teclado2.toString())

let monitor1 = new Monitor(marcas[5],tamanioMonitor[3]);
console.log(monitor1.toString())
let monitor2 = new Monitor(marcas[6],tamanioMonitor[1]);
console.log(monitor2.toString())

let computadora1 = new Computadora(tipoComputadoras[0],raton1,teclado2,monitor1);
console.log(computadora1.toString())
let computadora2 = new Computadora(tipoComputadoras[2],raton2,teclado1,monitor2);
console.log(computadora2.toString())

let orden1 = new Orden();
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);
orden1.agregarComputadora(computadora2);
orden1.mostrarOrden();

let orden2 = new Orden();
orden2.agregarComputadora(computadora1);
orden2.agregarComputadora(computadora2);
orden2.mostrarOrden();

/*
​​​​​Quokka '09-30TestMundoPC.js' (node: v14.16.1)​​​​ ​View recent Quokka files​
 
 
                 Raton:  
                 ID: 1 
                 Entrada USB 
                 Marca: HP 
                  
  at ​​​raton1.toString()​​​ ​repositorio/JavaScript/Leccion09/MundoPc/09-30TestMundoPC.js:175:0​
 
 
                 Raton:  
                 ID: 2 
                 Entrada BT 
                 Marca: Logitech 
                  
  at ​​​raton2.toString()​​​ ​repositorio/JavaScript/Leccion09/MundoPc/09-30TestMundoPC.js:177:0​
 
 
                 Teclado:  
                 ID: 1 
                 Entrada BT 
                 Marca: Acer 
                  
  at ​​​teclado1.toString()​​​ ​repositorio/JavaScript/Leccion09/MundoPc/09-30TestMundoPC.js:180:0​
 
 
                 Teclado:  
                 ID: 2 
                 Entrada USB 
                 Marca: Genius 
                  
  at ​​​teclado2.toString()​​​ ​repositorio/JavaScript/Leccion09/MundoPc/09-30TestMundoPC.js:182:0​
 
 
                 Monitor: 
                 ID: 1 
                 Marca: LG 
                 Tamaño: 23 
                  
  at ​​​monitor1.toString()​​​ ​repositorio/JavaScript/Leccion09/MundoPc/09-30TestMundoPC.js:185:0​
 
 
                 Monitor: 
                 ID: 2 
                 Marca: Sorny 
                 Tamaño: 19 
                  
  at ​​​monitor2.toString()​​​ ​repositorio/JavaScript/Leccion09/MundoPc/09-30TestMundoPC.js:187:0​
 
 
                 Computadora: 
                 ID: 1 
                 Nombre: Gamer 
                          
                 Raton:  
                 ID: 1 
                 Entrada USB 
                 Marca: HP 
                  
                          
                 Teclado:  
                 ID: 2 
                 Entrada USB 
                 Marca: Genius 
                  
                          
                 Monitor: 
                 ID: 1 
                 Marca: LG 
                 Tamaño: 23 
                  
                      
  at ​​​computadora1.toString()​​​ ​repositorio/JavaScript/Leccion09/MundoPc/09-30TestMundoPC.js:190:0​
 
 
                 Computadora: 
                 ID: 2 
                 Nombre: Oficina 
                          
                 Raton:  
                 ID: 2 
                 Entrada BT 
                 Marca: Logitech 
                  
                          
                 Teclado:  
                 ID: 1 
                 Entrada BT 
                 Marca: Acer 
                  
                          
                 Monitor: 
                 ID: 2 
                 Marca: Sorny 
                 Tamaño: 19 
                  
                      
  at ​​​computadora2.toString()​​​ ​repositorio/JavaScript/Leccion09/MundoPc/09-30TestMundoPC.js:192:0​
 
 
            Orden: 1 
            Computadoras  
                 Computadora: 
                 ID: 1 
                 Nombre: Gamer 
                          
                 Raton:  
                 ID: 1 
                 Entrada USB 
                 Marca: HP 
                  
                          
                 Teclado:  
                 ID: 2 
                 Entrada USB 
                 Marca: Genius 
                  
                          
                 Monitor: 
                 ID: 1 
                 Marca: LG 
                 Tamaño: 23 
                  
                      
                 Computadora: 
                 ID: 2 
                 Nombre: Oficina 
                          
                 Raton:  
                 ID: 2 
                 Entrada BT 
                 Marca: Logitech 
                  
                          
                 Teclado:  
                 ID: 1 
                 Entrada BT 
                 Marca: Acer 
                  
                          
                 Monitor: 
                 ID: 2 
                 Marca: Sorny 
                 Tamaño: 19 
                  
                      
                 Computadora: 
                 ID: 2 
                 Nombre: Oficina 
                          
                 Raton:  
                 ID: 2 
                 Entrada BT 
                 Marca: Logitech 
                  
                          
                 Teclado:  
                 ID: 1 
                 Entrada BT 
                 Marca: Acer 
                  
                          
                 Monitor: 
                 ID: 2 
                 Marca: Sorny 
                 Tamaño: 19 
                  
                      
             
  at ​​​` Orden: ${ this._idOrden } ...​​​ ​repositorio/JavaScript/Leccion09/MundoPc/09-30TestMundoPC.js:155:8​
 
 
            Orden: 2 
            Computadoras  
                 Computadora: 
                 ID: 1 
                 Nombre: Gamer 
                          
                 Raton:  
                 ID: 1 
                 Entrada USB 
                 Marca: HP 
                  
                          
                 Teclado:  
                 ID: 2 
                 Entrada USB 
                 Marca: Genius 
                  
                          
                 Monitor: 
                 ID: 1 
                 Marca: LG 
                 Tamaño: 23 
                  
                      
                 Computadora: 
                 ID: 2 
                 Nombre: Oficina 
                          
                 Raton:  
                 ID: 2 
                 Entrada BT 
                 Marca: Logitech 
                  
                          
                 Teclado:  
                 ID: 1 
                 Entrada BT 
                 Marca: Acer 
                  
                          
                 Monitor: 
                 ID: 2 
                 Marca: Sorny 
                 Tamaño: 19 
                  
                      
             
  at ​​​` Orden: ${ this._idOrden } ...​​​ ​repositorio/JavaScript/Leccion09/MundoPc/09-30TestMundoPC.js:155:8
*/