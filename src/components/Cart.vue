<script setup>
import Navbar from './Navbar.vue';
import Footer from './Footer.vue';
import Game from './Game.vue';
import {
    ShoppingCartIcon,
    ChevronRightIcon,
    ChevronLeftIcon,
    FaceSmileIcon,
    TrashIcon,
    ArrowLongUpIcon,
    PlusIcon,
    MinusIcon
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
                <!-- Empty Cart -->
                <!-- <div class="p-5 sm:p-8 bg-stone-300 rounded-xl">
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
                <!-- Empty Cart -->
                <div class="p-3 md:p-5 bg-stone-300 rounded-xl mb-10 md:mb-14">
                    <div class="flex justify-between">
                        <div class="flex items-center gap-2 md:gap-3">
                            <RouterLink to="/gameDetails" class="h-full">
                                <img src="https://gaming-cdn.com/images/products/13615/250x143/13615-cover.jpg?v=1727777270" alt="" class="rounded-lg h-full w-32 object-cover">
                            </RouterLink>
                            <div class="flex flex-col gap-6 justify-between h-full">
                                <div class="">
                                    <h3 class="text-gray-600 font-bold sm:text-base text-sm md:text-lg">Ravenswatch</h3>
                                    <p class="text-sm text-gray-600">steam</p>
                                </div>

                            </div>
                        </div>
                        <div class="flex flex-col justify-center gap-1 md:gap-2">
                            <span class="text-gray-600 font-semibold text-end text-sm sm:text-base md:text-lg">14.72€</span>
                            <div class="flex">
                                <button class="text-red-500 hover:text-red-600 mr-2">
                                    <TrashIcon class="size-5" />
                                </button>
                                <button class="border border-slate-400 flex justify-center items-center py-1 size-7 text-gray-800">
                                    <PlusIcon class="size-4"/>
                                </button>
                                <span class="border border-slate-400 flex justify-center items-center py-1 size-7 text-gray-800">1</span>
                                <button class="border border-slate-400 flex justify-center items-center py-1 size-7 text-gray-800">
                                    <MinusIcon class="size-4"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 class="text-xl md:text-2xl font-semibold text-gray-600 mb-3 md:mb-4">
                        Recommended
                    </h1>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                <Game v-for="(item, index) in 9" :key="index" />
            </div>
                </div>
            </div>
            <div class="col-span-3 md:col-span-2 sticky sm:relative bottom-0 inset-x-0 w-full">
                <h1 class="text-xl md:text-2xl font-semibold text-gray-600 mb-3 md:mb-4 hidden sm:block">
                    Summary
                </h1>
                <div class="p-4 lg:p-6 bg-stone-50 shadow-md sm:rounded-xl">
                    <div class="flex justify-between mb-1 sm:mb-3 text-gray-600 lg:text-base md:text-sm text-sm">
                        <span>Total</span>
                        <span>0€</span>
                    </div>
                    <div class="flex justify-between mb-1 sm:mb-3 text-gray-600 lg:text-base md:text-sm text-sm">
                        <span>Shipping</span>
                        <span>Free</span>
                    </div>
                    <div class="flex justify-between mb-1 sm:mb-3 text-gray-600 lg:text-base md:text-sm text-base">
                        <span class="font-semibold">Subtotal</span>
                        <span class="font-semibold">56€</span>
                    </div>
                    <button type="button" class="bg-[#535C91] hover:bg-[#384176] w-full  text-white lg:text-base md:text-sm text-base rounded-full p-2 transition-all my-3 sm:my-6">
                        <span>Go to payment</span>
                    </button>
                    <RouterLink to="/shope" class="hidden sm:flex justify-center items-center gap-1 lg:text-base md:text-sm sm:text-base hover:text-gray-900 text-gray-600 pt-3 border-t border-[#535C91]">
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
