import AddTodo from '../components/add-todo.js';
import Modal from '../components/modal.js';
import Filters from '../components/filters.js';

export default class View{
    constructor(){
        this.model = null;
        this.table = document.getElementById('table');
        this.addTodoForm = new AddTodo();
        this.modal = new Modal();
        this.filters = new Filters();

        /*
        Uso una funcion flecha porque el this se refiere al objeto de la funcion
        Con la fn flecha no declaro la funcion, es anonima entonces el this no se refiere
        a la funcion en la que estoy sino que se refiere a la clase.
        */
        this.addTodoForm.onClick((title, description) => this.addTodo(title, description));
        this.modal.onClick((id, values) => this.editTodo(id, values));
        this.filters.onClick((filters) => this.filter(filters))

    }
    setModel(model){
        this.model = model;

    }
    render(){
        const todos = this.model.getTodos();
        todos.forEach((todo) => this.createRow(todo));

    }
    filter(filters){
        const { type, words } = filters;
        //para que no me traiga la cabecera hago:
        const [, ...rows] = this.table.getElementsByTagName('tr');
        for (const row of rows) {
            //con esto evito hacer const title = row.children[0] row.children[1]....
            const [title, description, completed] = row.children;
            let shouldHide = false;
      
            if (words) {
              shouldHide = !title.innerText.includes(words) && !description.innerText.includes(words);
            
            }
            const shouldBeCompleted = type === 'completed';
            const isCompleted = completed.children[0].checked;
            if(type !== 'all' && shouldBeCompleted !== isCompleted) {
                shouldHide = true;

            }
            if(shouldHide){
                row.classList.add('d-none')
            }
            else{
                row.classList.remove('d-none')
            }
            
        }

    }
    addTodo(title, description){
        const todo = this.model.addToDo(title, description);
        this.createRow(todo);

    }
    toggleCompleted(id){
        this.model.toggleCompleted(id);

    }
    editTodo(id, values){
        this.model.editTodo(id, values);
        const row = document.getElementById(id);
        row.children[0].innerHTML = values.title;
        row.children[1].innerHTML = values.description;
        row.children[2].children[0].checked = values.completed;

    }
    removeTodo(id){
        this.model.removeTodo(id);
        document.getElementById(id).remove();

    }
    createRow(todo){
        const row = table.insertRow();
        row.setAttribute('id', todo.id);
        row.innerHTML = `
         <td>${todo.title}</td>
         <td>${todo.description}</td>
         <td class="text-center">
            <!--Agrego botón eliminar con JS -->
         </td>
         <td class="text-right">
            <!--Agrego botón editar con JS -->
        </td>
        `;

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.completed;
        checkbox.onclick = () => this.toggleCompleted(todo.id);
        row.children[2].appendChild(checkbox);
        
        const editBtn = document.createElement('button');
        editBtn.classList.add('btn', 'btn-primary', 'mb-1');
        editBtn.innerHTML = '<i class="fa fa-pencil"></i>';
        editBtn.setAttribute('data-toggle', 'modal');
        editBtn.setAttribute('data-target', '#modal');
        editBtn.onclick = () => this.modal.setValues({
            id: todo.id,
            title: row.children[0].innerText,
            description: row.children[1].innerText,
            completed: row.children[2].children[0].checked,

          });
          row.children[3].appendChild(editBtn);
        row.children[3].appendChild(editBtn);

        const removeBtn = document.createElement('button');
        //añado todas las clases que estan en HTML para este boton
        removeBtn.classList.add('btn', 'btn-danger', 'mb-1', 'ml-1');
        removeBtn.innerHTML = '<i class="fa fa-trash"></i>';
        // veo lo que me trae el row que quiero usar console.log(row.children[3]);
        //a ese row le pido que me añada otro hijo
        removeBtn.onclick = () => {
            //veo el evento
            //una vez que lo veo creo un ID y le doy el atributo row.setAttribute('id', id++);
            // llamo a la funcion y le paso el atributo que tomo
            //lo cambia despues porque al pedir un valor numerico es mas facil pasar el id de todo
            this.removeTodo((todo.id));

        }
        row.children[3].appendChild(removeBtn);

    }

}