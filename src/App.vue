<script setup>
import { ref } from "vue";
import { useTodoStore } from "./store/todo";
import { storeToRefs } from "pinia";

const newTodo = ref("");

const todoStore = useTodoStore();
const { filteredTodo, showFinished } = storeToRefs(todoStore);
const { addTodo, toggleTodo, toggleFilter } = todoStore;

const addNewTodo = () => {
  addTodo(newTodo.value);
  newTodo.value = "";
};
</script>

<template id="app">
  <div class="flex justify-center">
    <section
      class="mt-20 flex flex-col gap-5 justify-center items-center w-[80%] max-w-[350px]"
    >
      <div class="text-4xl font-thin mb-10">
        <span class="bg-emerald-500 rounded-lg px-2 mr-1">Task</span>List
      </div>
      <input
        type="text"
        class="text-center py-2 rounded-xl shadow-xl w-full"
        v-model="newTodo"
      />
      <button
        class="bg-emerald-100 py-1 px-4 rounded-lg shadow-lg"
        @click="addNewTodo"
      >
        Add Task
      </button>

      <div class="flex justify-start items-center w-full ml-4 mt-4">
        <input
          type="checkbox"
          name="unfinished"
          id="unfinished"
          v-model="showFinished"
          @change="() => toggleFilter(showFinished)"
        />
        <label for="unfinished" class="text-xs ml-4">SHOW FINISHED TASKS</label>
      </div>

      <div class="mt-10 flex flex-col gap-2 w-full">
        <div
          v-for="t in filteredTodo"
          class="bg-emerald-900 text-white py-2 px-2 pl-4 rounded-lg shadow-lg flex justify-between items-center"
        >
          <div :class="t.isFinished && 'line-through'">{{ t.text }}</div>
          <button
            class="bg-emerald-950 py-1 px-4 rounded-lg shadow-lg"
            @click="() => toggleTodo(t.id)"
          >
            {{ !t.isFinished ? "Do" : "Undo" }}
          </button>
        </div>
      </div>
    </section>
  </div>
</template>
