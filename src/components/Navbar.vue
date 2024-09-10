<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import {
  ShoppingCartIcon,
  UserCircleIcon,
  ComputerDesktopIcon,
  MagnifyingGlassIcon,
  XMarkIcon, // Import the close (X) icon
} from "@heroicons/vue/24/solid";

// State to handle the visibility of the search field
const showSearch = ref(false);

// State to track if the navbar should have a blur-grey background
const isScrolled = ref(false);

// State to track the visibility of the top-menu
const showTopMenu = ref(true);

// Function to toggle the search field
const toggleSearch = () => {
  showSearch.value = !showSearch.value;
};

// Function to hide the search field
const hideSearch = () => {
  showSearch.value = false;
};

// Function to handle scroll event
const handleScroll = () => {
  // Check if the page is scrolled down by a certain amount
  isScrolled.value = window.scrollY > 5; // Adjust the scroll value as needed

  // Hide the top menu when scrolling
  showTopMenu.value = !isScrolled.value;
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
  <header
    :class="[
      'text-white flex justify-between bg-black lg:bg-transparent items-center py-2 px-3 md:px-5 sticky top-0 transition-colors duration-300',
      isScrolled ? 'lg:bg-gray-950/90 backdrop-blur' : '',
    ]"
  >
    <!-- Left Menu -->
    <div class="menu-left">
      <img src="../assets/images/LOGO.png" alt="logo" class="w-10" />
    </div>

    <!-- Mobile Heder -->
    <div class="block lg:hidden relative grow">
      <div>
        <input
          type="search"
          placeholder="Search..."
          class="bg-transparent outline-none placeholder-white text-white w-full"
        />
        <!-- <XMarkIcon
          class="size-5 cursor-pointer absolute -right-6 hover:text-red-600"
          @click="hideSearch"
        /> -->
      </div>
      <!-- <div
        class="search mx-2 py-2 px-3 bg-red-600 rounded-full hover:text-white text-gray-300 cursor-pointer"
        @click="toggleSearch"
      >
        <a class="flex items-center">
          <MagnifyingGlassIcon class="size-5" />
        </a>
      </div> -->
    </div>
     <!-- Mobile Heder -->
    <div class="hidden lg:inline">
      <!-- Top Menu (conditionally rendered) -->
      <ul
        v-show="showTopMenu"
        class="top-menu hidden lg:flex justify-center items-center h-10 transition-opacity duration-300 mb-1"
      >
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

      <!-- Bottom Menu -->
      <ul
        :class="[
          'bottom-menu backdrop-blur flex items-center bg-gray-400 rounded-full p-2 relative transition-colors duration-300',
          isScrolled ? 'bg-transparent' : '',
        ]"
      >
        <!-- Search field -->
        <div
          v-if="showSearch"
          class="absolute left-0 top-0 bg-red-600 text-white p-5 flex justify-between rounded-full items-center w-full"
        >
          <input
            type="search"
            placeholder="Search..."
            class="bg-transparent outline-none placeholder-white text-white w-full"
          />
          <XMarkIcon
            class="size-5 cursor-pointer absolute -right-8 hover:text-red-600"
            @click="hideSearch"
          />
        </div>
        <li
          class="hover:bg-gray-100/40 bg-transparent rounded-full mx-2 p-3 text-gray-100"
        >
          <a href="#" class="flex items-center">
            <ComputerDesktopIcon class="size-5 mx-1" />PC
          </a>
        </li>
        <li
          class="hover:bg-gray-100/40 bg-transparent rounded-full mx-2 p-3 text-gray-100"
        >
          <a href="#" class="flex items-center">
            <ComputerDesktopIcon class="size-5 mx-1" />PlayStation
          </a>
        </li>
        <li
          class="hover:bg-gray-100/40 bg-transparent rounded-full mx-2 p-3 text-gray-100"
        >
          <a href="#" class="flex items-center">
            <ComputerDesktopIcon class="size-5 mx-1" />Xbox
          </a>
        </li>
        <li
          class="hover:bg-gray-100/40 bg-transparent rounded-full mx-2 p-3 text-gray-100"
        >
          <a href="#" class="flex items-center">
            <ComputerDesktopIcon class="size-5 mx-1" />Nintendo
          </a>
        </li>
        <li
          class="search mx-2 p-3 bg-red-600 rounded-full hover:text-white text-gray-300 cursor-pointer"
          @click="toggleSearch"
        >
          <a class="flex items-center">
            <MagnifyingGlassIcon class="size-5" />
          </a>
        </li>
      </ul>
    </div>

    <!-- Right Menu -->
    <div id="menu-right" class="flex">
      <a href="#" class="mx-1">
        <ShoppingCartIcon class="size-7 hover:text-red-600 text-gray-300" />
      </a>
      <a href="#" class="mx-1">
        <UserCircleIcon class="size-7 hover:text-red-600 text-gray-300" />
      </a>
    </div>
  </header>
  <!-- Mobile Heder -->
  <ul
    class="lg:hidden sticky top-14 bg-gray-700/60 backdrop-blur flex items-center justify-center gap-10 py-2"
  >
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
  <!-- Mobile Heder -->
</template>

<style scoped>
/* Style the clear (x) button */
input[type="search"]::-webkit-search-cancel-button {
  -webkit-appearance: none;
  height: 18px;
  width: 18px;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='white' d='M18.3 5.71a1 1 0 00-1.42 0L12 10.59 7.11 5.7a1 1 0 10-1.42 1.42L10.59 12l-4.9 4.89a1 1 0 101.42 1.42L12 13.41l4.89 4.9a1 1 0 001.42-1.42L13.41 12l4.9-4.89a1 1 0 000-1.4z'/%3E%3C/svg%3E")
    no-repeat center;
}
</style>
