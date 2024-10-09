<script setup>
import { ref } from "vue";
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";
import Game from "./Game.vue";
import {
  FunnelIcon,
  TrashIcon,
  ListBulletIcon,
  TableCellsIcon,
  XMarkIcon,
  ShoppingCartIcon,
} from "@heroicons/vue/24/solid";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { ChevronUpIcon } from "@heroicons/vue/20/solid";
const isOpen = ref(false);
const openFilters = () => {
  isOpen.value = !isOpen.value;
};
const isGrid = ref(true);
const gridView = () => {
  isGrid.value = true;
};
const listView = () => {
  isGrid.value = false;
};
</script>
<template>
  <Navbar />
  <div>
    <div class="max-w-7xl mx-auto">
      <h1
        class="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 py-4 sm:py-6 md:py-8 lg:py-10 text-center">
        Gear for Every Gamer
      </h1>

      <div
        class="flex gap-3 flex-col sm:flex-row justify-between items-center p-3 mx-4 mb-4 bg-stone-50 border rounded-md">
        <p class="text-gray-600 text-sm font-semibold">32 Results</p>
        <div class="flex items-center gap-1 sm:gap-2">
          <button @click="listView"
            class="p-1 sm:p-2 border border-slate-200 hover:border-slate-400 active:border-slate-400 hover:text-[#535C91] focus:text-[#535C91] active:text-[#535C91] rounded transition duration-300 ease-in-out focus:border-slate-300 shadow-sm focus:shadow-md active:bg-slate-100">
            <ListBulletIcon class="size-5" />
          </button>

          <button @click="gridView"
            class="p-1 sm:p-2 border border-slate-200 hover:border-slate-400 active:border-slate-400 hover:text-[#535C91] focus:text-[#535C91] active:text-[#535C91] rounded transition duration-300 ease focus:border-slate-300 shadow-sm focus:shadow-md">
            <TableCellsIcon class="size-5" />
          </button>

          <div class="relative w-48">
            <select 
              class="w-full bg-transparent placeholder:text-slate-400 text-[#535C91] text-sm border border-slate-200 rounded pl-2 sm:pl-3 pr-4 sm:pr-8 py-1 sm:py-2 transition duration-300 ease focus:outline-none focus:border-slate-300 hover:border-slate-300 shadow-sm focus:shadow-md appearance-none cursor-pointer">
              <option value="DefaultSorting" selected>Default sorting</option>
              <option value="latest">Sort by latest</option>
              <option value="low">low to high</option>
              <option value="high">high to low</option>
              <option value="A-Z">Sort by A-Z</option>
              <option value="Z-A">Sort by Z-A</option>
            </select>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2"
              stroke="currentColor"
              class="h-5 w-5 ml-1 absolute top-1.5 sm:top-2.5 right-1.5 sm:right-2.5 text-[#535C91]">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
            </svg>
          </div>

          <button @click="openFilters"
            class="lg:hidden p-1 sm:p-2 border border-slate-200 hover:border-slate-400 rounded transition duration-300 ease focus:border-slate-300 shadow-sm focus:shadow-md">
            <FunnelIcon class="size-5" />
          </button>
        </div>
      </div>

      <div class="flex lg:gap-4 mx-4">
        <div class="w-[30%] hidden lg:inline">
          <div class="w-full">
            <div class="mx-auto w-full max-w-md rounded-md bg-stone-50 border p-3">
              <Disclosure v-slot="{ open }" defaultOpen>
                <DisclosureButton
                  class="flex w-full justify-between p-2 font-medium hover:text-[#535C91] active:text-[#535C91]">
                  <span>Categories</span>
                  <ChevronUpIcon :class="open ? 'rotate-180 transform' : ''"
                    class="h-5 w-5 hover:text-[#535C91] active:text-[#535C91]" />
                </DisclosureButton>

                <DisclosurePanel class="px-2 py-3">
                  <ul>
                    <li v-for="(item, index) in 10" :key="index" class="mb-1 flex items-center justify-between">
                      <router-link to="#" class="hover:text-[#8a88d6]">
                        Action
                      </router-link>
                      <span class="text-gray-500 text-sm">232</span>
                    </li>
                  </ul>
                </DisclosurePanel>
              </Disclosure>

              <Disclosure as="div" class="mt-2" v-slot="{ open }">
                <DisclosureButton
                  class="flex w-full justify-between p-2 font-medium hover:text-[#535C91] active:text-[#535C91]">
                  <span>Platforms</span>
                  <ChevronUpIcon :class="open ? 'rotate-180 transform' : ''"
                    class="h-5 w-5 hover:text-[#535C91] active:text-[#535C91]" />
                </DisclosureButton>

                <DisclosurePanel class="px-2 py-3">
                  <ul>
                    <li v-for="(item, index) in 10" :key="index" class="mb-1">
                      <div class="inline-flex items-center">
                        <label class="flex items-center cursor-pointer relative" for="check-1">
                          <input type="checkbox"
                            class="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-[#535C91] checked:bg-[#535C91] checked:border-[#535C91]"
                            id="check-1" />
                          <span
                            class="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20"
                              fill="currentColor" stroke="currentColor" stroke-width="1">
                              <path fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd">
                              </path>
                            </svg>
                          </span>
                        </label>
                        <label class="cursor-pointer ml-2 text-[#8a88d6] text-sm" for="check-1">
                          Steam
                        </label>
                      </div>
                    </li>
                  </ul>
                </DisclosurePanel>
              </Disclosure>

              <Disclosure as="div" class="mt-2" v-slot="{ open }" defaultOpen>
                <DisclosureButton
                  class="flex w-full justify-between p-2 font-medium hover:text-[#535C91] active:text-[#535C91]">
                  <span>Price</span>
                  <ChevronUpIcon :class="open ? 'rotate-180 transform' : ''"
                    class="h-5 w-5 hover:text-[#535C91] active:text-[#535C91]" />
                </DisclosureButton>
                
                <DisclosurePanel class="px-2 py-3">
                  <div>
                    <p class="text-gray-600 mb-3 font-medium">Adjust Price</p>
                    <input type="range" value="10" class="w-full cursor-pointer focus:outline-none" />
                    <div class="flex justify-between gap-2 text-gray-600 text-xs mb-3">
                      <span>Min (0€)</span>
                      <span>500€</span>
                      <span>Max (1000€)</span>
                    </div>
                  </div>
                  <button
                    class="flex justify-center w-full bg-[#535C91] hover:bg-[#384176] items-center gap-1 text-gray-200 px-3 py-2 transition-all text-sm md:text-md rounded-lg">
                    <TrashIcon class="size-4" />
                    <span>Clear Filter</span>
                  </button>
                </DisclosurePanel>
              </Disclosure>
            </div>
          </div>
        </div>

        <div class="lg:w-[70%] w-full">
          <div class="mb-4 md:mb-7">
            <div v-if="isGrid" class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <Game v-for="(item, index) in 16" :key="index" />
            </div>

            <div v-else>
              <div v-for="(item, index) in 5" :key="index" class="flex gap-3 sm:gap-4 py-4 border-b border-gray-300">
                <RouterLink to="/game-details" class="shrink-0 h-[115px] w-[115px] sm:w-[150px] rounded-lg">
                  <img
                    src="https://gaming-cdn.com/images/products/13615/380x218/ravenswatch-pc-game-steam-cover.jpg?v=1727777270"
                    class="w-full h-full object-cover rounded-lg" />
                </RouterLink>

                <div class="flex flex-col gap-2">
                  <h3 class="font-semibold text-gray-800 line-clamp-2">
                    Velvet Sneaker Velvet Sneaker Velvet Sneaker Velvet Sneaker
                  </h3>
                  <p class="font-medium text-sm md:text-base text-gray-600">36.49€</p>
                  <button type="button"
                    class="p-2 rounded-full w-fit border border-gray-500 bg-white text-black hover:bg-black hover:text-white">
                    <RouterLink to="/cart">
                      <ShoppingCartIcon class="size-4" />
                    </RouterLink>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="flex justify-center items-center mb-6 md:mb-10">
            <button type="button"
              class="bg-[#535C91] hover:bg-[#384176] text-white text-sm md:text-lg rounded-full px-5 py-2.5 transition-all">
              Show More
            </button>
          </div>

        </div>
      </div>

      <transition name="slide">
        <div v-if="isOpen"
          class="fixed z-[200] w-[240px] inset-y-0 h-screen left-0 transition duration-300 ease-in-out overflow-y-scroll">
          <div class="flex justify-between items-center py-4 px-2 bg-[#050c25]">
            <RouterLink to="/">
              <img src="https://www.instant-gaming.com/themes/igv2/images/logos/logo-horizontal.svg" alt="logo"
                class="h-7 md:h-9" />
            </RouterLink>
            <button @click="openFilters">
              <XMarkIcon class="size-5 md:size-6 text-gray-200" />
            </button>
          </div>

          <div class="p-4 bg-stone-200">
            <div>
              <p class="text-gray-800 font-semibold">Categories</p>
              <ul class="py-3 border-b border-slate-300">
                <li v-for="(item, index) in 12" :key="index" class="mb-1 flex items-center justify-between">
                  <router-link to="#" class="text-[#8a88d6]">Action</router-link>
                  <span class="text-gray-500 text-sm">232</span>
                </li>
              </ul>
            </div>

            <div>
              <p class="text-gray-800 font-semibold mt-3">Platforms</p>
              <ul class="py-3 border-b border-slate-300">
                <li v-for="(item, index) in 12" :key="index" class="mb-1">
                  <div class="inline-flex items-center">
                    <label class="flex items-center cursor-pointer relative" for="check-1">
                      <input type="checkbox"
                        class="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-[#535C91] checked:bg-[#535C91] checked:border-[#535C91]"
                        id="check-1" />
                      <span
                        class="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20"
                          fill="currentColor" stroke="currentColor" stroke-width="1">
                          <path fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd">
                          </path>
                        </svg>
                      </span>
                    </label>
                    <label class="cursor-pointer ml-2 text-[#8a88d6] text-sm" for="check-1">
                      Steam
                    </label>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <p class="text-gray-800 font-semibold mb-3 mt-3">Adjust Price</p>
              <input type="range" value="10" class="w-full cursor-pointer focus:outline-none" />
              <div class="flex justify-between gap-2 text-gray-600 text-xs mb-3">
                <span>Min (0€)</span>
                <span>500€</span>
                <span>Max (1000€)</span>
              </div>
            </div>

            <button
              class="flex justify-center w-full bg-[#535C91] hover:bg-[#384176] items-center gap-1 text-gray-200 px-3 py-2 transition-all text-sm md:text-md rounded-lg">
              <TrashIcon class="size-4" />
              <span>Clear Filter</span>
            </button>
          </div>
        </div>
      </transition>
    </div>
  </div>

  <div v-if="isOpen" class="fixed inset-0 overflow-y-auto bg-black/70 z-50">
    l̥
  </div>
  <Footer />
</template>

<style scoped>
::-webkit-scrollbar {
  width: 5px;
}
::-webkit-scrollbar-thumb {
  background: #a7afdc;
}
::-webkit-scrollbar-track {
  background: #e7e5e4;
}
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}
</style>