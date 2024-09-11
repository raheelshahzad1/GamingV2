<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import {
  ShoppingCartIcon,
  UserCircleIcon,
  ComputerDesktopIcon,
  MagnifyingGlassIcon,
  ArrowLeftIcon,
} from "@heroicons/vue/24/solid";
const showSearch = ref(false);
const showMobileSearch = ref(false);
const toggleSearch = () => {
  showSearch.value = !showSearch.value;
};
const toggleMobileSearch = () => {
  showMobileSearch.value = !showMobileSearch.value;
};
const hideSearch = () => {
  showSearch.value = false;
};
const hideMobileSearch = () => {
  showMobileSearch.value = false;
};
const isScrolled = ref(false);
// Function to handle scroll event
const handleScroll = () => {
  // Check if the page is scrolled down by a certain amount
  isScrolled.value = window.scrollY > 5;
};
// Add and remove scroll event listener when the component is mounted/unmounted
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
<template>
  <!-- Top Menu -->
  <ul class="top-menu hidden bg-black lg:flex justify-center items-center py-2 transition-opacity duration-300">
        <li class="mx-2 hover:text-red-600 text-gray-300">
          <a href="#" class="text-sm mr-2">Bestsellers</a>
        </li>
        <li class="mx-2 hover:text-red-600 text-gray-300">
          <a href="#" class="text-sm mr-2">New Games</a>
        </li>
        <li class="mx-2 hover:text-red-600 text-gray-300">
          <a href="#" class="text-sm">Save With "GAMING0E70"</a>
        </li>
  </ul>
  <header class="relative text-white flex justify-between bg-black lg:bg-gray-400 items-center py-2 px-3 md:px-5 transition-colors duration-300">
    <!-- Left Menu -->
    <div class="menu-left">
      <img src="../assets/images/LOGO.png" alt="logo" class="w-10" />
    </div>
     <!-- Center Menu -->
    <div class="hidden lg:inline">
      <ul class="bottom-menu overflow-hidden backdrop-blur flex items-center rounded-full relative transition-colors duration-300">
        <li
          class="hover:bg-gray-100/40 bg-transparent rounded-full mx-2 p-3 text-gray-100">
          <a href="#" class="flex items-center">
            <ComputerDesktopIcon class="size-5 mx-1" />PC
          </a>
        </li>
        <li class="hover:bg-gray-100/40 bg-transparent rounded-full mx-2 p-3 text-gray-100">
          <a href="#" class="flex items-center">
            <ComputerDesktopIcon class="size-5 mx-1" />PlayStation
          </a>
        </li>
        <li class="hover:bg-gray-100/40 bg-transparent rounded-full mx-2 p-3 text-gray-100">
          <a href="#" class="flex items-center">
            <ComputerDesktopIcon class="size-5 mx-1" />Xbox
          </a>
        </li>
        <li class="hover:bg-gray-100/40 bg-transparent rounded-full mx-2 p-3 text-gray-100">
          <a href="#" class="flex items-center">
            <ComputerDesktopIcon class="size-5 mx-1" />Nintendo
          </a>
        </li>
        <li class="search mx-2 p-3 bg-red-600 rounded-full hover:text-white text-gray-300 cursor-pointer">
          <button class="flex items-center" @click="toggleSearch">
            <MagnifyingGlassIcon class="size-5" />
          </button>
          <transition
            enter-active-class="transition ease-out duration-200"
            enter-from-class="transform opacity-0 translate-x-full scale-x-100"
            enter-to-class="transform opacity-100 translate-x-0 scale-x-100"
            leave-active-class="transition ease-in duration-100"
            leave-from-class="transform opacity-100 translate-x-0 scale-x-100"
            leave-to-class="transform opacity-0 translate-x-full scale-x-95">
            <div
              v-if="showSearch"
              class="absolute left-0 bottom-0 top-0 text-white flex justify-between items-center w-full">
              <input
                type="search"
                placeholder="Search..."
                class="bg-red-600 py-4 pl-10 pr-3 outline-none rounded-full placeholder-white text-white w-full"/>
              <button
                class="size-5 cursor-pointer absolute left-3"
                @click="hideSearch">
                <ArrowLeftIcon />
              </button>
            </div>
          </transition>
        </li>
      </ul>
    </div>
    <!-- Right Menu -->
    <div id="menu-right" class="flex">
      <button type="button" class="mx-1 lg:hidden inline" @click="toggleMobileSearch">
        <MagnifyingGlassIcon class="size-6 hover:text-red-600 text-gray-300" />
      </button>
      <transition
          enter-active-class="transition ease-out duration-200"
          enter-from-class="transform opacity-0 -translate-y-full scale-y-100"
          enter-to-class="transform opacity-100 translate-y-0 scale-y-100"
          leave-active-class="transition ease-in duration-100"
          leave-from-class="transform opacity-100 translate-y-0 scale-y-100"
          leave-to-class="transform opacity-0 -translate-y-full scale-y-95">
        <div v-if="showMobileSearch"
              class="w-full absolute inset-0 text-white flex justify-between items-center">
              <input
                type="search"
                placeholder="Search..."
                class="bg-red-600 py-4 pl-10 pr-3 outline-none placeholder-white text-white w-full"/>
              <button
                class="size-5 cursor-pointer absolute left-3"
                @click="hideMobileSearch">
                <ArrowLeftIcon />
              </button>
          </div>
    </transition>
      <button type="button" class="mx-1">
        <ShoppingCartIcon class="size-6 hover:text-red-600 text-gray-300" />
      </button>
      <button type="button" class="mx-1">
        <UserCircleIcon class="size-6 hover:text-red-600 text-gray-300" />
      </button>
    </div>
  </header>
  <!-- Mobile Heder -->
  <ul class="lg:hidden inset-x-0 z-50 bg-gray-700/60 backdrop-blur flex items-center justify-evenly py-2">
    <li class="hover:text-white text-gray-200">
      <a href="#" class="flex items-center text-sm sm:text-md md:text-lg">
        <ComputerDesktopIcon class="size-4 sm:size-5 mr-1" />PC
      </a>
    </li>
    <li class="hover:text-white text-gray-200">
      <a href="#" class="flex items-center text-sm sm:text-md md:text-lg">
        <ComputerDesktopIcon class="size-4 sm:size-5 mr-1" />PlayStation
      </a>
    </li>
    <li class="hover:text-white text-gray-200">
      <a href="#" class="flex items-center text-sm sm:text-md md:text-lg">
        <ComputerDesktopIcon class="size-4 sm:size-5 mr-1" />Xbox
      </a>
    </li>
    <li class="hover:text-white text-gray-200">
      <a href="#" class="flex items-center text-sm sm:text-md md:text-lg">
        <ComputerDesktopIcon class="size-4 sm:size-5 mr-1" />Nintendo
      </a>
    </li>
  </ul>
</template>
<style scoped>
input[type="search"]::-webkit-search-cancel-button {
  -webkit-appearance: none;
  height: 18px;
  width: 18px;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='white' d='M18.3 5.71a1 1 0 00-1.42 0L12 10.59 7.11 5.7a1 1 0 10-1.42 1.42L10.59 12l-4.9 4.89a1 1 0 101.42 1.42L12 13.41l4.89 4.9a1 1 0 001.42-1.42L13.41 12l4.9-4.89a1 1 0 000-1.4z'/%3E%3C/svg%3E")
    no-repeat center;
}
</style>