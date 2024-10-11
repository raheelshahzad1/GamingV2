<script setup>
import Game from "./Game.vue";
</script>
<template>
  <div class="max-w-7xl mx-auto mb-8 md:mb-20 px-4">
      <h1 class="text-xl font-semibold text-gray-600 mb-4">
        Bestsellers
      </h1>

    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
      <Game v-for="(item, index) in 8" :key="index" />
    </div>
  </div>
</template>