<script setup>
import Deal from "./Deal.vue";
</script>
<template>
  <div class="max-w-7xl mx-auto mb-8 md:mb-20 px-4">
      <h1 class="text-xl font-semibold text-gray-600 mb-4">
        Weekly deals
      </h1>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Deal v-for="(item, index) in 3" :key="index" />
    </div>
    
  </div>
</template>