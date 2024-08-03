<script setup>
import { useTodoStore } from "@/store/todo";
import { storeToRefs } from "pinia";

const todoStore = useTodoStore();
const { filteredTodo } = storeToRefs(todoStore);
const { addTodo, toggleTodo } = todoStore;
</script>

<template>
  <div class="mt-5 flex flex-col gap-2 w-full">
    <div
      v-for="t in filteredTodo"
      class="flex justify-center items-center"
    >
      <div class="flex-1 bg-emerald-900 text-white py-2 px-2 pl-4 rounded-lg shadow-lg flex justify-between items-center">
        <div :class="t.isFinished && 'line-through'">{{ t.text }}</div>
        <button
          class="bg-emerald-950 py-1 px-4 rounded-lg shadow-lg"
          @click="() => toggleTodo(t.id)"
        >
          {{ !t.isFinished ? "Do" : "Undo" }}
        </button>
      </div>
      <button class="bg-red-900 text-white h-6 px-2 text-xs rounded-r-lg">REMOVE</button>
    </div>
  </div>
</template>
