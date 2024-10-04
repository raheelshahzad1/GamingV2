<script setup>
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";
import {
  ShoppingCartIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
  FaceSmileIcon,
  TrashIcon,
  ArrowLongUpIcon,
  PlusIcon,
  MinusIcon,
} from "@heroicons/vue/24/solid";
</script>

<template>
  <Navbar />
  <div class="bg-stone-200">
    <div class="max-w-7xl mx-auto sm:px-4 pt-12 pb-0 sm:pb-10">
      <h1 class="text-3xl font-bold text-gray-800 text-center">
        Shopping Cart
      </h1>

      <div class="grid md:grid-cols-3 gap-8 mt-16">
        <div class="md:col-span-2 space-y-4">
          <div class="px-4 sm:px-0">
            <!-- <div class="p-5 sm:p-8 bg-gray-100 rounded-xl">
                    <ShoppingCartIcon class="size-12 md:size-16 text-[#0c1b51] mx-auto" />
                    <h1 class="text-xl md:text-2xl font-semibold text-gray-600 my-3 md:my-5 text-center">
                        Your cart is empty
                    </h1>
                    <p class="text-gray-600 text-center my-3 md:mb-5">You didn't add any item in your cart yet. Browse the website to find amazing deals!</p>
                    <div class="flex justify-center">
                        <router-link to="/shope" class="bg-[#535C91] hover:bg-[#384176] text-white text-sm md:text-base rounded-full px-5 py-2 transition-all">
                            Discover games
                        </router-link>
                    </div>
                </div> -->

            <div v-for="(item, index) in 3" :key="index"
              class="flex items-between gap-3 md:gap-6 py-4 border-b border-gray-300">
              <div class="flex grow gap-4">
                <div class="w-28 h-28 max-sm:w-24 max-sm:h-24 shrink-0 bg-gray-100 p-2 rounded-md">
                  <img src="https://readymadeui.com/images/product14.webp" class="w-full h-full object-contain" />
                </div>

                <div class="flex flex-col">
                  <h3 class="text-sm sm:text-base font-semibold text-gray-800 line-clamp-3">
                    Velvet Sneaker Velvet Sneaker Velvet Sneaker Velvet Sneaker
                  </h3>

                  <button type="button"
                    class="mt-4 md:mt-6 font-semibold text-red-500 text-xs flex items-center gap-1 shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 fill-current inline" viewBox="0 0 24 24">
                      <path
                        d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                        data-original="#000000"></path>
                      <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                        data-original="#000000"></path>
                    </svg>
                    REMOVE
                  </button>
                </div>
              </div>

              <div class="flex flex-col items-end">
                <h4 class="text-lg max-sm:text-base font-bold text-gray-800 md:text-end">
                  $20.00
                </h4>

                <button type="button"
                  class="mt-3 md:mt-6 md:ml-auto flex items-center px-3 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-2.5 fill-current" viewBox="0 0 124 124">
                    <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                      data-original="#000000"></path>
                  </svg>

                  <span class="mx-3 font-bold">2</span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-2.5 fill-current" viewBox="0 0 42 42">
                    <path
                      d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                      data-original="#000000"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          class="shadow-[0_-5px_5px_-5px_grey] sm:shadow-none border-t bg-gray-100 sm:rounded-md p-2 sm:p-4 h-max sticky sm:relative bottom-0 inset-x-0 w-full">
          <h3 class="hidden sm:block text-lg max-sm:text-base font-bold text-gray-800 border-b border-gray-300 pb-2">
            Order Summary
          </h3>

          <ul class="text-gray-800 mt-0 sm:mt-6">
            <li class="flex flex-wrap gap-4 text-sm mb-2 sm:mb-3">
              Total <span class="ml-auto font-bold">$200.00</span>
            </li>
            <li class="flex flex-wrap gap-4 text-sm mb-2 sm:mb-3">
              Shipping <span class="ml-auto font-bold">Free</span>
            </li>
            <hr class="border-gray-300" />
            <li class="flex flex-wrap gap-4 text-sm font-bold my-3">
              SubTotal <span class="ml-auto">$200.00</span>
            </li>
          </ul>

          <div class="mt-2 sm:mt-6 space-y-3">
            <button type="button"
              class="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-gray-800 hover:bg-gray-900 text-white rounded-md">
              Checkout
            </button>
            <button type="button"
              class="hidden sm:inline text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-transparent text-gray-800 border border-gray-300 rounded-md">
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>