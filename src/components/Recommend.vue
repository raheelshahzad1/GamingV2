<script setup>
import Game from "./Game.vue";
</script>
<template>
  <div class="max-w-7xl mx-auto mb-8 md:mb-20 px-4">
    <div class="mb-4">
      <h1 class="text-xl font-semibold text-gray-600">We recommend you</h1>
    </div>
    <router-link to="/gameDetails">
      <div class="relative h-[250px] sm:h-[440px] mb-6">
        <img
          src="https://gaming-cdn.com/img/products/9093/hcover/1400x500/9093.jpg?v=1715876608"
          alt=""
          class="w-full h-full object-cover rounded-lg"/>
        <div class="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
        <div class="max-w-7xl mx-auto absolute top-1/2 -translate-y-1/2 px-4 inset-x-0 z-10">
          <div>
            <h1
              class="text-white font-bold text-2xl md:text-3xl lg:text-4xl mb-2 md:mb-4 w-4/5 md:w-2/5">
              Ghost of Tsushima: Director's Cut
            </h1>
            <div class="discount flex">
              <span
                class="mr-2 px-1 md:px-2 py-1 rounded-lg bg-red-700 text-white text-sm md:text-lg">
                -24%
              </span>
              <span class="text-white text-md sm:text-lg md:text-2xl">
                45.89€
              </span>
            </div>
          </div>
        </div>
      </div>
    </router-link>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <Game v-for="(item, index) in 8" :key="index" />
    </div>
  </div>
</template>