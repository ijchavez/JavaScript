//Consigo el boton en base al ID que esta en HTML
/*
              <button type="button" class="btn btn-info btn-block" id="add">
                Add
              </button>
const btn = document.getElementById('add');
btn.addEventListener('click', function(){
    console.log('click');

});

*/
/*
'DOMContentLoaded' >> no ejecuta el codigo hasta que no este cargado todo el HTML
*/
document.addEventListener('DOMContentLoaded', function(){
    //accedo al boton Add
    const btn = document.getElementById('add');
    // accedo a la tabla para 
    const table = document.getElementById('table');
    // accedo a la alerta para mostrar errores
    const alert = document.getElementById('alert');
    let id = 1;

    function removeTodo(id) {
        //console.log(id);
        document.getElementById(id).remove();


    }
    function addToDo(){
        if (title.value === '' || description.value === ''){
            alert.classList.remove('d-none');
            alert.innerHTML = 'Title and desc required';
            return;

        }
        alert.classList.add('d-none');
        const row = table.insertRow();
        row.setAttribute('id', id++);
        row.innerHTML = `
         <td>${title.value}</td>
         <td>${description.value}</td>
         <td class="text-center">
            <input type="checkbox">
        </td>
        <td class="text-right">
            <button class="btn btn-primary mb-1">
                <i class="fa fa-pencil"></i>
            </button>

        </td>
        `;
        const removeBtn = document.createElement('button');
        //añado todas las clases que estan en HTML para este boton
        removeBtn.classList.add('btn', 'btn-danger', 'mb-1', 'ml-1');
        removeBtn.innerHTML = '<i class="fa fa-trash"></i>';
        // veo lo que me trae el row que quiero usar console.log(row.children[3]);
        //a ese row le pido que me añada otro hijo
        removeBtn.onclick = function (){
            //veo el evento
            //una vez que lo veo creo un ID y le doy el atributo row.setAttribute('id', id++);
            // llamo a la funcion y le paso el atributo que tomo
            removeTodo(row.getAttribute('id'));

        }
        row.children[3].appendChild(removeBtn);

    }   
    btn.onclick = addToDo;
});

