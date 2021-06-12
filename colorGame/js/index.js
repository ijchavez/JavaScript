const coloresTitulo = ['red', 'yellow', 'blue', 'green', 'violet', 'brown', 'plum', 'black', 'orange', 'skyblue'];
const coloresNombre = ['Rojo', 'Amarillo', 'Azul', 'Verde', 'Violeta', 'Marrón', 'Rosa', 'Negro', 'Naranja', 'Celeste'];
let estadoJuego = false;
let totalTime = 100000;
let puntaje = 0;


function elementoPorId(id){
    const elemento = document.getElementById(id);
    return elemento;

}
function elementoPorClase(unaClase){
    const elementoPorClase = document.getElementsByClassName(unaClase);
    return elementoPorClase;
}
const ocultarElemento = (elementoDOM) => {
	elementoDOM.classList.add("hide");
	elementoDOM.classList.remove("show");

}
const mostrarElemento = (elementoDOM) => {
	elementoDOM.classList.add("show");
	elementoDOM.classList.remove("hide");

}
function animarTitulo(){
    let unId = 'colorgame';
    let unaClase = 'colorgamea';
    cambiaClase(elementoPorId(unId), unaClase)
    //elementoPorId(unId).classList.toggle(unaClase);

}
function animarTituloOtro(){
    let unId = 'colorgame';
    let unaClase = 'colorgameb';
    cambiaClase(elementoPorId(unId), unaClase)
    //elementoPorId(unId).classList.toggle(unaClase);

}
function cambiaClase(elemento, clase){
    elemento.classList.toggle(clase);

}
setInterval(animarTitulo,3000);
setInterval(animarTituloOtro,7000);

function obtenerElementoAleatorio(array){
    for (var n = 0; n < array.length; n++) {
            let i = Math.floor(Math.random() * array.length);
            array[i]
            return array[i];

    }

}

function insertoH2(id){
    const titulo = elementoPorId(id);
    const color = obtenerElementoAleatorio(coloresTitulo);
    const nombre = obtenerElementoAleatorio(coloresNombre);
    titulo.innerHTML = `
    <h2 class="titulo ${color}"
    id="titulo">${nombre}
    </h2>
    `;

}
function borroH2(id){
    const titulo = elementoPorId(id);
    const color = obtenerElementoAleatorio(coloresTitulo);
    const nombre = obtenerElementoAleatorio(coloresNombre);
    titulo.innerHTML = `
    <h2 class="titulo"
    id="titulo"></h2>
    `;

}
function insertoBotones(id){
    const botones = elementoPorId(id);
    botones.innerHTML = `
    <div class="eleccioncol">
        <button id = ${coloresNombre[0]} class="caja rojo shadow" onclick="creoId(this)"></button>
        <button id = ${coloresNombre[1]} class="caja amarillo shadow" onclick="creoId(this)"></button>
        <button id = ${coloresNombre[2]} class="caja azul shadow" onclick="creoId(this)"></button>
        <button id = ${coloresNombre[3]} class="caja verde shadow" onclick="creoId(this)"></button>
        <button id = ${coloresNombre[4]} class="caja violeta shadow" onclick="creoId(this)"></button>
    </div>
    <div class="eleccioncol">
        <button id = ${coloresNombre[5]} class="caja marron shadow" onclick="creoId(this)"></button>
        <button id = ${coloresNombre[6]} class="caja rosa shadow" onclick="creoId(this)"></button>
        <button id = ${coloresNombre[7]} class="caja negro shadow" onclick="creoId(this)"></button>
        <button id = ${coloresNombre[8]} class="caja naranja shadow" onclick="creoId(this)"></button>
        <button id = ${coloresNombre[9]} class="caja celeste shadow" onclick="creoId(this)"></button>
    </div>
    `;
}

function insertoPuntaje(id){
    const elementoPuntaje = elementoPorId(id);
    const puntaje = calculoPuntaje();
    elementoPuntaje.innerHTML = `
    <h4 id = 'puntaje'class="nombre-usuario">
    Puntaje: ${puntaje}
    </h4>
    `;

}

function calculoPuntaje(){

    puntaje = puntaje + 1;
    return puntaje;

}

function comparoColores(colorUno, colorDos){
    let colorTitulo = colorUno;
    console.log("Color del titulo " + colorTitulo);
    console.log('*************');    
    let colorElegido = colorDos;
    console.log("Color Elegido " + colorElegido);

    if(colorTitulo === colorElegido){
        console.log('son iguales');
        return true;

    }
    else{
        console.log('perdiste')
        return false;
    }

}
function obtengoColor(id, propiedad){
    let element = elementoPorId(id);
    let elementStyle = window.getComputedStyle(element);
    let elementColor = elementStyle.getPropertyValue(propiedad);
    //console.log("****" + elementColor);
    return elementColor;

}
function recorrerElementos(elemento, evento){
    document.querySelectorAll(elemento).forEach(function(elem) {
        elem.addEventListener(evento, creoId, false);
        //console.log(elem);
    });
    
}

