import Alert from './alert.js';

export default class Modal{
    constructor(){
        this.title = document.getElementById('modal-title');
        this.description = document.getElementById('modal-description');
        this.btn = document.getElementById('modal-btn');
        this.completed = document.getElementById('modal-completed');
        this.alert = new Alert('modal-alert');
        this.todo = null;

    }
    setValues(todo){
        this.todo = todo;
        this.title.value = todo.title;
        this.description.value = todo.description;
        this.completed.checked = todo.completed;

    }

    onClick(callback){
        this.btn.onclick = () => {
            if (!this.title.value || !this.description.value){
                let mensaje = 'Title and description arequired';
                // alert.innerHTML = 'Title and desc required';
                //console.error('incorrecto');
                this.alert.show(mensaje)
                return;

            }
            $('#modal').modal('toggle');

            callback(this.todo.id, {
                title: this.title.value,
                description: this.description.value,
                completed: this.completed.checked,

            });

        }

    }


}