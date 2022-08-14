<template>
	<div class="todo">
		<header
			class="todo__header"
			@click="updateTodo()"
			:class="{ 'todo__header--completed': isCompleted }"
		>
			<input type="checkbox" class="todo__check" :checked="isCompleted" />
			<h2 class="todo__name">{{ todo.name }}</h2>
		</header>
		<span @click="deleteTodo()" class="todo__delete">❌</span>
	</div>
</template>
<script>
export default {
	props: {
		todo: { type: Object, required: true },
		delete: { type: Function },
		update: { type: Function }
	},
	computed: {
		isCompleted() {
			return this.todo.completed;
		}
	},
	methods: {
		deleteTodo() {
			this.$emit("delete", this.todo.id);
		},
		updateTodo() {
			this.$emit("update", this.todo);
		}
	}
};
</script>
