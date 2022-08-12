<template>
  <div class="todoApp">
    <div class="todos">
      <Todo
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        @delete="onDeleteTodo"
        @update="onUpdateTodo"
      />
      </div>
      <div>
        <input type="text" class="todo__input" placeholder="New todo..." v-model="newTodo"/>
        <button @click="onCreateTodo()" class="todo__create">Create</button>
      </div>
  </div>
</template>

<script>
  import Todo from "./components/Todo.vue";
  import { TodoController } from "../controllers/todoController";

  export default {
    components: {
      Todo
    },
    data() {
      return {
        todoController: null,
        todos: [],
        newTodo: ""
      };
    },
    watch: {
      todos() {
        debugger;
        console.log("View has been updated by the controller");
      }
    },
    mounted(){
      this.todoController = new TodoController(this);
      debugger;
      this.todos = this.todoController.todos;
    },
    methods: {
      async onCreateTodo(){
        const newTodo = {
          name: this.newTodo,
          completed: false,
        };
        await this.todoController.add(newTodo);
        this.newTodo = "";
      },
      async onUpdateTodo(todo){
        await this.todoController.update(todo);
      },
      async onDeleteTodo(todoId){
        await this.todoController.delete(todoId);
      }
    }
  };
</script>