<template>
  <div>
    <footer class="bg-[#050c25] pt-12 px-4 md:px-10 font-sans tracking-wide">

      <div class="lg:max-w-[50%] mx-auto text-center">
        <h3 class="text-3xl font-bold text-gray-200">Newsletter</h3>
        <p class="text-sm mt-6 text-gray-400">
          Subscribe to our newsletter and stay up to date with the latest news,
          updates, and exclusive offers. Get valuable insights. Join our
          community today!
        </p>
        <div class="bg-[#dddddd] flex px-2 py-1.5 rounded-full text-left mt-10">
          <input type="email"
            placeholder="Enter your email"
            class="w-full outline-none bg-transparent text-sm pl-4"/>

          <button type="button"
            class="bg-[#535C91] hover:bg-[#384176] text-white text-sm rounded-full px-5 py-2.5 ml-4 transition-all">
            Submit
          </button>
        </div>
      </div>

      <hr class="border-[#322f6f] my-12"/>

      <div class="grid max-sm:grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-4 gap-8 pb-12">

        <div>
      <RouterLink to="/">
        <img src="https://www.instant-gaming.com/themes/igv2/images/logos/logo-horizontal.svg" alt="logo" class="h-9 mb-3" />
      </RouterLink>
          <p class="text-gray-400 mb-2 text-sm">
            Paraon Ecom - SMC Limited.14 Archer road, Kololo, Kampala, Uganda.Paraon Ecom - SMC Limited is an Uganda Incorporation registered under the laws of Uganda
          </p>
        </div>

        <div>
          <h4 class="text-lg font-bold mb-6 text-gray-200">User Terms & Privacy</h4>
          <ul class="space-y-4">
            <li>
              <RouterLink to="#" class="text-gray-400 hover:text-gray-300 text-[15px]">
                Terms & Conditions
              </RouterLink>
            </li>

            <li>
              <RouterLink to="#" class="text-gray-400 hover:text-gray-300 text-[15px]">
                Returns & Refunds
              </RouterLink>
            </li>

            <li>
              <RouterLink to="#" class="text-gray-400 hover:text-gray-300 text-[15px]">
                Privacy Policy
              </RouterLink>
            </li>

            <li>
              <RouterLink to="#" class="text-gray-400 hover:text-gray-300 text-[15px]">
                Cookie Policy
              </RouterLink>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-lg font-bold mb-6 text-gray-200">Popular Categories</h4>
          <ul class="space-y-4">
            <li>
              <RouterLink to="#" class="text-gray-400 hover:text-gray-300 text-[15px]">
                Action
              </RouterLink>
            </li>

            <li>
              <RouterLink to="#" class="text-gray-400 hover:text-gray-300 text-[15px]">
                Adventure
              </RouterLink>
            </li>

            <li>
              <RouterLink to="#" class="text-gray-400 hover:text-gray-300 text-[15px]">
                RPG
              </RouterLink>
            </li>

            <li>
              <RouterLink to="#" class="text-gray-400 hover:text-gray-300 text-[15px]">
                Anime
              </RouterLink>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-lg font-bold mb-6 text-gray-200">For Inquiries</h4>
          <ul class="space-y-4">
            <li>
              <u>
              <RouterLink to="#" class="text-gray-400 hover:text-gray-300 text-[15px]">
                support@gaminguin.com
              </RouterLink>
              </u>
            </li>

            <li>
            <RouterLink to="#" class="text-gray-400 hover:text-gray-300 text-[15px]">
                Live chat
            </RouterLink>
            </li>
          </ul>
        </div>

      </div>
      <div class="border-t-[1px] border-[#322f6f] text-center text-gray-200 py-6 font-semibold">
        <h2>© 2024 Gaminguin. All Rights Reserved.</h2>
      </div>
    </footer>
  </div>
</template>