<script setup>
import { XMarkIcon, ChevronDoubleLeftIcon } from "@heroicons/vue/24/solid";
</script>
<template>
  <div class="grid grid-cols-1 md:grid-cols-2 relative h-screen">
    <div class="bg-[#081134]">
      <div class="pt-4 mb-12 flex justify-center">
        <router-link to="/">
          <img
            src="https://www.instant-gaming.com/themes/igv2/images/logos/logo-horizontal.svg"
            alt="logo"
            class="h-9"/>
        </router-link>
      </div>
      <div class="max-w-[570px] mx-auto px-5">
        <h1 class="text-xl md:text-2xl font-semibold text-gray-200 mb-4">
          SignIn
        </h1>
        <form>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-3">
            <div>
              <input
                type="text"
                class="w-full px-3 md:px-4 h-12 bg-[#04091c] rounded-full text-white border-2 border-transparent focus:outline-none focus:border-[#535C91] hover:border-[#535C91] mb-3 md:mb-4"
                placeholder="First Name"/>
            </div>
            <div>
              <input
                type="text"
                class="w-full px-3 md:px-4 h-12 bg-[#04091c] rounded-full text-white border-2 border-transparent focus:outline-none focus:border-[#535C91] hover:border-[#535C91] mb-3 md:mb-4"
                placeholder="Last Name"/>
            </div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-3">
            <div>
              <input
                type="email"
                class="w-full px-3 md:px-4 h-12 bg-[#04091c] rounded-full text-white border-2 border-transparent focus:outline-none focus:border-[#535C91] hover:border-[#535C91] mb-3 md:mb-4"
                placeholder="Enter your email"/>
            </div>
            <div>
              <input
                type="password"
                class="w-full px-3 md:px-4 h-12 bg-[#04091c] rounded-full text-white border-2 border-transparent focus:outline-none focus:border-[#535C91] hover:border-[#535C91] mb-3 md:mb-4"
                placeholder="Password"/>
            </div>
          </div>
          <div>
            <input
              type="tel"
              class="w-full px-3 md:px-4 h-12 bg-[#04091c] rounded-full text-white border-2 border-transparent focus:outline-none focus:border-[#535C91] hover:border-[#535C91] mb-3 md:mb-4"
              placeholder="Contact Number"/>
          </div>
          <div>
            <input
              id="checkbox"
              type="checkbox"
              class="hidden peer bg-transparent"/>
            <label
              for="checkbox"
              class="relative inline-flex items-center justify-center p-1 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-[#081134] w-6 h-6 cursor-pointer border-2 border-[#535C91] rounded-full overflow-hidden mb-3 md:mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-full fill-[#535C91]"
                viewBox="0 0 520 520">
                <path
                  d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                  data-name="7-Check"
                  data-original="#000000"/>
              </svg>
            </label>
            <span class="text-gray-200 ml-1">I agree with the
              <a href="#" class="hover:text-[#9290C3] underline">Terms </a>and
              <a href="#" class="hover:text-[#9290C3] underline">Privacy policy</a>
            </span>
          </div>
          <button
            type="submit"
            class="bg-[#535C91] hover:bg-[#384176] text-white rounded-full h-12 flex items-center justify-center md:py-4 transition-all w-full font-semibold text-md md:text-lg">
            Submit
          </button>
        </form>
        <div class="py-6 flex justify-center">
          <router-link
            to="/login"
            class="hover:text-[#9290C3] text-gray-200 flex gap-1 items-center">
            <ChevronDoubleLeftIcon class="size-3 mt-[2px]" />
            <div class="text-md">Back</div>
          </router-link>
        </div>
      </div>
    </div>
    <div class="hidden md:inline">
      <img
        src="https://www.instant-gaming.com/themes/igv2/modules/register/images/wallpaper.jpg"
        class="object-cover h-full w-full"/>
    </div>
    <div class="hover:text-[#9290C3] text-gray-200 absolute top-2 right-2">
      <router-link to="/" class="">
        <XMarkIcon class="size-7" />
      </router-link>
    </div>
  </div>
</template>