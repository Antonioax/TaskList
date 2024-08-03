<script setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useTodoStore } from "@/store/todo";

const todoStore = useTodoStore();

const { showFinished } = storeToRefs(todoStore);
const { toggleFilter, removeAll } = todoStore;
</script>

<template>
  <div class="flex justify-between items-center w-full">
    <div class="flex justify-center items-center">
      <input
        type="checkbox"
        name="finished"
        id="finished"
        v-model="showFinished"
        @change="() => toggleFilter(showFinished)"
      />
      <label for="finished" class="text-xs font-normal ml-2"
        >Show finished tasks</label
      >
    </div>
    <button
      class="bg-red-900 text-white px-2 text-xs rounded-lg h-6 mr-4"
      @click="removeAll"
    >
      CLEAR ALL
    </button>
  </div>
</template>
