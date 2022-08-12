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
            debugger;
            this.view.todos = await getAllTodos();
        } catch(e) {
            throw e;
        }
    }

    async add(todo) {
        try {
            debugger;
            this.view.todos = await createTodo(todo);
        } catch(e) {
            throw e;
        }
    }

     async update(todo) {
        try {
            debugger;
            this.view.todos = await editTodo(todo);
        } catch(e) {
            throw e;
        }
    };
    
     async delete(todoId) {
        try {
            debugger;
            this.view.todos = await removeTodo(todoId);
        } catch(e) {
            throw e;
        }
    };
}