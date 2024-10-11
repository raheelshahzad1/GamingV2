<script setup>
import Category from "./Category.vue";
</script>
<template>
  <div class="max-w-7xl mx-auto mb-8 md:mb-20 px-4">
      <h1 class="text-xl font-semibold text-gray-600 mb-4">Categories</h1>

    <div class="grid gap-4 sm:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-4 md:mb-7">
      <Category v-for="(item, index) in 12" :key="index" />
    </div>

    <div class="flex justify-center items-center">
      <button type="button" class="bg-[#535C91] hover:bg-[#384176] text-white text-sm md:text-lg rounded-full px-5 py-2.5 transition-all">
            Show All
      </button>
    </div>
    
  </div>
</template>