<script setup>
import Navbar from "./Navbar.vue";
</script>
<template>
  <div
    class="bg-[url('https://gaming-cdn.com/img/products/10140/hcover/1400x500/10140.jpg?v=1725274116')] bg-cover bg-center h-full w-full mw"
  >
    <Navbar />
    <a href="#">
      <div
        class="flex justify-start w-1/2 items-center px-3 sm:px-6 md:px-8 lg:px-10 py-16 md:py-20 lg:py-32 h-4/5"
      >
        <div>
          <h1
            class="text-white font-bold text-xl md:text-3xl lg:text-4xl mb-2 md:mb-4"
          >
            Warhammer 40,000: Space Marine 2
          </h1>
          <div class="discount flex">
            <div
              class="mr-2 px-1 md:px-2 py-1 rounded-lg bg-red-700 text-white text-sm md:text-lg"
            >
              -24%
            </div>
            <div class="text-white text-md sm:text-lg md:text-2xl">45.89€</div>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>
<style scoped>
/* .bg-wid{
  min-height: 520px;
} */
</style>