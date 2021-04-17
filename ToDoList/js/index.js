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
import Model from '../js/model.js';
import View from '../js/view.js';

document.addEventListener('DOMContentLoaded', function(){
    const model = new Model();
    const view = new View();
    model.setView(view);
    view.setModel(model);
  
    view.render();

});

