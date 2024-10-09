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
  <div>
    <div class="max-w-7xl mx-auto sm:px-4 pt-12 pb-0 sm:pb-10">
      <h1 class="text-3xl font-bold text-gray-800 text-center mb-8 sm:mb-16">
        Shopping Cart
      </h1>

      <div class="grid md:grid-cols-3 gap-14">
        <div class="md:col-span-2 space-y-4">
          <div class="px-4 sm:px-0">
            <!-- <div class="p-5 sm:p-8 bg-gray-100 rounded-xl">
                    <ShoppingCartIcon class="size-12 md:size-16 text-[#0c1b51] mx-auto" />
                    <h1 class="text-xl md:text-2xl font-semibold text-gray-600 my-3 md:my-5 text-center">
                        Your cart is empty
                    </h1>
                    <p class="text-gray-600 text-center my-3 md:mb-5">You didn't add any item in your cart yet. Browse the website to find amazing deals!</p>
                    <div class="flex justify-center">
                        <router-link to="/shop" class="bg-[#535C91] hover:bg-[#384176] text-white text-sm md:text-base rounded-full px-5 py-2 transition-all">
                            Discover games
                        </router-link>
                    </div>
                </div> -->

            <div v-for="(item, index) in 3" :key="index" class="flex gap-4 md:gap-8 py-4 border-b border-gray-300">
              <div class="shrink-0 h-32 w-32 sm:h-28 bg-gray-50 p-3 rounded-md">
                <img src="https://readymadeui.com/images/product14.webp" class="w-full h-full object-contain" />
              </div>

              <div class="w-full flex flex-col sm:flex-row gap-3 sm:gap-10">
                <div class="sm:grow">
                  <h3 class="text-sm sm:text-base font-semibold text-gray-800 line-clamp-3">
                    Velvet Sneaker Velvet Sneaker Velvet Sneaker Velvet Sneaker
                  </h3>

                  <button
                    class="md:flex hidden text-sm items-center mt-4 md:mt-6 gap-1 font-medium text-red-500 hover:text-red-600">
                    <TrashIcon class="size-4" />
                    <span>REMOVE</span>
                  </button>
                </div>

                <div class="items-end">
                  <h4 class="text-lg max-sm:text-base font-bold text-gray-800 mb-2">
                    $20.00
                  </h4>

                  <div class="flex items-center gap-2">
                    <div class="flex rounded-md border border-gray-400">
                      <button class="h-8 w-8 flex items-center justify-center">
                        <PlusIcon class="size-3" />
                      </button>

                      <span class="h-8 w-8 flex items-center justify-center border-l border-r border-gray-400">
                        1
                      </span>

                      <button class="h-8 w-8 flex items-center justify-center">
                        <MinusIcon class="size-3" />
                      </button>
                    </div>
                    <button class="md:hidden">
                      <TrashIcon class="size-4 text-red-500 hover:text-red-600" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] sm:shadow-none border-t bg-stone-50 border sm:rounded-md p-4 h-max sticky sm:relative bottom-0 inset-x-0 w-full">
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
            <router-link to="/order-failed"
              class="block text-center text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-gray-800 hover:bg-gray-900 text-white rounded-md">
              Checkout
            </router-link>
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
