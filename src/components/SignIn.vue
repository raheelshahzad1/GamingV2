<script setup>
import { ChevronDoubleLeftIcon, XMarkIcon } from "@heroicons/vue/24/solid";
</script>
<template>
  <div class="relative">
    <div class="grid grid-cols-2 md:grid-cols-3  h-screen">
      <div class="bg-[#081134] col-span-2">
        <div class="pt-2 md:pt-5 pl-2 md:pl-5 mb-8 md:mb-14">
          <RouterLink to="/">
            <img src="https://www.instant-gaming.com/themes/igv2/images/logos/logo-horizontal.svg" alt="logo"
              class="h-8 md:h-9" />
          </RouterLink>
        </div>

        <div class="max-w-[630px] mx-auto px-4">
          <h1 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-200 mb-4 md:mb-8 text-center">
            Register</h1>
          <form>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-3">
              <div>
                <input type="text"
                  class="text-sm w-full px-3 md:px-4 h-10 md:h-12 transition-all bg-[#04091c] rounded-full text-white border-2 border-transparent focus:outline-none focus:border-[#b6bff4] mb-3 md:mb-4"
                  placeholder="First Name" />
              </div>

              <div>
                <input type="text"
                  class="text-sm w-full px-3 md:px-4 h-10 md:h-12 transition-all bg-[#04091c] rounded-full text-white border-2 border-transparent focus:outline-none focus:border-[#b6bff4] mb-3 md:mb-4"
                  placeholder="Last Name" />
              </div>

            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-3">
              <div>
                <input type="email"
                  class="text-sm w-full px-3 md:px-4 h-10 md:h-12 transition-all bg-[#04091c] rounded-full text-white border-2 border-transparent focus:outline-none focus:border-[#b6bff4] mb-3 md:mb-4"
                  placeholder="Email" />
              </div>

              <div>
                <input type="password"
                  class="text-sm w-full px-3 md:px-4 h-10 md:h-12 transition-all bg-[#04091c] rounded-full text-white border-2 border-transparent focus:outline-none focus:border-[#b6bff4] mb-3 md:mb-4"
                  placeholder="Password" />
              </div>

            </div>
            <div>
              <input type="tel"
                class="text-sm w-full px-3 md:px-4 h-10 md:h-12 transition-all bg-[#04091c] rounded-full text-white border-2 border-transparent focus:outline-none focus:border-[#b6bff4] mb-3 md:mb-4"
                placeholder="Contact Number" />
            </div>

            <div>
              <input checked id="checkbox" type="checkbox" class="hidden peer bg-transparent" />
              <label for="checkbox"
                class="relative inline-flex items-center justify-center p-1 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-[#081134] size-5 md:size-6 cursor-pointer border-2 border-[#535C91] rounded-full overflow-hidden mb-3 md:mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-full fill-[#535C91]" viewBox="0 0 520 520">
                  <path
                    d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                    data-name="7-Check" data-original="#000000" />
                </svg>
              </label>
              <label for="checkbox" class="text-gray-200 ml-1 text-sm sm:text-base">I agree with the
                <a href="#" class="hover:text-[#636eab] text-gray-200 underline transition-all">Terms </a>and
                <a href="#" class="hover:text-[#636eab] text-gray-200 underline transition-all">Privacy policy</a>
              </label>
            </div>
            <button type="submit"
              class="bg-[#535C91] hover:bg-[#384176] text-white rounded-full h-10 md:h-12 flex items-center justify-center md:py-4 transition-all w-full font-semibold text-md md:text-lg">
              Submit
            </button>
          </form>

          <div class="py-4 md:py-6 flex justify-center">
            <RouterLink to="/login" class="hover:text-[#636eab] text-gray-200 flex gap-1 items-center">
              <ChevronDoubleLeftIcon class="size-3 mt-[2px]" />
              <span class="text-md">Back</span>
            </RouterLink>
          </div>
        </div>
      </div>

      <div class="hidden md:flex justify-center items-center col-span-1 bg-stone-200">
        <div class="px-4">
          <h1 class="text-3xl lg:text-4xl font-semibold text-gray-900 mb-3 text-center">Welcome back!</h1>
          <p class="text-gray-900 mb-4 text-sm text-center">It's great to see you again. Let's continue where you left
            off and make the most of your journey!</p>
          <RouterLink to="/login">
            <button type="submit"
              class="bg-[#081134] hover:bg-[#152668] text-white rounded-full h-10 flex items-center justify-center md:py-4 transition-all w-full text-md md:text-lg">
              Login
            </button>
          </RouterLink>
        </div>
      </div>

      <div
        class="p-1 bg-gray-100 md:bg-[#081134] rounded-full text-[#081134] md:text-gray-100 absolute top-2 md:top-4  md:right-4 right-2">
        <RouterLink to="/">
          <XMarkIcon class="size-4 md:size-5" />
        </RouterLink>
      </div>

    </div>
  </div>
</template>