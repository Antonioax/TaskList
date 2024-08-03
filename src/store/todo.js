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
});
