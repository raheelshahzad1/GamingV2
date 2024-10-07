<script setup>
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";
import { CheckCircleIcon } from "@heroicons/vue/24/solid";
</script>
<template>
  <Navbar />
  <div class="sm:w-96 mx-auto sm:py-10">
    <div class="shadow-2xl sm:rounded-xl">
      <div class="bg-green-600 py-4 sm:rounded-t-xl">
        <CheckCircleIcon class="text-white size-16 sm:size-20 mx-auto sm:mb-2" />
        <h1 class="text-xl md:text-2xl font-semibold text-white mb-1 text-center">
          Order Placed Successfully
        </h1>
        <p class="text-white text-xs sm:text-sm text-center mb-4 sm:mb-14">
          For Order ID SD987902
        </p>
      </div>

      <div class="px-3 text-sm sm:text-base py-6">
        <ul class="mb-3 flex justify-between gap-6 text-gray-700">
          <li class="font-medium">Status :</li>
          <li>Completed</li>
        </ul>

        <ul class="mb-3 flex justify-between gap-6 text-gray-700">
          <li class="font-medium">E-mail :</li>
          <li>gaming@gmail.com</li>
        </ul>

        <ul class="mb-3 flex justify-between gap-6 text-gray-700">
          <li class="font-medium">Date :</li>
          <li>23/04/2024</li>
        </ul>

        <ul class="mb-5 flex justify-between gap-6 text-gray-700">
          <li class="font-medium">Total Cost :</li>
          <li>233€</li>
        </ul>

        <div class="flex gap-2">
          <button
            class="hover:bg-gray-600 border border-gray-600 text-gray-600 hover:text-white w-full rounded-full p-1.5 transition-all text-sm sm:text-base">
            Close
          </button>
          <button
            class="hover:bg-green-600 border border-green-600 text-green-600 hover:text-white w-full rounded-full p-1.5 transition-all text-sm sm:text-base">
            Continue
          </button>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>