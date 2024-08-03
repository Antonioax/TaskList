<script setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useTodoStore } from "@/store/todo";

const todoStore = useTodoStore();

const { showFinished } = storeToRefs(todoStore);
const { toggleFilter } = todoStore;

</script>

<template>
  <div class="flex justify-start items-center w-full ml-4 mt-4">
    <input
      type="checkbox"
      name="finished"
      id="finished"
      v-model="showFinished"
      @change="() => toggleFilter(showFinished)"
    />
    <label for="finished" class="text-xs font-normal ml-2">Show finished tasks</label>
  </div>
</template>
