<script setup>
import { ref, onBeforeUnmount } from "vue";
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";
import Game from "./Game.vue";
import Review from "./Review.vue";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import {
  CheckIcon,
  FaceSmileIcon,
  FireIcon,
  TagIcon,
  HeartIcon,
  ShoppingCartIcon,
  PencilSquareIcon,
  StarIcon,
  XMarkIcon
} from "@heroicons/vue/24/solid";
const images = ref([
  {
    src: "https://gaming-cdn.com/images/products/10140/616x353/warhammer-40-000-space-marine-2-pc-game-steam-cover.jpg?v=1725274116",
  },
  {
    src: "https://gaming-cdn.com/images/products/10140/screenshot/warhammer-40-000-space-marine-2-pc-game-steam-wallpaper-1-big.jpg?v=1725274116",
  },
  {
    src: "https://gaming-cdn.com/images/products/10140/screenshot/warhammer-40-000-space-marine-2-pc-game-steam-wallpaper-2-thumbv2.jpg?v=1725274116",
  },
  {
    src: "https://gaming-cdn.com/images/products/10140/screenshot/warhammer-40-000-space-marine-2-pc-game-steam-wallpaper-5-thumbv2.jpg?v=1725274116",
  },
  {
    src: "https://gaming-cdn.com/images/products/10140/screenshot/warhammer-40-000-space-marine-2-pc-game-steam-wallpaper-3-thumbv2.jpg?v=1725274116",
  },
]);
const thumbnails = ref(images.value);
const mainOptions = ref({
  type: "fade",
  heightRatio: 0.5,
  pagination: false,
  arrows: true,
  cover: true,
});
const mainSplide = ref(null);
const goToSlide = (index) => {
  if (mainSplide.value) {
    mainSplide.value.splide.go(index);
  }
};
onBeforeUnmount(() => {
  if (mainSplide.value) {
    mainSplide.value.splide.destroy();
  }
});
const isExpanded = ref(false);
const toggleDescription = () => {
  isExpanded.value = !isExpanded.value;
};
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'
const isOpen = ref(false)
function closeModal() {
  isOpen.value = false
}
function openModal() {
  isOpen.value = true
}
</script>
<template>
  <Navbar />
  <div class="bg-stone-200">
    <div class="p-4 sm:p-9">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 md:mb-20 max-w-7xl mx-auto">
        <div>
          <section
            id="main-carousel"
            class="splide"
            aria-label="My Awesome Gallery">
            <Splide ref="mainSplide" :options="mainOptions">
              <SplideSlide v-for="(image, index) in images" :key="index">
                <img :src="image.src" :alt="'Image ' + (index + 1)" />
              </SplideSlide>
            </Splide>
          </section>
          <ul id="thumbnails" class="thumbnails">
            <li
              v-for="(thumbnail, index) in thumbnails"
              :key="index"
              class="thumbnail"
              @click="goToSlide(index)">
              <img :src="thumbnail.src" :alt="'Thumbnail ' + (index + 1)" />
            </li>
          </ul>
        </div>
        <div class="p-5 rounded-lg bg-transparent border-[2px] border-[#535C91] h-fit">
          <h1 class="text-lg sm:text-xl md:text-2xl font-semibold text-gray-600 mb-3 text-center">
            Warhammer 40,000: Space Marine 2
          </h1>
          <div class="flex p-2 md:p-3 rounded-full backdrop-blur-md bg-black/30 text-center w-fit mx-auto">
            <div class="border-r border-[#322f6f] px-2">
              <router-link
                to="#"
                class="flex items-center gap-1 hover:text-[#535C91] text-gray-900">
                <div>
                  <FaceSmileIcon class="size-4 md:size-5 font-bold" />
                </div>
                <p class="text-sm">Steam</p>
              </router-link>
            </div>
            <div class="border-r border-[#322f6f] items-center px-2 gap-1 hidden lg:flex text-gray-900">
              <CheckIcon class="size-4 md:size-5 font-bold text-green-600" />
              <p class="text-sm">Digital download</p>
            </div>
            <div class="px-2 flex items-center gap-1 text-gray-900">
              <CheckIcon class="size-4 md:size-5 font-bold text-green-600" />
              <p class="text-sm">In Stock</p>
            </div>
          </div>
          <div class="flex gap-1 justify-center items-center my-3">
            <FireIcon class="size-4 md:size-5 font-bold text-red-700" />
            <p class="text-md text-gray-900">161 users on this page</p>
          </div>
          <div class="grid grid-cols-2 gap-2 mb-3">
            <div class="relative">
              <select class="text-gray-200 text-sm bg-[#04091c] rounded-lg focus:outline-none focus:border-[#535C91] border-2 border-transparent hover:border-[#535C91] w-full appearance-none h-10 md:h-12 md:text-base pl-3 pr-10">
                <option class="" selected>PC</option>
                <option class="">Xbox Series X|S</option>
              </select>
              <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-200 pointer-events-none flex items-center justify-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4"
                  viewBox="0 0 24 24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </div>
            <div class="relative">
              <select class="text-sm text-gray-200 bg-[#04091c] h-10 md:h-12 rounded-lg focus:outline-none focus:border-[#535C91] border-2 border-transparent hover:border-[#535C91] w-full appearance-none md:text-base pl-3 pr-10">
                <option selected>Standard Edition</option>
                <option>Gold Edition</option>
                <option>Ultra Edition</option>
              </select>
              <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-200 pointer-events-none flex items-center justify-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4"
                  viewBox="0 0 24 24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </div>
          </div>
          <div class="flex justify-center gap-3 items-center mb-3">
            <div class="text-gray-900 flex gap-1 items-center">
              <TagIcon class="size-4" />
              <del>60€</del>
            </div>
            <p class="text-[#8190e3]">-26%</p>
            <div class="text-gray-900 text-lg md:text-2xl">44.39€</div>
          </div>
          <div class="w-full">
            <button class="bg-[#535C91] hover:bg-[#384176] flex gap-2 items-center justify-center text-gray-200 w-full rounded-full px-2 lg:px-3 md:h-12 h-10 transition-all font-semibold text-md md:text-xl">
              <ShoppingCartIcon class="size-5"/>
              <span>Add to cart</span>
            </button>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-20 mb-8 md:mb-20 max-w-7xl mx-auto">
        <div>
          <h1 class="text-xl md:text-2xl font-semibold text-gray-600 mb-3 md:mb-4">
            Description
          </h1>
          <p :class="isExpanded ? '' : 'line-clamp-5'" class="text-gray-900">
            Embody the superhuman skill and brutality of a Space Marine. Unleash
            deadly abilities and devastating weaponry to obliterate the
            relentless Tyranid swarms. Defend the Imperium in spectacular
            third-person action in solo or multiplayer modes. Fight the enemies
            of Mankind as Lieutenant Demetrian Titus in this sequel to 2011’s
            Space Marine, and prove your loyalty once again as you are
            reinstated to the Ultramarines. Hold at bay the horrors of the
            galaxy in epic.
          </p>
          <router-link
            to="#"
            @click.prevent="toggleDescription"
            class="hover:text-[#535C91] text-gray-900 underline">
            {{ isExpanded ? "Read less" : "Read more" }}
          </router-link>
        </div>
        <div class="">
          <div class="md:flex items-center mb-3 hidden">
            <StarIcon class="size-5 text-yellow-500" />
            <p class="ms-2 text-sm font-bold text-gray-900 dark:text-white">
              4.95
            </p>
            <span class="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
            <a href="#review" class="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">
              73 reviews
            </a>
          </div>
          <div class="flex gap-8">
            <ul>
              <li class="text-gray-900">Developer:</li>
              <li class="text-gray-900">Publisher:</li>
              <li class="text-gray-900">Release date:</li>
              <li class="text-gray-900">Genre:</li>
            </ul>
            <ul>
              <li class="text-gray-900 hover:text-[#535C91] cursor-pointer">
                Saber Interactive
              </li>
              <li class="text-gray-900 hover:text-[#535C91] cursor-pointer">
                Focus Home Interactive
              </li>
              <li class="text-gray-900">9 September 2024</li>
              <li class="">
                <RouterLink to="#"
                  class="text-gray-900 hover:text-[#535C91] cursor-pointer">
                  Action,
                </RouterLink>
                <RouterLink to="#"
                  class="text-gray-900 hover:text-[#535C91] cursor-pointer">
                  Adventure,
                </RouterLink>
                <RouterLink to="#"
                  class="text-gray-900 hover:text-[#535C91] cursor-pointer">
                  RPG
                </RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="mb-8 md:mb-20 max-w-7xl mx-auto">
        <h1 class="text-xl font-semibold text-gray-600 mb-4">
          Similar products
        </h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <Game v-for="(item, index) in 8" :key="index" />
        </div>
      </div>

      <div class="mb-8 md:mb-20 max-w-7xl mx-auto" id="review">
        <h1 class="text-xl font-semibold text-gray-600 mb-4">
          <span>29</span> Reviews
        </h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6  mb-4 md:mb-7">
          <Review v-for="item  in 6"  />
        </div>
        <div class="rounded-lg p-3 md:p-4 bg-stone-300 flex flex-col sm:flex-row justify-between">
         <div class="flex gap-1 md:gap-2 items-center justify-center sm:justify-start mb-3 sm:mb-0">
          <p class="text-gray-600 text-sm">Product Rating</p>
          <span class="font-bold text-sm text-gray-600">3.7 out of 5</span>
         </div>
          <button
            @click="openModal"
            class="bg-[#535C91] hover:bg-[#384176] flex gap-1 items-center justify-center text-gray-200 rounded-full px-3 py-2 transition-all text-sm md:text-md">
            <PencilSquareIcon class="size-4 text-gray-200" />
            <span>Add product review</span>
          </button>
        </div>
      </div>

      <!-- <div class="mb-8 md:mb-20 max-w-7xl mx-auto">
        <h1 class="text-xl font-semibold text-gray-600 mb-4">Reviews</h1>
        <div class="rounded-lg p-3 md:p-4 bg-stone-300">
          <div class="border-4 border-green-600 rounded-full px-3 py-2 font-semibold text-green-600 w-fit mx-auto flex items-center justify-center mb-2">
            <span>10</span>
          </div>
          <p class="text-[#535C91] font-semibold text-center">
            Game review score
          </p>
          <p class="text-gray-600 text-center mb-2">
            based on 142 reviews, all languages included
          </p>
          <button
            @click="openModal"
            class="bg-[#535C91] hover:bg-[#384176] flex gap-1 items-center justify-center text-gray-200 rounded-full px-3 py-2 transition-all w-fit mx-auto text-sm md:text-lg">
            <span>Review this game</span>
            <PencilSquareIcon class="size-4 text-gray-200" />
          </button>
        </div>
      </div> -->
    </div>
    <!-- Modal -->
    <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0">
        <div class="fixed inset-0 bg-black/25" />
      </TransitionChild>
      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95">
            <DialogPanel class="w-full max-w-md transform overflow-hidden rounded-lg bg-white text-left align-middle shadow-xl transition-all">
              <DialogTitle as="h3" class="text-lg md:text-xl flex justify-between items-center font-medium leading-6 text-gray-700 p-2 border-b border-gray-200">
                <h2 class="text-xl md:text-2xl font-semibold text-gray-700">
                 Review
                </h2>
                <button @click="closeModal">
                  <XMarkIcon class="size-6"/>
                </button>
              </DialogTitle>
              <div class="p-4">
          <label for="message" class="block mb-2 text-md md:text-lg font-medium text-gray-700 dark:text-white">
            Add Your review
          </label>
          <textarea
            id="message"
            rows="3"
            class="mb-2 block p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border-2 focus:outline-none focus:border-[#535C91] hover:border-[#535C91]"
            placeholder="Write your thoughts here..."></textarea>
          <button @click="closeModal"
          class="bg-[#535C91] hover:bg-[#384176] flex gap-2 items-center justify-center text-gray-200 w-full rounded-full px-2 h-10 transition-all text-md md:text-lg">
            Submit
          </button>
        </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
  </div>
  <Footer />
</template>
<style scoped>
body {
  overflow: hidden;
}
.thumbnails {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}
.thumbnail {
  cursor: pointer;
  margin-right: 10px;
}
.thumbnail img {
  width: 100px;
  height: 50px;
  object-fit: cover;
}
.thumbnail:last-child {
  margin-right: 0;
}
</style>