<script setup>
import Deal from "./Deal.vue";
import { ChevronRightIcon } from "@heroicons/vue/24/solid";
</script>
<template>
  <div class="max-w-7xl mx-auto mb-8 md:mb-20 px-4">
    <div class="mb-4">
      <h1 class="text-xl font-semibold text-gray-600">
        Weekly deals
      </h1>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Deal v-for="(item, index) in 3" :key="index" />
    </div>
  </div>
</template>
<style scoped></style>
