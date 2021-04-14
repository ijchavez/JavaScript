const personas = [
    new Persona('Juan','Perez'),
    new Persona('Karla','Lara')

];
function mostrarPersonas(){
    let texto = '';
    for (let persona of personas){
        console.log(persona);
        //tengo que hacer += concatenando los valores del tipo persona que se van iterando
        texto += `<li>${persona._nombre} ${persona._apellido}</li>`;

    }
    //utilizamos el document.getElementById recuperamos el elemento con id personas y en
    // su propiedad innerHTML agregamos la variable de texto
    document.getElementById('personas').innerHTML = texto;
}
function agregarPersonas(){
    // recupero el formulario
    const forma = document.forms['forma'];
    // recuperamos el elemento con el id
    const nombre = forma['nombre'];
    const apellido = forma['apellido'];
    if(nombre.value != '' && apellido.value != ''){
        // al poner value recupero el valor
        const persona = new Persona(nombre.value, apellido.value);
        // agrego al arreglo con el push
        personas.push(persona);
        //tengo que volver a mostrar las personas, invoco la funcion
        mostrarPersonas();
    }else{
        alert('No hay información que agregar');

    }


}