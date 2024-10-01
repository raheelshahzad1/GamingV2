<script setup>
import Navbar from './Navbar.vue';
import Footer from './Footer.vue';
import {
    ShoppingCartIcon,
    ChevronRightIcon,
    ChevronLeftIcon
} from "@heroicons/vue/24/solid";
</script>
<template>
<Navbar />
<div class="bg-stone-200">
    <div class="max-w-7xl mx-auto sm:px-4 pt-12 pb-0 sm:pb-10">
        <div class="grid grid-cols-3 md:grid-cols-6 gap-8">
            <div class="col-span-3 md:col-span-4 px-4 sm:px-0">
                <h1 class="text-xl md:text-2xl font-semibold text-gray-600 mb-3 md:mb-4">
                    Cart
                </h1>
                <div class="p-5 sm:p-8 bg-stone-300 rounded-xl">
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
                </div>
            </div>
            <div class="col-span-3 md:col-span-2 sticky sm:relative bottom-0 inset-x-0 w-full">
                <h1 class="text-xl md:text-2xl font-semibold text-gray-600 mb-3 md:mb-4 hidden sm:block">
                    Summary
                </h1>
                <div class="p-5 md:p-4 lg:p-6 bg-[#535C91] sm:rounded-xl">
                    <div class="flex justify-between mb-1 sm:mb-3 text-gray-300 lg:text-base md:text-sm text-base">
                        <span class="">Official price</span>
                        <span class="">0€</span>
                    </div>
                    <div class="flex justify-between mb-1 sm:mb-3 text-gray-300 lg:text-base md:text-sm text-base">
                        <span class="">Discount</span>
                        <span class="">0€</span>
                    </div>
                    <div class="flex justify-between mb-1 sm:mb-3 text-gray-200 lg:text-base md:text-sm text-base">
                        <span class="font-semibold">Subtotal</span>
                        <span class="font-semibold">0€</span>
                    </div>
                    <button type="button" class="bg-[#0c1b51] hover:bg-[#102264] w-full  text-white lg:text-base md:text-sm text-base rounded-full p-2 transition-all my-3 sm:my-6">
                        <span>Go to payment</span>
                    </button>
                    <RouterLink to="/shope" class="flex justify-center items-center gap-1 lg:text-base md:text-sm sm:text-base hover:text-gray-200 text-gray-300 pt-3 border-t border-[#050c25]">
                        <ChevronLeftIcon class="size-4 mt-1" />
                        <span>Continue shopping</span>
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
</div>
<Footer />
</template>