function creoId(valorId) {
    let elemento = "div.eleccioncol > button";
    let evento = 'click'
    recorrerElementos(elemento, evento);
    let btnId = valorId.id;
    //let btnvalue = this.value;
    //console.log("ID: " + btnId);
    //if(!btnId){
    //    btnId = "rojo";
    //}
    console.log("ID: " + btnId);
    let parametroColorElegido = btnId;
    console.log(estadoJuego,"en accionDelJuego()");
    let colorDeltitulo = obtengoColor('titulo', 'color');
    let colorElegido =  obtengoColor(parametroColorElegido, 'background-color')
    let comparacion = comparoColores(colorDeltitulo, colorElegido);
    if(comparacion){
        reseteoRelojEnJuego();
        calculoPuntaje();
        borroH2('texto');
        insertoH2('texto');
    }else{
        gameOver();

    }
    //return btnId;

}
function cambioEstadoJuego(){
    console.log("antes del click", estadoJuego);
    let inicioJuego = elementoPorId('inicio-del-juego');

    if(inicioJuego){
        estadoJuego = true;
        console.log(estadoJuego, "en cambioEstadoJuego()")

    }

}
/*
function accionDelJuego(){
        //const botones = elementoPorClase("caja");
        //console.log(botones);
        //if(botones.onclick === true){
        //    console.log('holamundo')
        // bot};
        if(!btnId){
            let parametroColorElegido = btnId;
            console.log(estadoJuego,"en accionDelJuego()");
            let colorDeltitulo = obtengoColor('titulo', 'color');
            let colorElegido =  obtengoColor(parametroColorElegido, 'background-color')
            comparoColores(colorDeltitulo, colorElegido);
            insertoPuntaje('puntaje');
        }else{
            return;

        }


}
*/
function cambioEstadoActivoReloj(){
    insertoH2('texto');
    cambioEstadoJuego();
    updateClock();

}



/*********LOGIN************ */
function accionModalInicio(){
	const inputDom = elementoPorId("nombre_jugador");
    const juego = elementoPorId("juego")
	const nombreJugador = inputDom.value;

	const elementoInicio = elementoPorId("inicio_juego");
    console.log("antes del click", estadoJuego);

	const acceder = nombreJugador;

	if(acceder !== ""){
	  ocultarElemento(elementoInicio);
      mostrarElemento(juego);
	  const elementoNombre = elementoPorId("nombre_usuario");
	  elementoNombre.textContent = nombreJugador;
	  window.localStorage.setItem("nombre", nombreJugador);

      insertoBotones('eleccion');

	}else{
		const MuestroPopUP = elementoPorId("popup");
		MuestroPopUP.innerHTML = `
		<div id="popupBody">
			<h2>Error </h2>
			<a id="cerrar" href="#">&times;</a>
			<div class="popupContent">
				<p>Completa tu nombre</p>
			</div>
		</div>
		`;
		const alink = elementoPorId('pop_up');
		seteoAtributos(alink,'href','#popup');
		return;
	}
}
function muestroInstrucciones(){
    const MuestroPopUP = elementoPorId("popupinstrucciones");
    MuestroPopUP.innerHTML = `
    <div id="popupBodyInstrucciones">
        <h2>Instrucciones</h2>
        <a id="close" href="#">&times;</a>
        <div class="popupContent">
            <p>
                El juego consiste en hacer click sobre el color que posee la palabra
                Si se acierta la palabra con el color clickeado antes del tiempo se
                suma un punto y el reloj vuelve a resetearse.
                Si se clickea sobre el boton incorrecto o el tiempo llega a cero el 
                jugador pierde.
            </p>
        </div>
    </div>
    `;
    const alink = elementoPorId('pop_up_instrucciones');
    seteoAtributos(alink,'href','#popupinstrucciones');
    return;
}
const accionModalFin = () => {
	// Se oculta el modal de final
	const elementoModalFinal = elementoPorId("fin_juego");
	ocultarElemento(elementoModalFinal);
    reseteoReloj();
    inicializacion()
    //loseMenuPrincipal();


};

  function seteoAtributos(elemento, atributo, valor){
    elemento.setAttribute(atributo, valor);

}
function loseMenuPrincipal(){
	const menuPrincipal = elementoPorId("menuppal");
	seteoAtributos(menuPrincipal,'href','index.html#');
	const inicio = elementoPorId("pop_up");
	seteoAtributos(inicio,"href","#");

	window.location.replace("index.html");
	const nombreInicial = document.getElementById("nombre_jugador");
	nombreInicial.value = '';
	localStorage.clear();

}
const inicializacion = () => {

    const juego = elementoPorId("juego")
	mostrarElemento(juego);
	

};
/********CRONOMETRO*********** */

//window.onload = updateClock;
function gameOver(){
    const elementoJuego = elementoPorId("juego");
    ocultarElemento(elementoJuego);

    const elementoModalFinal = elementoPorId("fin_juego");
    mostrarElemento(elementoModalFinal);

    const puntajeDom = elementoPorId("puntaje");
    puntajeDom.textContent = "tu puntaje es de " + calculoPuntaje();

}
function updateClock() {

    document.getElementById('countdown').innerHTML = totalTime;
    if(totalTime==0){
        gameOver()
		return;

    }else{
        totalTime-=1;
        setTimeout("updateClock()",1000);

    }
}
function reseteoRelojEnJuego(){
    if(totalTime !== 0){
        totalTime = 5;
    }
    return totalTime;

}
function reseteoReloj(){
    if(totalTime === 0){
        totalTime = 5;
    }
    return totalTime;

}


const nombreJugadorStorage = window.localStorage.getItem("nombre");
const elementoNombre = elementoPorId("nombre_jugador");
elementoNombre.value = nombreJugadorStorage || "";
