import { defineStore } from "pinia";

export const useTodoStore = defineStore("todo", {
  state: () => ({
    todo: [
      {
        id: 1,
        text: "Clean room",
        isFinished: false,
      },
    ],
  }),
  actions: {
    addTodo(text) {
      if (!text) return;
      this.todo.unshift({
        id: Math.floor(Math.random() * 10000000),
        text: text,
        isFinished: false,
      });
    },
  },
});
