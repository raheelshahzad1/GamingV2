<script setup>
import Navbar from './Navbar.vue';
import Footer from './Footer.vue';
import { XCircleIcon } from '@heroicons/vue/24/solid';
</script>
<template>
    <Navbar/>
    <div class="flex justify-center items-center">
        <div class=" py-10">
            <XCircleIcon class="text-red-600 size-20 mx-auto mb-2"/>
            <h1 class="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-700 mb-2 text-center">
            Order Failed
        </h1>
        <p class="text-gray-700 font-medium text-center mb-14">For Order ID SD98790342</p>
<ul class="mb-3 flex justify-between text-gray-700">
    <li class="font-semibold">Reason</li>
    <li>Invalid Account</li>
</ul>
<ul class="mb-3 flex justify-between text-gray-700">
    <li class="font-semibold">E-mail</li>
    <li>gaming@gmail.com</li>
</ul>
<ul class="mb-3 flex justify-between text-gray-700">
    <li class="font-semibold">Status</li>
    <li>Failed</li>
</ul>
<ul class="mb-3 flex justify-between text-gray-700">
    <li class="font-semibold">Date</li>
    <li>23/04/2024</li>
</ul>
<ul class="mb-5 flex justify-between text-gray-700">
    <li class="font-semibold">Total Cost</li>
    <li> 233€</li>
</ul>
<div class="w-full">
            <button class="bg-[#535C91] hover:bg-[#384176] text-gray-200 w-full rounded-full px-2 lg:px-3 md:h-12 h-10 transition-all font-semibold text-md md:text-xl">
              <span>Back TO Home</span>
            </button>
          </div>

        </div>
    </div>
    <Footer/>
</template>