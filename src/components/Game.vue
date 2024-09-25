<script setup>
import { ref } from "vue";
import { ShoppingCartIcon, EyeIcon } from "@heroicons/vue/24/solid";
const isHovered = ref(false);
</script>
<template>
    <div class="game relative">
      <RouterLink to="/gameDetails">
        <div class="group overflow-hidden rounded-lg"
          @mouseenter="isHovered = true"
          @mouseleave="isHovered = false">
          <div class="mb-3 relative">
            <div class="gap-2 opacity-0 group-hover:opacity-100 absolute inset-0 bg-black bg-opacity-50 rounded-lg flex justify-center items-center transition-opacity duration-500 delay-75">
                <button type="button" class="p-2 rounded-full bg-white text-black hover:bg-black hover:text-white">
                  <RouterLink to="/gameDetails">
                  <EyeIcon class="size-4 md:size-5 font-bold" />
                  </RouterLink>
                </button>
                <button type="button" class="p-2 rounded-full bg-white text-black hover:bg-black hover:text-white">
                    <RouterLink to="/cart">
                    <ShoppingCartIcon class="size-4 md:size-5 font-bold" />
                    </RouterLink>
                </button>
            </div>
            <img
              v-if="!isHovered"
              src="https://gaming-cdn.com/images/products/14344/380x218/star-wars-outlaws-pc-game-ubisoft-connect-cover.jpg?v=1726484400"
              alt=""
              class="w-full rounded-lg transition-opacity duration-500 delay-150"/>
            <img
              v-else
              src="https://gaming-cdn.com/images/products/17567/380x218/age-of-mythology-retold-premium-edition-premium-edition-pc-game-steam-cover.jpg?v=1726059600"
              alt=""
              class="w-full rounded-lg transition-opacity duration-300 delay-150"/>
            <span class="absolute left-0 top-0 inline-flex items-center rounded-tl-md rounded-br-md bg-red-500 px-2 py-1 text-xs font-medium text-white shadow-none">-55%</span>
          </div>
        </div>
      </RouterLink>
      <div>
        <p class="text-gray-900 text-sm mb-2 line-clamp-2">
          Age of Mythology: Retold Premium Edition Age of Mythology: Retold
          Premium EditionAge of Mythology: Retold Premium Edition Age of
          Mythology: Retold Premium EditionAge of Mythology: Retold Premium
          EditionAge of Mythology: Retold Premium EditionAge of Mythology:
          Retold Premium EditionAge of Mythology: Retold Premium EditionAge of
          Mythology: Retold Premium EditionAge of Mythology: Retold Premium
          Edition
        </p>
        <span class="font-bold text-gray-600">36.49€</span>
      </div>
    </div>
</template>