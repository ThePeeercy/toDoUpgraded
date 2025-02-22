import { create } from "zustand";

export const useTodo = create((set, get) => ({
  todos: [],

  setTodos: (newTodos) => set({ todos: newTodos }),
  addTodo: (item) => {
    set((state) => ({ todos: [...state.todos, item] }));
  },

  toggleElement: (id) => {
    const item = get().todos.find((todo) => todo.id === id);
    item.completed = !item.completed;

    set((state) => ({
      todos: [...state.todos.filter((subTodo) => subTodo.id !== id), item],
    }));
  },
}));
