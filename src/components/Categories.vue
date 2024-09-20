<script setup>
import Categorie from "./Categorie.vue";
</script>
<template>
  <div class="max-w-7xl mx-auto mb-8 md:mb-20 px-4">
    <div class="mb-4">
      <h1 class="text-xl font-semibold text-gray-600">Categories</h1>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-5">
      <Categorie v-for="(item, index) in 12" :key="index" />
    </div>
    <div class="flex justify-center items-center">
      <button type="button" class="bg-[#535C91] hover:bg-[#384176] text-white text-sm rounded-full px-5 py-2.5 ml-4 transition-all">
            Show All
      </button>
    </div>
  </div>
</template>