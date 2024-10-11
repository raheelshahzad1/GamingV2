<script setup>
import {
  ChatBubbleOvalLeftEllipsisIcon,
  ShieldCheckIcon,
  CloudArrowDownIcon,
} from "@heroicons/vue/24/outline";
</script>
<template>
  <div class="bg-[#050c25] py-6 md:py-10 mb-8 md:mb-20">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4">
        
        <div class="border-r-0  md:border-r-2 border-gray-700">
          <div class="flex justify-center items-center">
            <div class="mr-2 text-red-700 size-12">
              <ShieldCheckIcon />
            </div>
            <div>
              <h1 class="text-white font-semibold text-xl">Reliable & safe</h1>
              <p class="text-[#9290C3]">Over 10,000 games</p>
            </div>
          </div>
        </div>

        <div class="border-r-0  lg:border-r-2 border-gray-700">
          <div class="flex justify-center items-center">
            <div class="mr-2 text-red-700 size-12">
              <CloudArrowDownIcon />
            </div>
            <div>
              <h1 class="text-white font-semibold text-xl">Super Fast</h1>
              <p class="text-[#9290C3]">Instant digital download</p>
            </div>
          </div>
        </div>

          <div class="flex justify-center items-center">
            <div class="mr-2 text-red-700 size-12">
              <ChatBubbleOvalLeftEllipsisIcon />
            </div>
            <div>
              <h1 class="text-white font-semibold text-xl">Customer support</h1>
              <p class="text-[#9290C3]">Human support 24/7</p>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>