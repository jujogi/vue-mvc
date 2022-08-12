<template>
  <div class="todoApp">
      <Todo
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        @delete="onDeleteTodo"
        @update="onUpdateTodo"
      />
      <button @click="createTodo()">Create!</button>
  </div>
</template>

<script>
  import Todo from "./components/Todo.vue";
  import { TodoController } from "../controllers/todoController";

  const todoController = new TodoController(this);
  console.log(todoController);
  // import {
  //   getTodos as getTodosController,
  //   addTodo as addTodoController,
  //   updateTodo as updateTodoController,
  //   deleteTodo as deleteTodoController
  // } from "../controllers/todos.controller";

  export default {
    components: {
      Todo
    },
    data() {
      return {
        todos: []
      };
    },
    watch: {
      todos() {
        console.log("View has been updated!");
      }
    },
    created(){
      this.loadTodos();
    },
    methods: {
      async loadTodos(){
        await getTodosController(this);
      },
      async createTodo(){
        const todo = {
          name: "Jugar play",
          completed: false,
        };
        await addTodoController(this, todo);
      },
      async onUpdateTodo(todo){
        await updateTodoController(this, todo);
      },
      async onDeleteTodo(todoId){
        await deleteTodoController(this, todoId);
      }
    }
  };
</script>