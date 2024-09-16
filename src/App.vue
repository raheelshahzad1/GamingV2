<script setup>
import Home from "./components/Home.vue";
import Navbar from "./components/Navbar.vue";
</script>
<template>
  <div>
    <Navbar />
    <router-view></router-view>
  </div>
</template>
<style scoped></style>