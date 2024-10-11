<script setup>
import { XMarkIcon, ChevronDoubleLeftIcon } from "@heroicons/vue/24/solid";
</script>
<template>
  <div class="grid grid-cols-2 md:grid-cols-3 relative h-screen">
    <div class="bg-[#081134] col-span-2">

      <div class="pt-3 pl-3 mb-8 md:mb-14">
        <RouterLink to="/">
          <img src="https://www.instant-gaming.com/themes/igv2/images/logos/logo-horizontal.svg" alt="logo"
            class="h-8 md:h-9" />
        </RouterLink>
      </div>

      <div class="max-w-[600px] mx-auto px-4">
        <h1 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-200 mb-4 md:mb-8 text-center">
          Lost your password?
        </h1>

        <p class="text-gray-200 text-sm mb-3 md:mb-4">
          Please enter the address which you used to register. We will send you an
          email with your new password. Check your spam box if you do not receive
          it. In case of any complications, please contact us at this address:
          support@instant-gaming.com
          <RouterLink to="/support" class="hover:text-[#636eab] text-gray-200 underline">contact us.</RouterLink>
        </p>

        <input type="email"
          class="w-full px-3 md:px-4 text-sm h-10 md:h-12 bg-[#04091c] rounded-full text-white border-2 border-transparent transition-all focus:outline-none focus:border-[#b6bff4] mb-3 md:mb-4"
          placeholder="Enter your email" />

        <button type="submit"
          class="bg-[#535C91] hover:bg-[#384176] text-white rounded-full h-10 md:h-12 flex items-center justify-center md:py-4 transition-all w-full font-semibold text-md md:text-lg">
          Submit
        </button>

        <div class="py-4 md:py-6 flex md:hidden justify-center">
          <RouterLink to="/login" class="hover:text-[#636eab] text-gray-200 flex gap-1 items-center">
            <ChevronDoubleLeftIcon class="size-3 mt-[2px]" />
            <span class="text-md">Back</span>
          </RouterLink>
        </div>

      </div>
    </div>
    <div class="hidden md:flex justify-center items-center col-span-1 bg-stone-200">

      <div class="px-4 lg:px-5">
        <h1 class="text-3xl lg:text-4xl font-semibold text-gray-900 mb-3 text-center">Back to Login</h1>
        <p class="text-gray-900 text-sm mb-4 text-center">Remembered your password? No worries! Click here to go back to
          the login page.
        </p>
        
        <RouterLink to="/login">
          <button type="submit"
            class="bg-[#081134] hover:bg-[#152668] text-white rounded-full h-10 flex items-center justify-center md:py-4 transition-all w-full text-md md:text-lg">
            Login
          </button>
        </RouterLink>
      </div>
    </div>

    <div class="p-1 bg-gray-100 md:bg-[#081134] rounded-full text-[#081134] md:text-gray-100 absolute top-3 right-3">
      <RouterLink to="/">
        <XMarkIcon class="size-4 md:size-5" />
      </RouterLink>
    </div>

  </div>
</template>