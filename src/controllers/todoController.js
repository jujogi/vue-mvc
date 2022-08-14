import { getAllTodos, createTodo, editTodo, removeTodo } from "../models/todos.model";

export class TodoController {
    constructor(view) {
        this.view = view;
    }

    get todos() {
        return this.get();
    }

    async get() {
        try {
            this.view.todos = await getAllTodos();
        } catch(e) {
            throw e;
        }
    }

    async add(todo) {
        try {
            this.view.todos = await createTodo(todo);
        } catch(e) {
            throw e;
        }
    }

     async update(todo) {
        try {
            todo.completed = !todo.completed;
            this.view.todos = await editTodo(todo);
        } catch(e) {
            throw e;
        }
    };
    
     async delete(todoId) {
        try {
            this.view.todos = await removeTodo(todoId);
        } catch(e) {
            throw e;
        }
    };
}