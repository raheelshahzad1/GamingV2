<script setup>
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";
</script>
<template>
  <Navbar />
  <div class="bg-[#081134]">
    <div class="max-w-[600px] mx-auto px-5 py-14 md:py-32">
      <h1 class="text-xl md:text-2xl font-semibold text-gray-200 mb-3 md:mb-4">
        Lost your password?
      </h1>
      <p class="text-gray-200 text-sm mb-6 md:mb-8">
        Please enter the address which you used to register. We will send you an
        email with your new password. Check your spam box if you do not receive
        it. In case of any complications, please contact us at this address:
        support@instant-gaming.com
        <RouterLink
          to="/support"
          class="hover:text-[#9290C3] text-gray-200 underline"
          >contact us.</RouterLink>
      </p>
      <input
        type="email"
        class="w-full px-3 md:px-4 h-12 bg-[#04091c] rounded-full text-white border-2 border-transparent focus:outline-none focus:border-[#535C91] hover:border-[#535C91] mb-3 md:mb-4"
        placeholder="Enter Your Mail..."/>
      <button type="submit"
        class="bg-[#535C91] hover:bg-[#384176] text-white rounded-full h-12 flex items-center justify-center transition-all w-full font-semibold text-md md:text-lg">
        Submit
      </button>
    </div>
  </div>
  <Footer />
</template>