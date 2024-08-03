<script setup>
const todos = [
  {
    id: 1,
    text: "Clean room",
    isFinished: false,
  },
];
</script>

<template id="app">
  <section class="mt-20 flex flex-col gap-5 justify-center items-center">
    <input
      type="text"
      class="text-center py-2 rounded-xl shadow-xl w-[80%] max-w-[350px]"
    />
    <button class="bg-emerald-100 py-1 px-4 rounded-lg shadow-lg">
      Add Task
    </button>

    <div v-for="todo in todos" class="mt-10 bg-emerald-900 text-white py-2 px-2 pl-4 rounded-lg shadow-lg flex justify-between items-center w-[80%] max-w-[350px]">
      <div>{{ todo.text }}</div>
      <button class="bg-emerald-950 py-1 px-4 rounded-lg shadow-lg">
        Done
      </button>
    </div>
  </section>
</template>
