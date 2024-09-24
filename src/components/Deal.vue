<script setup>
import { ref } from "vue";
import { ShoppingCartIcon, EyeIcon } from "@heroicons/vue/24/solid";
const isHovered = ref(false);
</script>
<template>
    <div class="game relative">
      <router-link to="#">
        <div class="group overflow-hidden rounded-tr-lg rounded-tl-lg"
          @mouseenter="isHovered = true"
          @mouseleave="isHovered = false">
          <div class="relative">
            <div class="gap-2 opacity-0 group-hover:opacity-100 absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center transition-opacity duration-500 delay-75">
                <button type="button" class="p-2 rounded-full bg-white text-black hover:bg-black hover:text-white">
                  <EyeIcon class="size-4 md:size-5 font-bold" />
                </button>
                <button type="button" class="p-2 rounded-full bg-white text-black hover:bg-black hover:text-white">
                  <ShoppingCartIcon class="size-4 md:size-5 font-bold" />
                </button>
            </div>
            <img
              v-if="!isHovered"
              src="https://gaming-cdn.com/images/products/14344/380x218/star-wars-outlaws-pc-game-ubisoft-connect-cover.jpg?v=1726484400"
              alt=""
              class="w-full transition-opacity duration-500 delay-150"
            />
            <img
              v-else
              src="https://gaming-cdn.com/images/products/17567/380x218/age-of-mythology-retold-premium-edition-premium-edition-pc-game-steam-cover.jpg?v=1726059600"
              alt=""
              class="w-full transition-opacity duration-300 delay-150"
            />
            <span class="absolute left-0 top-0 inline-flex items-center rounded-br-md bg-red-500 px-2 py-1 text-xs font-medium text-white shadow-none">-55%</span>
          </div>
          <div class="flex justify-center items-center bg-black text-white mb-3 rounded-br-lg rounded-bl-lg">
            <h2 class="font-semibold text-red-500 py-3">2 remaining days</h2>
          </div>
        </div>
      </router-link>
      <div class="grid grid-cols-3 gap-2">
        <h3 class="text-gray-800 font-bold line-clamp-2 col-span-2">
          Warstride Challenges
        </h3>
        <span class="font-bold text-gray-700 col-span-1 text-end">36.49€</span>
      </div>
    </div>
</template>