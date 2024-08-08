<script setup>
import HomeView from "./views/HomeView.vue";

import { onMounted } from "vue";
import { useTodoStore } from "./store/todo";

const todoStore = useTodoStore();
const { initializeStore } = todoStore;

onMounted(() => {
  initializeStore();
});
</script>

<template id="app">
  <HomeView />
</template>
