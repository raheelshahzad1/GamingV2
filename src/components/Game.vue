<script setup>
import { ref } from 'vue';

// Reactive variable to manage hover state
const isHovered = ref(false);
</script>

<template>
  <div class="text-white">
    <div class="game">
      <div
        class="overflow-hidden rounded-lg relative"
        @mouseenter="isHovered = true"
        @mouseleave="isHovered = false"
      >
        <a href="#">
          <!-- Default image shown when not hovered -->
          <img
            v-if="!isHovered"
            src="../assets/images/Game.png"
            alt=""
            class="w-full rounded-lg transition hover:scale-105 duration-300 ease-in-out"
          />
          <!-- Image shown on hover -->
          <img
            v-else
            src="https://gaming-cdn.com/images/products/17567/380x218/age-of-mythology-retold-premium-edition-premium-edition-pc-game-steam-cover.jpg?v=1726059600"
            alt=""
            class="w-full rounded-lg transition hover:scale-105 duration-300 ease-in-out"
          />
          <span
            class="absolute left-0 top-0 inline-flex items-center rounded-md bg-red-500 px-2 py-1 text-xs font-medium text-white shadow-none"
          >
            -55%
          </span>
        </a>
      </div>
      <div class="flex justify-between items-center px-1">
        <div>
          <p>Age of Mythology: Retold Premium Edition</p>
        </div>
        <div class="font-bold">36.49€</div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
