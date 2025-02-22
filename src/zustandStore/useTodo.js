import { create } from "zustand";

export const useTodo = create((set) => ({
  todos1: [{ id: 1, content: "asdasdasdasd", completed: false }],
  todos2: [{ id: 2, content: "ss", completed: false }],
  todos3: [{ id: 3, content: "aa", completed: false }],
  todos4: [{ id: 4, content: "dd", completed: false }],
  todos5: [{ id: 5, content: "cc", completed: false }],
  todos6: [{ id: 6, content: "ww", completed: false }],
  todos7: [{ id: 7, content: "rr", completed: false }],

  addTodo: (newTodo, todosKey) =>
    set((state) => {
      return { [todosKey]: [...state[todosKey], newTodo] };
    }),
}));
