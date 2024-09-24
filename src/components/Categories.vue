<script setup>
import Categorie from "./Categorie.vue";
</script>
<template>
  <div class="max-w-7xl mx-auto mb-8 md:mb-20 px-4">
      <h1 class="text-xl font-semibold text-gray-600 mb-4">Categories</h1>
    <div class="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-4">
      <Categorie v-for="(item, index) in 12" :key="index" />
    </div>
    <div class="flex justify-center items-center">
      <button type="button" class="bg-[#535C91] hover:bg-[#384176] text-white text-sm rounded-full px-5 py-2.5 transition-all">
            Show All
      </button>
    </div>
  </div>
</template>