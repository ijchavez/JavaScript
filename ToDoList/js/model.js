
export default class Model {
    constructor() {
      this.view = null;
      this.todos = JSON.parse(localStorage.getItem('todos'));
      if (!this.todos || this.todos.length < 1) {
        this.todos = [
          {
            id: 0,
            title: 'Titulo Inicial',
            description: 'Descripción Inicial',
            completed: false,

          }

        ]
        this.currentId = 1;

    } else {
        this.currentId = this.todos[this.todos.length - 1].id + 1;

        }

    }
    setView(view){
        this.view = view;

    }
    save() {
        localStorage.setItem('todos', JSON.stringify(this.todos));

    }
    getTodos(){
        //para pasarle una copia y no el objeto original
        return this.todos.map((todo) => ({...todo}));

    }
    findTodo(id){
        return this.todos.findIndex((todo) => todo.id === id);

    }
    toggleCompleted(id){
        const index = this.findTodo(id);
        const todo = this.todos[index];
        todo.completed = !todo.completed;
        console.log(this.todos);
        this.save();

    }
    editTodo(id, values) {
        const index = this.findTodo(id);
        Object.assign(this.todos[index], values);
        this.save();

    }
    addToDo(title, description){
        const todo = {
            id: this.currentId++,
            //si lo igual al valor o lo dejo asi es lo mismo
            title,
            description,
            completed: false,

        };
        this.todos.push(todo);
        console.log(this.todos);
        this.save();
        //me devuelve un clon del objeto
        //return Object.assign({},todo);
        //spread sintax es lo mismo que lo de arriba
       return {...todo};



    }
    removeTodo(id){
        const index = this.findTodo(id);
        this.todos.splice(index, 1);
        this.save();

    }

}