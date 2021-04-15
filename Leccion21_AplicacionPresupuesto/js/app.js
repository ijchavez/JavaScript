const ingresos = [
    new Ingreso('Salario', 2100.00),
    new Ingreso('Venta Auto', 1500.00)

];
const egresos = [
    new Egreso('Renta departamento',900.00),
    new Egreso('Ropa',400.00)

];

let cargarApp = () =>{
    cargarCabecero();
    cargarIngresos();
    cargarEgresos();

}

let totalIngresos = () =>{
    let totalIngreso = 0;
    for (let ingreso of ingresos){
        totalIngreso += ingreso.valor;

    }
    return totalIngreso;

}
let totalEgresos = () =>{
    let totalEgreso = 0;
    for (let egreso of egresos){
        totalEgreso += egreso.valor;

    }
    return totalEgreso;

}

let cargarCabecero = () =>{
    let presupuesto = totalIngresos() - totalEgresos();
    let porcentajeEgreso = 0;
    porcentajeEgreso = totalEgresos() / totalIngresos();
    document.getElementById('presupuesto').innerHTML = formatoMoneda(presupuesto);
    document.getElementById('porcentaje').innerHTML = formatoPorcentaje(porcentajeEgreso);
    document.getElementById('ingresos').innerHTML = formatoMoneda(totalIngresos());
    document.getElementById('egresos').innerHTML = formatoMoneda(totalEgresos());

}

const formatoMoneda = (valor) =>{
    return valor.toLocaleString('es-AR',{style:'currency', currency:'ARS', minimumFractionDigits:2});

}

const formatoPorcentaje = (valor) =>{
    return valor.toLocaleString('es-AR',{style:'percent', minimumFractionDigits:2});

}

const cargarIngresos = () =>{
    let ingresosHTML = '';
    for (let ingreso of ingresos){
        ingresosHTML += crearIngresoHTML(ingreso);

    }
    document.getElementById('lista-ingresos').innerHTML = ingresosHTML;

}

const crearIngresoHTML = (ingreso) =>{
    let ingresosHTML = `
    <div class="elemento limpiarEstilos">
        <div class="elemento_descripcion">${ingreso.descripcion}</div>
            <div class='derecha limpiarEstilos'>
                <div class="elemento_valor">${formatoMoneda(ingreso.valor)}</div>
                <div class="elemento_eliminar">
                    <button class='elemento_eliminar--btn'>
                        <ion-icon name='close-circle-outline'
                        onclick='eliminarIngreso(${ingreso.id})'></ion-icon>
                </button>
            </div>
        </div>
    </div>
        `;
    return ingresosHTML;

}
//proporcionamos el id de ingreso (ingreso.id)
const eliminarIngreso = (id) =>{
    let indiceEliminar = ingresos.findIndex(ingreso => ingreso.id === id);
    let confirmacion = confirmarAccion('egreso');
    if(confirmacion == true){
    //indice a eliminar, cantidad de registros a eliminar
    ingresos.splice(indiceEliminar, 1);
    manejoDeMensaje('Ingreso borrado satisfactoriamente');
    cargaAutomatica('Ingreso')
    }

}

const cargarEgresos = () =>{
    let egresoHTML = '';
    for (let egreso of egresos){
        egresoHTML += crearEgresoHTML(egreso);

    }
    document.getElementById('lista-egresos').innerHTML = egresoHTML;

}

const crearEgresoHTML = (egreso) => {
    let egresoHTML = `
    <div class="elemento limpiarEstilos">
                    <div class="elemento_descripcion">${egreso.descripcion}</div>
                        <div class="derecha limpiarEstilos">
                            <div class="elemento_valor">${formatoMoneda(egreso.valor)}</div>
                            <div class="elemento_porcentaje">${formatoPorcentaje(egreso.valor/totalEgresos())}</div>
                            <div class="elemento_eliminar">
                                <button class='elemento_eliminar--btn'>
                                <ion-icon name='close-circle-outline'
                                onclick='eliminarEgreso(${egreso.id})'></ion-icon>
                                </button>
                            </div>
                        </div>
                </div>
    `
    return egresoHTML;

}
//proporcionamos el id de ingreso (ingreso.id)
const eliminarEgreso = (id) =>{
    let indiceEliminar = egresos.findIndex(egreso => egreso.id === id);
    let confirmacion = confirmarAccion('egreso');
    if(confirmacion == true){
        //indice a eliminar, cantidad de registros a eliminar
        egresos.splice(indiceEliminar, 1);
        manejoDeMensaje('Egreso borrado satisfactoriamente');
        cargaAutomatica('Egreso');
  
    }

}
let agregarDato = () =>{
    let forma = document.forms['forma'];
    let tipo = forma['tipo'];
    let descripcion = forma['descripcion'];
    let valor = forma['valor'];
    if (descripcion.value !== '' && valor.value !== '' ){
        if (valor.value > 0) {
            if(tipo.value == 'ingreso'){
                ingresos.push(new Ingreso(descripcion.value, +valor.value));
                cargaAutomatica('Ingreso')

            }
            else if (tipo.value == 'egreso'){
                egresos.push(new Egreso(descripcion.value, +valor.value));
                cargaAutomatica('Egreso')

            }

        }else{
            manejoDeMensaje('El valor debe ser mayor a cero');
            
        }

    }
}
const cargaAutomatica = (tipo) =>{
    cargarCabecero();
    if (tipo === 'Ingreso'){
        cargarIngresos();
    
    }
    else if(tipo ==='Egreso'){
        cargarEgresos();

    }
}
function manejoDeMensaje(mensaje){
    alert(mensaje);

}
function confirmarAccion(tipo){
    let mensaje = 'Está seguro que desea borrar este ';
    let mensajeConfirm = '';
    if (tipo === 'ingreso'){
        let mensajeIngreso = mensaje + tipo + ' ?';
        mensajeConfirm = confirm(mensajeIngreso);

    }
    else if(tipo === 'egreso'){
        let mensajeEgreso = mensaje + tipo + ' ?';
        mensajeConfirm = confirm(mensajeEgreso);

    }
    return mensajeConfirm;
}
