<template>
  <RouterLink to="/game-details">
    <div class="relative h-[250px] sm:h-[440px] mb-8 md:mb-20">

      <img src="https://gaming-cdn.com/img/products/16024/pcover/1920x620/16024.jpg?v=1725464034" 
      class="w-full h-full object-cover"/>

      <div class="absolute inset-0 bg-black opacity-40"></div>
      <div class="absolute inset-0 z-10 flex flex-col justify-center items-center gap-2 sm:gap-4 px-2">
        <h1 class="text-white font-bold line-clamp-2 pb-1 text-center text-2xl md:text-3xl lg:text-4xl max-w-screen-md">
          Age of Mythology: Retold Premium Edition
        </h1>
        <div class="discount gap-1 sm:gap-2 items-center justify-center flex">
          <span class="px-1 md:px-2 py-1 rounded-lg bg-red-700 text-white text-sm md:text-lg">
            -24%
          </span>
          <span class="text-white sm:text-lg md:text-2xl">45.89€</span>
        </div>

      </div>
    </div>
  </RouterLink>
</template>