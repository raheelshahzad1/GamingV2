<script setup>
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";
</script>
<template>
  <Navbar />
  <div class="bg-[#081134]">
    <div class="px-5 md:px-12 py-14 md:py-20">
      <h1 class="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-200 mb-6 md:mb-10 text-center">
        Instant Gaming Support
      </h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">
          <router-link to="#">
          <div class="p-5 bg-[#535C91] hover:bg-[#5f6797] flex flex-col items-center justify-center gap-3 rounded-lg h-[250px]">
            <img src="https://www.instant-gaming.com/themes/igv2/modules/contact/images/tile-order.svg" alt="" class="h-14">
            <h1 class="text-gray-200 font-semibold text-lg">Orders & products</h1>
            <p class="text-center text-gray-200 line-clamp-3">Support for key activation and product information.</p>
        </div>
     </router-link>
          <router-link to="#">
          <div class="p-5 bg-[#535C91] hover:bg-[#5f6797] flex flex-col items-center justify-center gap-3 rounded-lg h-[250px]">
            <img src="https://www.instant-gaming.com/themes/igv2/modules/contact/images/tile-payment.svg" alt="" class="h-14">
            <h1 class="text-gray-200 font-semibold text-lg">Payment</h1>
            <p class="text-center text-gray-200 line-clamp-3">Help with resolving any payment-related issues or questions.</p>
        </div>
     </router-link>
          <router-link to="#">
          <div class="p-5 bg-[#535C91] hover:bg-[#5f6797] flex flex-col items-center justify-center gap-3 rounded-lg h-[250px]">
            <img src="https://www.instant-gaming.com/themes/igv2/modules/contact/images/tile-security.svg" alt="" class="h-14">
            <h1 class="text-gray-200 font-semibold text-lg">Account & security</h1>
            <p class="text-center text-gray-200 line-clamp-3">Assistance with account management and security.</p>
        </div>
     </router-link>
          <router-link to="#">
          <div class="p-5 bg-[#535C91] hover:bg-[#5f6797] flex flex-col items-center justify-center gap-3 rounded-lg h-[250px]">
            <img src="https://www.instant-gaming.com/themes/igv2/modules/contact/images/tile-partnership.svg" alt="" class="h-14">
            <h1 class="text-gray-200 font-semibold text-lg">Partnership</h1>
            <p class="text-center text-gray-200 line-clamp-3">Learn how to earn money by promoting our services.</p>
        </div>
     </router-link>
      </div>
    </div>
  </div>
  <div class="text-center text-gray-200 px-2 py-4 bg-[#0d1b4e]">Aliasing DMCC, Unit 1204, JBC3, Jumeirah Lakes Towers, Dubai, UAE - RN DMCC179752 support@instant-gaming.com</div>
  <Footer />
</template>