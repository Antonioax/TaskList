<script setup>
import { ref } from "vue";
import { useTodoStore } from "@/store/todo";

const todoStore = useTodoStore();

const { addTodo } = todoStore;
const newTodo = ref("");

const addNewTodo = () => {
  addTodo(newTodo.value);
  newTodo.value = "";
};
</script>

<template>
  <input
    type="text"
    class="text-center py-2 rounded-xl shadow-xl w-full"
    v-model="newTodo"
    name="newTodo"
    id="newTodo"
  />
  <button
    class="bg-emerald-100 py-1 px-2 rounded-lg shadow-lg"
    @click="addNewTodo"
  >
    Add Task
  </button>
</template>
