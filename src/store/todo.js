import { defineStore } from "pinia";

export const useTodoStore = defineStore("todo", {
  state: () => ({
    todo: [],
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
    initializeStore() {
      const storedTodo = localStorage.getItem("todo");
      const storedFilter = localStorage.getItem("showFinished");

      if (storedTodo) this.todo = JSON.parse(storedTodo);
      if (storedFilter) this.showFinished = JSON.parse(storedFilter);
    },
    addTodo(text) {
      if (!text) return;
      this.todo.unshift({
        id: Math.floor(Math.random() * 10000000),
        text: text,
        isFinished: false,
      });
      this.updateStorage();
    },
    removeTodo(id) {
      this.todo = this.todo.filter((t) => t.id !== id);
      this.updateStorage();
    },
    toggleTodo(id) {
      const index = this.todo.findIndex((todo) => todo.id === id);
      this.todo[index].isFinished = !this.todo[index].isFinished;
      this.updateStorage();
    },
    toggleFilter(newValue) {
      this.showFinished = newValue;
      this.updateStorage();
    },
    updateStorage() {
      localStorage.setItem("todo", JSON.stringify(this.todo));
      localStorage.setItem("showFinished", JSON.stringify(this.showFinished));
    },
  },
});
