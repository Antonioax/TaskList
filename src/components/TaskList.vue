<script setup>
import { useTodoStore } from "@/store/todo";
import { storeToRefs } from "pinia";

const todoStore = useTodoStore();
const { filteredTodo } = storeToRefs(todoStore);
const { removeTodo, toggleTodo } = todoStore;
</script>

<template>
  <div v-if="filteredTodo.length > 0" class="mt-5 flex flex-col gap-2 w-full">
    <div v-for="t in filteredTodo" class="flex justify-center items-center">
      <div
        class="flex-1 bg-emerald-900 text-white py-2 px-2 pl-4 rounded-lg shadow-lg flex justify-between items-center"
      >
        <div :class="t.isFinished && 'line-through'">{{ t.text }}</div>
        <button
          class="toggleTodo bg-emerald-950 py-1 px-4 rounded-lg shadow-lg"
          @click="() => toggleTodo(t.id)"
        >
          {{ !t.isFinished ? "Do" : "Undo" }}
        </button>
      </div>
      <button
        class="removeTodo bg-red-900 text-white h-6 px-2 text-xs rounded-r-lg"
        @click="() => removeTodo(t.id)"
      >
        REMOVE
      </button>
    </div>
  </div>

  <div v-else class="mt-20">Add new tasks...</div>
</template>
