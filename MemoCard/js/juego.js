const imagenNombre = ['chrome','firefox','opera','safari','edge','konkeror','brave','dragonbrowser','flock','gnomeweb','torch','ironbrowser',
                      'mintbrowser','minwebbrowser','netscape','dolphin','chrome1','firefox1','opera1','safari1','edge1','konkeror1','brave1','dragonbrowser1',
                      'flock1','gnomeweb1','torch1','ironbrowser1','mintbrowser1','minwebbrowser1','netscape1','dolphin1'
];

let cartaDescubierta = 0;
let puntaje = 0;
insertoPuntaje('puntaje');
function obtengoElemento(id){
    const unElemento = document.getElementById(id);
    return unElemento;

}
function obtengoElementosPorClase(clase){
    array = document.getElementsByClassName(clase);
    return array;

}

function obtenerElementoAleatorio(array){
    for (var n = 0; n < array.length; n++) {
            let i = Math.floor(Math.random() * array.length);
            array[i]
            return array[i];

    }

}
function insertoBotones(id){
    const botones = obtengoElemento(id);
    let arrayDeNumeros = aleatoriosNoRepetidos(32);
    let idUno = imagenNombre[arrayDeNumeros[0]];
    let idDos = imagenNombre[arrayDeNumeros[1]];
    let idTres = imagenNombre[arrayDeNumeros[2]];
    let idCuatro = imagenNombre[arrayDeNumeros[3]];
    let idCinco = imagenNombre[arrayDeNumeros[4]];
    let idSeis = imagenNombre[arrayDeNumeros[5]];
    let idSiete = imagenNombre[arrayDeNumeros[6]];
    let idOcho = imagenNombre[arrayDeNumeros[7]];
    let idNueve = imagenNombre[arrayDeNumeros[8]];
    let idDiez = imagenNombre[arrayDeNumeros[9]];
    let idOnce = imagenNombre[arrayDeNumeros[10]];
    let idDoce = imagenNombre[arrayDeNumeros[11]];
    let idTrece = imagenNombre[arrayDeNumeros[12]];
    let idCatorce = imagenNombre[arrayDeNumeros[13]];
    let idQuince = imagenNombre[arrayDeNumeros[14]];
    let idDieciseis = imagenNombre[arrayDeNumeros[15]];
    let idDiecisiete = imagenNombre[arrayDeNumeros[16]];
    let idDieciocho = imagenNombre[arrayDeNumeros[17]];
    let idDiecinueve = imagenNombre[arrayDeNumeros[18]];
    let idVeinte = imagenNombre[arrayDeNumeros[19]];
    let idVeintiuno = imagenNombre[arrayDeNumeros[20]];
    let idVeintidos = imagenNombre[arrayDeNumeros[21]];
    let idVeintitres = imagenNombre[arrayDeNumeros[22]];
    let idVeinticuatro = imagenNombre[arrayDeNumeros[23]];
    let idVeinticinco = imagenNombre[arrayDeNumeros[24]];
    let idVeintiseis = imagenNombre[arrayDeNumeros[25]];
    let idVeintisiete = imagenNombre[arrayDeNumeros[26]];
    let idVeintiocho = imagenNombre[arrayDeNumeros[27]];
    let idVeintinueve = imagenNombre[arrayDeNumeros[28]];
    let idTreinta = imagenNombre[arrayDeNumeros[29]];
    let idTreintayuno = imagenNombre[arrayDeNumeros[30]];
    let idTreintaydos = imagenNombre[arrayDeNumeros[31]];
    botones.innerHTML = `
        <div class="eleccioncar">
            <div>
                <button id = ${idUno} value="${idUno}" class="caja dorso ${idUno}" onclick="descubroCarta('${idUno}')"></button>
                <button id = ${idDos} value="${idDos}" class="caja dorso ${idDos}" onclick="descubroCarta('${idDos}')"></button>
                <button id = ${idTres} value="${idTres}" class="caja dorso ${idTres}" onclick="descubroCarta('${idTres}')"></button>
                <button id = ${idCuatro} value="${idCuatro}" class="caja dorso ${idCuatro}" onclick="descubroCarta('${idCuatro}')"></button>
                <button id = ${idCinco} value="${idCinco}" class="caja dorso ${idCinco}" onclick="descubroCarta('${idCinco}')"></button>
                <button id = ${idSeis} value="${idSeis}" class="caja dorso ${idSeis}" onclick="descubroCarta('${idSeis}')"></button>
                <button id = ${idSiete} value="${idSiete}" class="caja dorso ${idSiete}" onclick="descubroCarta('${idSiete}')"></button>
                <button id = ${idOcho} value="${idOcho}" class="caja dorso ${idOcho}" onclick="descubroCarta('${idOcho}')"></button>
            </div>
            <div>
                <button id = ${idNueve} value="${idNueve}" class="caja dorso ${idNueve}" onclick="descubroCarta('${idNueve}')"></button>
                <button id = ${idDiez} value="${idDiez}" class="caja dorso ${idDiez}" onclick="descubroCarta('${idDiez}')"></button>
                <button id = ${idOnce} value="${idOnce}" class="caja dorso ${idOnce}" onclick="descubroCarta('${idOnce}')"></button>
                <button id = ${idDoce} value="${idDoce}" class="caja dorso ${idDoce}" onclick="descubroCarta('${idDoce}')"></button>
                <button id = ${idTrece} value="${idTrece}" class="caja dorso ${idTrece}" onclick="descubroCarta('${idTrece}')"></button>
                <button id = ${idCatorce} value="${idCatorce}" class="caja dorso ${idCatorce}" onclick="descubroCarta('${idCatorce}')"></button>
                <button id = ${idQuince} value="${idQuince}" class="caja dorso ${idQuince}" onclick="descubroCarta('${idQuince}')"></button>
                <button id = ${idDieciseis} value="${idDieciseis}" class="caja dorso ${idDieciseis}" onclick="descubroCarta('${idDieciseis}')"></button>
            </div>
            <div>
                <button id = ${idDiecisiete} value="${idDiecisiete}" class="caja dorso ${idDiecisiete}" onclick="descubroCarta('${idDiecisiete}')"></button>
                <button id = ${idDieciocho} value="${idDieciocho}" class="caja dorso ${idDieciocho}" onclick="descubroCarta('${idDieciocho}')"></button>
                <button id = ${idDiecinueve} value="${idDiecinueve}" class="caja dorso ${idDiecinueve}" onclick="descubroCarta('${idDiecinueve}')"></button>
                <button id = ${idVeinte} value="${idVeinte}" class="caja dorso ${idVeinte}" onclick="descubroCarta('${idVeinte}')"></button>
                <button id = ${idVeintiuno} value="${idVeintiuno}" class="caja dorso ${idVeintiuno}" onclick="descubroCarta('${idVeintiuno}')"></button>
                <button id = ${idVeintidos} value="${idVeintidos}" class="caja dorso ${idVeintidos}" onclick="descubroCarta('${idVeintidos}')"></button>
                <button id = ${idVeintitres} value="${idVeintitres}" class="caja dorso ${idVeintitres}" onclick="descubroCarta('${idVeintitres}')"></button>
                <button id = ${idVeinticuatro} value="${idVeinticuatro}" class="caja dorso ${idVeinticuatro}" onclick="descubroCarta('${idVeinticuatro}')"></button>
            </div>
            <div>
                <button id = ${idVeinticinco} value="${idVeinticinco}" class="caja dorso ${idVeinticinco}" onclick="descubroCarta('${idVeinticinco}')"></button>
                <button id = ${idVeintiseis} value="${idVeintiseis}" class="caja dorso ${idVeintiseis}" onclick="descubroCarta('${idVeintiseis}')"></button>
                <button id = ${idVeintisiete} value="${idVeintisiete}" class="caja dorso ${idVeintisiete}" onclick="descubroCarta('${idVeintisiete}')"></button>
                <button id = ${idVeintiocho} value="${idVeintiocho}" class="caja dorso ${idVeintiocho}" onclick="descubroCarta('${idVeintiocho}')"></button>
                <button id = ${idVeintinueve} value="${idVeintinueve}" class="caja dorso ${idVeintinueve}" onclick="descubroCarta('${idVeintinueve}')"></button>
                <button id = ${idTreinta} value="${idTreinta}" class="caja dorso ${idTreinta}" onclick="descubroCarta('${idTreinta}')"></button>
                <button id = ${idTreintayuno} value="${idTreintayuno}" class="caja dorso ${idTreintayuno}" onclick="descubroCarta('${idTreintayuno}')"></button>
                <button id = ${idTreintaydos} value="${idTreintaydos}" class="caja dorso ${idTreintaydos}" onclick="descubroCarta('${idTreintaydos}')"></button>
            </div>
        </div>
    `;

}
function insertarEn(array,valor,posición){
	var inicio=array.slice(0,posición)
	var medio=valor
	var fin=array.slice(posición)
	var resultado=inicio.concat(medio).concat(fin)
	return resultado

}
function aleatoriosNoRepetidos(cantidad){
	var array=[]
	for(var i=0;i<cantidad;i++){
		array=insertarEn(array,i,Math.random()*(cantidad+1) )

	}
	return array

}
function descubroCarta(id) {
    let element = obtengoElemento(id);
    element.classList.remove('dorso');
    element.classList.add("cartadescubierta");
    if(cartaDescubierta < 3){ 
        element.classList.add("selected")
        let arraySeleccionadas = obtengoElementosPorClase('selected');
        let cartaUno = arraySeleccionadas[0].getAttribute("id");
        let cartaDos = arraySeleccionadas[1].getAttribute("id");
        if(cartaUno !== 'undefined' && cartaDos !== 'undefined'){
            if(cartaUno.substring(0,4) == cartaDos.substring(0,4)){
                    encuentroPareja(cartaUno);
                    encuentroPareja(cartaDos);
                    cartaDescubierta = 0;
                    puntaje++;
                    insertoPuntaje('puntaje');

            }else{
                cubroCarta(cartaUno);
                cubroCarta(cartaDos);
                cartaDescubierta = 0;

            }

        }
        cartaDescubierta++;

    }

}
/*
para que de un tiempo prudente en mostrar la segunda carta y taparla
busque en https://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep
y reutilice la funcion que esta ahi para integrarla al juego
*/
async function cubroCarta(id){
    let element = obtengoElemento(id);
    element.classList.remove("cartadescubierta");
    element.classList.remove('selected')
    await sleep(500)
    element.classList.add("dorso");

}
function encuentroPareja(id){
    let element = obtengoElemento(id);
    element.classList.remove('selected')
    element.classList.add("pareja");
    element.disabled = true;

}

