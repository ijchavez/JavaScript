import Alert from './alert.js';

export default class AddTodo{
    constructor(){
       this.btn = document.getElementById('add');
           //accedo a los boxes de titulo y descripcion
       this.title = document.getElementById('title');
       this.description = document.getElementById('description');

       this.alert = new Alert('alert');

    }
    onClick(callback){
        this.btn.onclick = () =>{
                if (title.value === '' || description.value === ''){
                    let mensaje = 'Title and description required';
                    // alert.innerHTML = 'Title and desc required';
                    //console.error('incorrecto');
                    this.alert.show(mensaje)

                }else{
                    this.alert.hide();
                    callback(this.title.value, this.description.value);

                }

        }

    }

}