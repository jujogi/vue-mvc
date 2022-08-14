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
		<Form @createTodo="onCreateTodo" />
	</div>
</template>

<script>
import Todo from "./components/Todo.vue";
import Form from "./components/Form.vue";
import { TodoController } from "../controllers/todoController";
import Form from "./components/Form.vue";

export default {
	components: {
		Todo,
		Form
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
			console.log("View has been updated by the controller");
		}
	},
	mounted() {
		this.todoController = new TodoController(this);
		this.todos = this.todoController.todos;
	},
	methods: {
		async onCreateTodo(newTodo) {
			await this.todoController.add(newTodo);
		},
		async onUpdateTodo(todo) {
			await this.todoController.update(todo);
		},
		async onDeleteTodo(todoId) {
			await this.todoController.delete(todoId);
		}
	}
};
</script>