function insertoPuntaje(id){
    const elementoPuntaje = obtengoElemento(id);
    if(puntaje == 0){
        elementoPuntaje.innerHTML = `
                                    <h4 id = 'valor' class='valor'>Puntaje: 0</h4>
                                    `;
    }
    else if (puntaje == 16){
        elementoPuntaje.innerHTML = `
                                   <h4 id = 'valor' class='valor'>Puntaje: ${puntaje}</h4>
                                   <h4 class='valor'>Ganaste!</h4>
                                    `;
    }else{
        elementoPuntaje.innerHTML = `
                                    <h4 id = 'valor' class='valor'>Puntaje: ${puntaje}</h4>
                                    `;
    }

}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));

}
function seteoAtributos(elemento, atributo, valor){
    elemento.setAttribute(atributo, valor);

}
//Cuando se toca el boton Instrucciones y se sale del mismo
//los botones de las cartas tienen un pequeño delay que no puedo
//determinar porque se da 
function muestroInstrucciones(){
    const MuestroPopUP = obtengoElemento("popupinstrucciones");
    MuestroPopUP.innerHTML = `
    <div id="popupBodyInstrucciones">
        <h2>Instrucciones</h2>
        <a id="close" href="#">&times;</a>
        <div class="popupContent">
            <p>
                El juego consiste en hacer click sobre una carta
                y encontrar su pareja, si se clickean dos cartas
                y no hay coincidencia las mismas se dan vuelta
                nuevamente
            </p>
        </div>
    </div>
    `;
    const alink = obtengoElemento('pop_up_instrucciones');
    seteoAtributos(alink,'href','#popupinstrucciones');
    return;
}