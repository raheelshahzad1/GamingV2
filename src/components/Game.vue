<script setup>
import { ref } from "vue";
const isHovered = ref(false);
</script>
<template>
  <div class="text-white">
    <div class="game">
      <div class="overflow-hidden rounded-lg relative"
        @mouseenter="isHovered = true"
        @mouseleave="isHovered = false"
      >
        <a href="#">
          <!-- Default image shown when not hovered -->
          <img
            v-if="!isHovered"
            src="../assets/images/Game.png"
            alt=""
            class="w-full rounded-lg"
          />
          <!-- Image shown on hover -->
          <img
            v-else
            src="https://gaming-cdn.com/images/products/17567/380x218/age-of-mythology-retold-premium-edition-premium-edition-pc-game-steam-cover.jpg?v=1726059600"
            alt=""
            class="w-full rounded-lg"
          />
          <span
            class="absolute left-0 top-0 inline-flex items-center rounded-md bg-red-500 px-2 py-1 text-xs font-medium text-white shadow-none"
          >
            -55%
          </span>
        </a>
      </div>

      <div>
        <p class="text-gray-900 text-sm mb-2 line-clamp-2">
          Age of Mythology: Retold Premium Edition Age of Mythology: Retold Premium EditionAge of Mythology: Retold Premium Edition Age of Mythology: Retold Premium EditionAge of Mythology: Retold Premium EditionAge of Mythology: Retold Premium EditionAge of Mythology: Retold Premium EditionAge of Mythology: Retold Premium EditionAge of Mythology: Retold Premium EditionAge of Mythology: Retold Premium Edition
        </p>
        <div class="font-bold text-gray-600">36.49€</div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>