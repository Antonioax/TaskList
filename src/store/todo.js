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
    showFinished: true,
  }),
  getters: {
    filteredTodo() {
      if (!this.showFinished) {
        return this.todo.filter((t) => !t.isFinished);
      }
      return this.todo;
    },
  },
  actions: {
    addTodo(text) {
      if (!text) return;
      this.todo.unshift({
        id: Math.floor(Math.random() * 10000000),
        text: text,
        isFinished: false,
      });
    },
    removeTodo(id) {
      this.todo = this.todo.filter((t) => t.id !== id);
    },
    toggleTodo(id) {
      const index = this.todo.findIndex((todo) => todo.id === id);
      this.todo[index].isFinished = !this.todo[index].isFinished;
    },
    toggleFilter(newValue) {
      this.showFinished = newValue;
    },
  },
});
