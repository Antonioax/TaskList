<script setup>
import { ref } from "vue";
import { useTodoStore } from "./store/todo";
import { storeToRefs } from "pinia";

const newTodo = ref("");

const todoStore = useTodoStore();
const { todo } = storeToRefs(todoStore);
const { addTodo, toggleTodo } = todoStore;

const addNewTodo = () => {
  addTodo(newTodo.value);
  newTodo.value = "";
}
</script>

<template id="app">
  <section class="mt-20 flex flex-col gap-5 justify-center items-center">
    <input
      type="text"
      class="text-center py-2 rounded-xl shadow-xl w-[80%] max-w-[350px]"
      v-model="newTodo"
    />
    <button
      class="bg-emerald-100 py-1 px-4 rounded-lg shadow-lg"
      @click="addNewTodo"
    >
      Add Task
    </button>

    <div class="mt-10 flex flex-col gap-2 w-[80%] max-w-[350px]">
      <div
        v-for="t in todo"
        class="bg-emerald-900 text-white py-2 px-2 pl-4 rounded-lg shadow-lg flex justify-between items-center"
      >
        <div :class="t.isFinished && 'line-through'">{{ t.text }}</div>
        <button class="bg-emerald-950 py-1 px-4 rounded-lg shadow-lg" @click="() => toggleTodo(t.id)">
          {{ !t.isFinished ? "Do" : "Undo" }}
        </button>
      </div>
    </div>
  </section>
</template>
