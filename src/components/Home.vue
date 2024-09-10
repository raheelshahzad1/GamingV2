<script setup>
import Hero from "./Hero.vue";
import Tittle from "./Tittle.vue";
import Trending from "./Trending.vue";
</script>
<template>
  <div class="bg-color">
    <Hero />
    <Tittle Title="Trending" />
    <Trending />
  </div>
</template>
<style scoped>
.bg-color {
  background-color: black;
}
</style>