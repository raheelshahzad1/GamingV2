<script setup>
import { ref, onMounted } from "vue";
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";
import {
  CheckIcon,
  FaceSmileIcon,
  FireIcon,
  TagIcon,
  HeartIcon,
  ShoppingCartIcon,
} from "@heroicons/vue/24/solid";
const isLargeScreen = ref(false);

onMounted(() => {
  // Update screen size status
  const updateScreenSize = () => {
    isLargeScreen.value = window.innerWidth >= 1024;
  };

  // Listen for window resize
  window.addEventListener("resize", updateScreenSize);

  // Set the initial screen size
  updateScreenSize();
});
</script>

<template>
  <Navbar />
    <div class="relative bg-[#081134]">
      <img
        v-if="isLargeScreen"
        src="https://gaming-cdn.com/img/products/10140/hcover/1400x500/10140.jpg?v=1725274116"
        alt=""
        class="firstImg w-full"/>
      <img
        v-else
        src="https://gaming-cdn.com/images/products/10140/616x353/warhammer-40-000-space-marine-2-pc-game-steam-cover.jpg?v=1725274116"
        alt=""
        class="firstImg w-full"/>
      <div class="px-0 sm:px-9 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:absolute -bottom-1/3">
        <div class="hidden lg:inline secondImg">
          <img
            src="https://gaming-cdn.com/images/products/10140/616x353/warhammer-40-000-space-marine-2-pc-game-steam-cover.jpg?v=1725274116"
            alt=""
            class="rounded-lg w-full h-full"/>
        </div>
        <div class="p-5 text-gray-200 rounded-lg lg:backdrop-blur-md lg:bg-[#b6b6ba4d]/30 w-fit lg:w-full mx-auto">
          <h1 class="text-lg sm:text-xl md:text-2xl font-semibold text-gray-200 mb-3 text-center">
            Warhammer 40,000: Space Marine 2
          </h1>
          <div class="flex justify-center">
            <div class="flex p-3 rounded-full backdrop-blur-md bg-black/30 text-center">
              <div class="border-r border-[#322f6f] px-2">
                <router-link
                  to="#"
                  class="flex items-center gap-1 hover:text-[#161456]">
                  <div class="">
                    <FaceSmileIcon class="size-4 md:size-5 font-bold" />
                  </div>
                  <p class="text-sm">Steam</p>
                </router-link>
              </div>
              <div class="border-r border-[#322f6f] items-center px-2 gap-1 hidden sm:flex">
                <CheckIcon class="size-4 md:size-5 font-bold text-green-500" />
                <p class="text-sm">in stock</p>
              </div>
              <div class="px-2 flex items-center gap-1">
                <CheckIcon class="size-4 md:size-5 font-bold text-green-500" />
                <p class="text-sm">Digital download</p>
              </div>
            </div>
          </div>
          <div class="flex gap-1 justify-center my-3">
            <div class="">
              <FireIcon class="size-4 md:size-5 font-bold text-red-700" />
            </div>
            <div class="text-sm">161 users on this page</div>
          </div>
          <div class="grid grid-cols-2 gap-2 mb-3">
            <div class="relative">
              <select class="text-gray-200 text-sm bg-[#04091c] h-12 rounded-lg focus:outline-none focus:border-[#535C91] border-2 border-transparent hover:border-[#535C91] w-full appearance-none py-2 md:text-base pl-3 pr-10">
                <option class="" selected>PC</option>
                <option class="">Xbox Series X|S</option>
              </select>
              <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-200 pointer-events-none flex items-center justify-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4"
                  viewBox="0 0 24 24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </div>
            <div class="relative">
              <select class="text-sm text-gray-200 bg-[#04091c] h-12 rounded-lg focus:outline-none focus:border-[#535C91] border-2 border-transparent hover:border-[#535C91] w-full appearance-none py-2 md:text-base pl-3 pr-10">
                <option selected>Standard Edition</option>
                <option>Gold Edition</option>
                <option>Ultra Edition</option>
              </select>
              <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-200 pointer-events-none flex items-center justify-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4"
                  viewBox="0 0 24 24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </div>
          </div>
          <div class="flex justify-center gap-3 items-center mb-3">
            <div class="text-gray-200 flex gap-1 items-center">
              <TagIcon class="size-4" />
              <del>60€</del>
            </div>
            <p class="text-[#8190e3]">-26%</p>
            <div class="text-gray-200 text-2xl">44.39€</div>
          </div>
          <div class="flex items-center gap-2">
            <div class="">
              <div class="relative group">
                <button class="p-2 sm:p-3 bg-[#535C91] hover:bg-[#384176] rounded-full">
                  <HeartIcon class="size-5 text-gray-200" />
                </button>
                <div class="absolute shadow-lg hidden group-hover:block bg-[#04091c] text-gray-200 px-3 py-[6px] text-sm w-max -top-11 -left-10 before:w-4 before:h-4 before:rotate-45 before:bg-[#04091c] before:absolute before:z-[-1] before:-bottom-1 before:-left-4 before:right-0 before:mx-auto rounded">
                  Add to my Wishlist
                </div>
              </div>
            </div>
            <div class="w-full">
              <button class="bg-[#535C91] hover:bg-[#384176] flex gap-2 items-center justify-center text-gray-200 w-full rounded-full px-3 sm:h-12 h-10 transition-all font-semibold text-md md:text-lg">
                <ShoppingCartIcon class="size-5" />
                <span>Add to cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  <Footer />
</template>
