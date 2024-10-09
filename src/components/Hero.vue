<template>
  <RouterLink to="/game-details">
    <div class="relative h-[250px] sm:h-[440px] mb-8 md:mb-20">
      <img src="https://gaming-cdn.com/img/products/10140/hcover/1400x500/10140.jpg?v=1725274116" alt=""
        class="w-full h-full object-cover" />
      <div class="absolute inset-0  bg-[#222435] opacity-40"></div>

      <div class="absolute top-1/2 -translate-y-1/2 px-4 inset-x-0 z-10 max-w-7xl mx-auto">
        <h1 class="text-white font-bold line-clamp-2 text-2xl md:text-3xl lg:text-4xl mb-2 md:mb-4 w-4/5 md:w-2/5">
          Warhammer 40,000: Space Marine 2
        </h1>
        <div class="discount flex">
          <span class="mr-2 px-1 md:px-2 py-1 rounded-lg bg-red-700 text-white text-sm md:text-lg">
            -24%
          </span>
          <span class="text-white text-md sm:text-lg md:text-2xl">45.89€</span>
        </div>
      </div>
      
    </div>
  </RouterLink>
</template>