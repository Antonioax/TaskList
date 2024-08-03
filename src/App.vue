<script setup>
import AddTask from "@/components/AddTask.vue";
import FilterTask from "@/components/FilterTask.vue";
import TaskList from "@/components/TaskList.vue";

import { onMounted } from "vue";
import { useTodoStore } from "./store/todo";

const todoStore = useTodoStore();
const { initializeStore } = todoStore;

onMounted(() => {
  initializeStore();
});
</script>

<template id="app">
  <div class="flex justify-center">
    <section
      class="mt-20 flex flex-col gap-5 justify-center items-center w-[80%] max-w-[350px]"
    >
      <div class="text-3xl font-thin mb-10">
        <span class="bg-emerald-500 rounded-lg px-2 py-1 mr-1 font-thin"
          >Task</span
        >List
      </div>

      <AddTask />
      <FilterTask />
      <TaskList />
    </section>
  </div>
</template>
