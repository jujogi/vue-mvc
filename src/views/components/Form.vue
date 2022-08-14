<template>
	<form @submit="onCreateTodo" class="todo__form">
		<input
			type="text"
			class="todo__input"
			placeholder="New todo..."
			v-model="todo"
		/>
		<input type="submit" class="todo__create" value="Create todo" />
	</form>
</template>
<script>
export default {
	data() {
		return {
			todo: ""
		};
	},
	methods: {
		onCreateTodo(e) {
			e.preventDefault();
			const newTodo = {
				name: this.todo,
				completed: false
			};
			this.$emit("createTodo", newTodo);
			this.todo = "";
		}
	}
};
</script>
