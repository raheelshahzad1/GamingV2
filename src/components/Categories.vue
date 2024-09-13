<script setup>
import Game from "./Game.vue";
import Categorie from "./Categorie.vue";
import { ChevronDownIcon } from "@heroicons/vue/24/solid";
</script>
<template>
  <div class="max-w-7xl mx-auto mb-8 md:mb-20 px-4">
    <div class="mb-4">
      <h1 class="text-xl font-semibold text-gray-600">Categories</h1>
    </div>
    <div
      class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-8"
    >
      <Categorie v-for="(item, index) in 12" :key="index" />
    </div>
    <div class="flex justify-center items-center">
      <button
        type="button"
        class="px-3 py-2 border-2 border-[#172e80] bg-[#535C91] text-stone-200 hover:text-white rounded-lg font-semibold"
      >
        Show All
      </button>
    </div>
  </div>
</template>
<style scoped></style>
