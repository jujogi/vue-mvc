import TODOS from "../utils/todos";
import { generatePromise, uuid } from "../utils";
import { add, edit, remove } from "../utils/crud";

let mockTodos = [...TODOS];

export const createTodo = (todo) => {
    const newTodo = {
        id: uuid(),
        ...todo,
    };

    mockTodos = add(mockTodos, newTodo);

    return getAllTodos();
  };

export const editTodo = (todo) => {
    mockTodos = edit(mockTodos, todo);
    return getAllTodos();
};

export const getAllTodos = () => {
    debugger;
    return generatePromise(mockTodos);
}

export const removeTodo = (todoId) => {
    mockTodos = remove(mockTodos, todoId);
    return getAllTodos();
}