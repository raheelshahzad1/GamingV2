<script setup>
import { ref } from "vue";
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
</script>
<template>
  <ul class="top-menu hidden bg-[#050c25] lg:flex justify-center items-center gap-2 py-2">
    <li class="mx-2 hover:text-[#9290C3] text-gray-200">
      <RouterLink to="/shop" class="text-sm">Bestsellers</RouterLink>
    </li>

    <li class="mx-2 hover:text-[#9290C3] text-gray-200">
      <RouterLink to="/shop" class="text-sm">New Games</RouterLink>
    </li>

    <li class="mx-2 hover:text-[#9290C3] text-gray-200">
      <RouterLink to="/support" class="text-sm">Support 24/7</RouterLink>
    </li>
  </ul>
  <header
    class="shadow-md sticky top-0 z-20 text-white flex justify-between bg-[#050c25] lg:bg-[#535C91] items-center lg:p-3 py-4 px-2 transition-colors duration-300">
    <div class="menu-left">
      <RouterLink to="/">
        <img src="https://www.instant-gaming.com/themes/igv2/images/logos/logo-horizontal.svg" alt="logo"
          class="h-7 md:h-9" />
      </RouterLink>
    </div>

    <div class="hidden lg:inline">
      <ul class="bottom-menu overflow-hidden backdrop-blur flex gap-3 items-center rounded-full relative">
        <li class="hover:bg-[#9290C3] bg-transparent rounded-full p-3 text-gray-100">
          <RouterLink to="/shop" class="flex gap-1 items-center">
            <ComputerDesktopIcon class="size-5" />PC
          </RouterLink>
        </li>

        <li class="hover:bg-[#9290C3] bg-transparent rounded-full p-3 text-gray-100">
          <RouterLink to="/shop" class="flex gap-1 items-center">
            <ComputerDesktopIcon class="size-5" />PlayStation
          </RouterLink>
        </li>

        <li class="hover:bg-[#9290C3] bg-transparent rounded-full p-3 text-gray-100">
          <RouterLink to="/shop" class="flex gap-1 items-center">
            <ComputerDesktopIcon class="size-5" />Xbox
          </RouterLink>
        </li>

        <li class="hover:bg-[#9290C3] bg-transparent rounded-full p-3 text-gray-100">
          <RouterLink to="/shop" class="flex gap-1 items-center">
            <ComputerDesktopIcon class="size-5" />Nintendo
          </RouterLink>
        </li>

        <li>
          <button
            class="flex items-center search p-3 bg-[#070F2B] rounded-full hover:text-white text-gray-300 cursor-pointer"
            @click="toggleSearch">
            <MagnifyingGlassIcon class="size-5" />
          </button>
          <transition enter-active-class="transition ease-out duration-200"
            enter-from-class="transform opacity-0 translate-x-full scale-x-100"
            enter-to-class="transform opacity-100 translate-x-0 scale-x-100"
            leave-active-class="transition ease-in duration-100"
            leave-from-class="transform opacity-100 translate-x-0 scale-x-100"
            leave-to-class="transform opacity-0 translate-x-full scale-x-95">
            <div v-if="showSearch"
              class="absolute left-0 bottom-0 top-0 text-white flex justify-between items-center w-full">
              <input type="search" placeholder="Search..."
                class="bg-[#070F2B] py-4 pl-10 pr-3 outline-none rounded-full placeholder-white text-white w-full" />
              <button class="size-5 cursor-pointer absolute left-3" @click="hideSearch">
                <ArrowLeftIcon />
              </button>
            </div>
          </transition>
        </li>
      </ul>
    </div>

    <div id="menu-right" class="flex gap-1">
      <button type="button" class="lg:hidden inline" @click="toggleMobileSearch">
        <MagnifyingGlassIcon class="size-6 hover:text-[#070F2B] text-gray-300" />
      </button>

      <transition enter-active-class="transition ease-out duration-200"
        enter-from-class="transform opacity-0 -translate-y-full scale-y-100"
        enter-to-class="transform opacity-100 translate-y-0 scale-y-100"
        leave-active-class="transition ease-in duration-100"
        leave-from-class="transform opacity-100 translate-y-0 scale-y-100"
        leave-to-class="transform opacity-0 -translate-y-full scale-y-95">
        <div v-if="showMobileSearch" class="w-full absolute inset-0 text-white flex justify-between items-center">
          <input type="search" placeholder="Search..."
            class="bg-[#070F2B] py-4 pl-10 pr-3 outline-none placeholder-white text-white w-full" />
          <button class="size-5 cursor-pointer absolute left-3" @click="hideMobileSearch">
            <ArrowLeftIcon />
          </button>
        </div>
      </transition>

      <button type="button">
        <RouterLink to="/cart">
          <ShoppingCartIcon class="size-6 md:size-7 hover:text-[#070F2B] text-gray-300" />
        </RouterLink>
      </button>

      <button type="button">
        <RouterLink to="/login">
          <UserCircleIcon class="size-6 md:size-7 hover:text-[#070F2B] text-gray-300" />
        </RouterLink>
      </button>
    </div>
  </header>

  <ul class="lg:hidden bg-[#535C91] flex items-center justify-evenly py-2">
    <li class="hover:text-white text-gray-200">
      <RouterLink to="/shop" class="flex items-center gap-1 text-sm sm:text-md md:text-lg">
        <ComputerDesktopIcon class="size-4 sm:size-5" />
        <span>
          PC
        </span>
      </RouterLink>
    </li>

    <li class="hover:text-white text-gray-200">
      <RouterLink to="/shop" class="flex items-center gap-1 text-sm sm:text-md md:text-lg">
        <ComputerDesktopIcon class="size-4 sm:size-5" />
        <span>
          PlayStation
        </span>
      </RouterLink>
    </li>

    <li class="hover:text-white text-gray-200">
      <RouterLink to="/shop" class="flex items-center gap-1 text-sm sm:text-md md:text-lg">
        <ComputerDesktopIcon class="size-4 sm:size-5" />
        <span>
          Xbox
        </span>
      </RouterLink>
    </li>

    <li class="hover:text-white text-gray-200">
      <RouterLink to="/shop" class="flex items-center gap-1 text-sm sm:text-md md:text-lg">
        <ComputerDesktopIcon class="size-4 sm:size-5" />
        <span>
          Nintendo
        </span>
      </RouterLink>
    </li>
  </ul>
</template>
<style scoped>
input[type="search"]::-webkit-search-cancel-button {
  -webkit-appearance: none;
  height: 18px;
  width: 18px;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='white' d='M18.3 5.71a1 1 0 00-1.42 0L12 10.59 7.11 5.7a1 1 0 10-1.42 1.42L10.59 12l-4.9 4.89a1 1 0 101.42 1.42L12 13.41l4.89 4.9a1 1 0 001.42-1.42L13.41 12l4.9-4.89a1 1 0 000-1.4z'/%3E%3C/svg%3E") no-repeat center;
}
</style>