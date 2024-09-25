<script setup>
import { XMarkIcon } from "@heroicons/vue/24/solid";
</script>
<template>
  <div class="grid grid-cols-1 md:grid-cols-2 relative h-screen">
    <div class="bg-[#081134]">
      <div class="pt-4 mb-12 flex justify-center">
        <RouterLink to="/">
          <img
            src="https://www.instant-gaming.com/themes/igv2/images/logos/logo-horizontal.svg"
            alt="logo"
            class="h-9"/>
        </RouterLink>
      </div>
      <div class="max-w-[550px] mx-auto px-5">
        <h1 class="text-xl md:text-2xl font-semibold text-gray-200 mb-4">Login</h1>
        <form>
          <input
            type="email"
            class="w-full px-3 md:px-4 h-12 bg-[#04091c] rounded-full text-white border-2 border-transparent focus:outline-none focus:border-[#535C91] hover:border-[#535C91] mb-3 md:mb-4"
            placeholder="Enter your email"/>
          <input
            type="password"
            class="w-full px-3 md:px-4 h-12 bg-[#04091c] rounded-full text-white border-2 border-transparent focus:outline-none focus:border-[#535C91] hover:border-[#535C91] mb-3 md:mb-4"
            placeholder="********"/>
          <button type="submit" class="bg-[#535C91] hover:bg-[#384176] text-white rounded-full h-12 flex items-center justify-center md:py-4 transition-all w-full font-semibold text-md md:text-lg">
            Login
          </button>
        </form>
        <div class="flex justify-between mt-3 mb-6">
            <RouterLink to="/signIn">
                <span class="text-sm hover:text-[#9290C3] text-gray-200">No account yet?</span>
            </RouterLink>
            <RouterLink to="/forgotPassword">
                <span class="text-sm hover:text-[#9290C3] text-gray-200">Lost password?</span>
            </RouterLink>
        </div>
        <div class="py-6 border-t-[1px] border-[#322f6f]">
          <div class="h-12 bg-white px-2 md:px-3 rounded-full flex gap-4 justify-center items-center cursor-pointer">
            <img src="https://www.instant-gaming.com/themes/igv2/images/icons/socials/icon-gl.svg" class="w-4=5"/>
            <h1 class="text-[#1e2a5b] font-semibold">Login With Google</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="hidden md:inline">
      <img src="https://www.instant-gaming.com/themes/igv2/modules/register/images/wallpaper.jpg" class="object-cover h-full w-full"/>
    </div>
    <div class="hover:text-[#9290C3] text-gray-200 absolute top-2 right-2">
      <RouterLink to="/" class="">
        <XMarkIcon class="size-7" />
      </RouterLink>
    </div>
  </div>
</template>