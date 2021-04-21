const coloresTitulo = ['red', 'yellow', 'blue', 'green', 'violet', 'brown', 'plum', 'black', 'orange', 'skyblue'];
const coloresNombre = ['Rojo', 'Amarillo', 'Azul', 'Verde', 'Violeta', 'Marrón', 'Rosa', 'Negro', 'Naranja', 'Azul'];
let estadoJuego = false;
let totalTime = 100000;

function elementoPorId(id){
    const elementoPorId = document.getElementById(id);
    return elementoPorId;

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
function insertoBotones(id){
    const botones = elementoPorId(id);
    botones.innerHTML = `
    <div class="eleccioncol">
        <button id = "rojo" class="caja rojo shadow"></button>
        <button id = "amarillo" class="caja amarillo shadow"></button>
        <button id = "azul" class="caja azul shadow"></button>
        <button id = "verde" class="caja verde shadow"></button>
        <button id = "violeta" class="caja violeta shadow"></button>
    </div>
    <div class="eleccioncol">
        <button id = "marron" class="caja marron shadow"></button>
        <button id = "rosa" class="caja rosa shadow"></button>
        <button id = "negro" class="caja negro shadow"></button>
        <button id = "naranja" class="caja naranja shadow"></button>
        <button id = "celeste" class="caja celeste shadow"></button>
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
    let puntaje = 0;
    puntaje += puntaje;
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
        calculoPuntaje();

    }
    else{
        console.log('perdiste')
    }

}
function obtengoColor(id, propiedad){
    let element = elementoPorId(id);
    let elementStyle = window.getComputedStyle(element);
    let elementColor = elementStyle.getPropertyValue(propiedad);
    //console.log("****" + elementColor);
    return elementColor;

}
function recorrerElementos(elemento, evento, funcion){
    document.querySelectorAll(elemento).forEach(function(elem) {
        elem.addEventListener(evento, funcion, false);
        //console.log(elem);
    });
    
}
function creoId() {
    let elemento = "div.eleccioncol > button";
    let evento = 'click'
    let funcionSinParentesis = creoId;
    recorrerElementos(elemento, evento, funcionSinParentesis);
    let btnId = '';
    btnId = this.id;
    //let btnvalue = this.value;
    console.log("ID: " + btnId);
    if(!btnId){
        btnId = "rojo";
    }
    console.log("ID: " + btnId);
    return btnId;

}
function cambioEstadoJuego(){
    console.log("antes del click", estadoJuego);
    let inicioJuego = elementoPorId('inicio-del-juego').onclick;

    if(inicioJuego){
        estadoJuego = true;
        console.log(estadoJuego, "en cambioEstadoJuego()")
        accionDelJuego();

    }

}

function accionDelJuego(){
        const botones = elementoPorClase("caja");
        console.log(botones);
        if(botones.onclick === true){
            console.log('holamundo')
        };
        let parametroColorElegido = creoId();
        console.log(estadoJuego);
        let colorDeltitulo = obtengoColor('titulo', 'color');
        let colorElegido =  obtengoColor(parametroColorElegido, 'background-color')
        comparoColores(colorDeltitulo, colorElegido);
        insertoPuntaje('puntaje');

}
function cambioEstadoActivoReloj(){
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
      insertoH2('texto');

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
const accionModalFin = () => {
	// Se oculta el modal de final
	const elementoModalFinal = elementoPorId("fin_juego");
	ocultarElemento(elementoModalFinal);
    inicializacion()
    //loseMenuPrincipal();
    reseteoReloj();

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

function updateClock() {

    document.getElementById('countdown').innerHTML = totalTime;
    if(totalTime==0){
        const elementoJuego = elementoPorId("juego");
		ocultarElemento(elementoJuego);

		const elementoModalFinal = elementoPorId("fin_juego");
		mostrarElemento(elementoModalFinal);

		const puntajeDom = elementoPorId("puntaje");
		puntajeDom.textContent = "tu puntaje es de " + calculoPuntaje();

		return;

    }else{
        totalTime-=1;
        setTimeout("updateClock()",1000);

    }
}
function reseteoReloj(){
    if(totalTime == 0){
        totalTime = 5;
    }
    return totalTime;

}


const nombreJugadorStorage = window.localStorage.getItem("nombre");
const elementoNombre = elementoPorId("nombre_jugador");
elementoNombre.value = nombreJugadorStorage || "";
