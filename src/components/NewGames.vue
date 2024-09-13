<!-- Main Component -->
<script setup>
import Game from "./Game.vue";
import { ChevronRightIcon } from "@heroicons/vue/24/solid";
</script>
<template>
  <div class="max-w-7xl mx-auto mb-8 md:mb-20 px-4 xl:px-0">
    <div class="flex justify-start items-center mb-4 gap-2">
      <h1 class="text-xl font-semibold text-gray-600">
        New Games
      </h1>
      <ChevronRightIcon class="size-4 mt-[5px] text-gray-600" />
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <Game v-for="items in 8" />
    </div>
  </div>
</template>
<style scoped></style>