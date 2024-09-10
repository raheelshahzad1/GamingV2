<script setup>
import { ChevronRightIcon } from "@heroicons/vue/24/solid";
const props = defineProps({
  Title: String,
});
</script>
<template>
  <a href="#">
    <div
      class="flex justify-start items-center py-3 md:py-5 px-4 md:px-8 bg-black mt-4 md:mt-10"
    >
      <h1
        class="text-2xl sm:text-3xl md:text-4xl font-mono font-semibold text-white"
      >
        {{ Title }}
      </h1>
      <ChevronRightIcon
        class="size-4 md:size-6 ml-1 mt-1 hover:text-red-700 text-gray-200"
      />
    </div>
  </a>
</template>
<style scoped></style>