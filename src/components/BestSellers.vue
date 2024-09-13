<!-- Main Component -->
<script setup>
import Game from "./Game.vue";
import { ChevronRightIcon } from "@heroicons/vue/24/solid";
</script>
<template>
  <div class="px-5 md:px-7  py-5 md:py-7">
    <div
      class="flex justify-start items-center mb-6 md:mb-10"
    >
      <h1
        class="text-xl sm:text-2xl md:text-3xl font-semibold text-white"
      >
        Best Sellers
      </h1>
      <ChevronRightIcon
        class="size-3 md:size-5 ml-1 mt-1 hover:text-[#9290C3] text-gray-200"
      />
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <Game v-for="items in 8" />
    </div>
  </div>
</template>
<style scoped>

</style>