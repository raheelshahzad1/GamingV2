<script setup>
import Navbar from './Navbar.vue';
import Footer from './Footer.vue';
import Game from './Game.vue';
import {
    FunnelIcon,
    TrashIcon
} from "@heroicons/vue/24/solid";
</script>
<template>
<Navbar />
<div class="bg-stone-200">
    <div class="max-w-7xl mx-auto">
        <h1 class="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 py-4 sm:py-6 md:py-8 lg:py-10 text-center">Gear for Every Gamer</h1>
        <div class="sm:flex justify-between items-center p-4">
            <div class="mb-4 sm:mb-0">
                <h1 class="text-gray-700 font-bold text-xl sm:text-2xl">Action</h1>
                <p class="text-gray-500 text-sm">472 Products</p>
            </div>
            <div class="flex justify-end gap-2">
                <div class="flex items-center gap-2">
                    <span class="text-gray-700 font-bold text-nowrap text-sm hidden lg:inline">Sort by</span>
                    <div class="relative w-48">
                        <select class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-300 rounded pl-3 pr-8 py-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer">
                            <option value="brazil">1</option>
                            <option value="bucharest">Bucharest</option>
                            <option value="london">London</option>
                            <option value="washington">Washington</option>
                        </select>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" class="h-5 w-5 ml-1 absolute top-3.5 right-2.5 text-slate-700">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                        </svg>
                    </div>
                </div>
                <button class="inline lg:hidden p-3 rounded-lg border border-slate-300 hover:border-slate-400 shadow-sm focus:shadow-md transition duration-300 ease">
                    <FunnelIcon class="size-5 text-gray-600" />
                </button>
            </div>
        </div>
        <div class="grid grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            <div class="col-span-1 hidden lg:inline p-3 border border-slate-300 rounded-lg">
                <p class="text-gray-800 font-semibold mb-3">Categories</p>
                <ul class="max-h-96 overflow-y-scroll">
                    <li class="mb-1 flex items-center justify-between pr-1">
                        <router-link to="#" class="text-gray-600 hover:text-[#8a88d6]">Action</router-link>
                        <span class="text-gray-500 text-sm">232</span>
                    </li>
                    <li class="mb-1 flex items-center justify-between pr-1">
                        <router-link to="#" class="text-gray-600 hover:text-[#8a88d6]">Action</router-link>
                        <span class="text-gray-500 text-sm">232</span>
                    </li>
                    <li class="mb-1 flex items-center justify-between pr-1">
                        <router-link to="#" class="text-gray-600 hover:text-[#8a88d6]">Action</router-link>
                        <span class="text-gray-500 text-sm">232</span>
                    </li>
                    <li class="mb-1 flex items-center justify-between pr-1">
                        <router-link to="#" class="text-gray-600 hover:text-[#8a88d6]">Action</router-link>
                        <span class="text-gray-500 text-sm">232</span>
                    </li>
                    <li class="mb-1 flex items-center justify-between pr-1">
                        <router-link to="#" class="text-gray-600 hover:text-[#8a88d6]">Action</router-link>
                        <span class="text-gray-500 text-sm">232</span>
                    </li>
                    <li class="mb-1 flex items-center justify-between pr-1">
                        <router-link to="#" class="text-gray-600 hover:text-[#8a88d6]">Action</router-link>
                        <span class="text-gray-500 text-sm">232</span>
                    </li>
                    <li class="mb-1 flex items-center justify-between pr-1">
                        <router-link to="#" class="text-gray-600 hover:text-[#8a88d6]">Action</router-link>
                        <span class="text-gray-500 text-sm">232</span>
                    </li>
                    <li class="mb-1 flex items-center justify-between pr-1">
                        <router-link to="#" class="text-gray-600 hover:text-[#8a88d6]">Action</router-link>
                        <span class="text-gray-500 text-sm">232</span>
                    </li>
                    <li class="mb-1 flex items-center justify-between pr-1">
                        <router-link to="#" class="text-gray-600 hover:text-[#8a88d6]">Action</router-link>
                        <span class="text-gray-500 text-sm">232</span>
                    </li>
                    <li class="mb-1 flex items-center justify-between pr-1">
                        <router-link to="#" class="text-gray-600 hover:text-[#8a88d6]">Action</router-link>
                        <span class="text-gray-500 text-sm">232</span>
                    </li>
                    <li class="mb-1 flex items-center justify-between pr-1">
                        <router-link to="#" class="text-gray-600 hover:text-[#8a88d6]">Action</router-link>
                        <span class="text-gray-500 text-sm">232</span>
                    </li>
                    <li class="mb-1 flex items-center justify-between pr-1">
                        <router-link to="#" class="text-gray-600 hover:text-[#8a88d6]">Action</router-link>
                        <span class="text-gray-500 text-sm">232</span>
                    </li>
                    <li class="mb-1 flex items-center justify-between pr-1">
                        <router-link to="#" class="text-gray-600 hover:text-[#8a88d6]">Action</router-link>
                        <span class="text-gray-500 text-sm">232</span>
                    </li>
                </ul>
                <p class="text-gray-800 font-semibold mb-3">Platforms</p>
                <ul>
                    <li class="mb-1">
                        <div class="inline-flex items-center">
                            <label class="flex items-center cursor-pointer relative" for="check-1">
                                <input type="checkbox" class="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-[#535C91] checked:border-[#535C91]" id="check-1" />
                                <span class="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                </span>
                            </label>
                            <label class="cursor-pointer ml-2 text-[#8a88d6] text-sm" for="check-1">
                                Steam
                            </label>
                        </div>
                    </li>
                    <li class="mb-1">
                        <div class="inline-flex items-center">
                            <label class="flex items-center cursor-pointer relative" for="check-2">
                                <input type="checkbox" class="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-[#535C91] checked:border-[#535C91]" id="check-2" />
                                <span class="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                </span>
                            </label>
                            <label class="cursor-pointer ml-2 text-[#8a88d6] text-sm" for="check-2">
                                Steam
                            </label>
                        </div>
                    </li>
                    <li class="mb-1">
                        <div class="inline-flex items-center">
                            <label class="flex items-center cursor-pointer relative" for="check-3">
                                <input type="checkbox" class="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-[#535C91] checked:border-[#535C91]" id="check-3" />
                                <span class="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                </span>
                            </label>
                            <label class="cursor-pointer ml-2 text-[#8a88d6] text-sm" for="check-3">
                                Steam
                            </label>
                        </div>
                    </li>
                    <li class="mb-1">
                        <div class="inline-flex items-center">
                            <label class="flex items-center cursor-pointer relative" for="check-4">
                                <input type="checkbox" class="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-[#535C91] checked:border-[#535C91]" id="check-4" />
                                <span class="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                </span>
                            </label>
                            <label class="cursor-pointer ml-2 text-[#8a88d6] text-sm" for="check-4">
                                Steam
                            </label>
                        </div>
                    </li>
                    <li class="mb-1">
                        <div class="inline-flex items-center">
                            <label class="flex items-center cursor-pointer relative" for="check-5">
                                <input type="checkbox" class="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-[#535C91] checked:border-[#535C91]" id="check-5" />
                                <span class="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                </span>
                            </label>
                            <label class="cursor-pointer ml-2 text-[#8a88d6] text-sm" for="check-5">
                                Steam
                            </label>
                        </div>
                    </li>
                    <li class="mb-1">
                        <div class="inline-flex items-center">
                            <label class="flex items-center cursor-pointer relative" for="check-6">
                                <input type="checkbox" class="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-[#535C91] checked:border-[#535C91]" id="check-6" />
                                <span class="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                </span>
                            </label>
                            <label class="cursor-pointer ml-2 text-[#8a88d6] text-sm" for="check-6">
                                Steam
                            </label>
                        </div>
                    </li>
                    <li class="mb-1">
                        <div class="inline-flex items-center">
                            <label class="flex items-center cursor-pointer relative" for="check-7">
                                <input type="checkbox" class="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-[#535C91] checked:border-[#535C91]" id="check-7" />
                                <span class="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                </span>
                            </label>
                            <label class="cursor-pointer ml-2 text-[#8a88d6] text-sm" for="check-7">
                                Steam
                            </label>
                        </div>
                    </li>
                    <li class="mb-1">
                        <div class="inline-flex items-center">
                            <label class="flex items-center cursor-pointer relative" for="check-8">
                                <input type="checkbox" class="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-[#535C91] checked:border-[#535C91]" id="check-8" />
                                <span class="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                </span>
                            </label>
                            <label class="cursor-pointer ml-2 text-[#8a88d6] text-sm" for="check-8">
                                Steam
                            </label>
                        </div>
                    </li>
                    <li class="mb-1">
                        <div class="inline-flex items-center">
                            <label class="flex items-center cursor-pointer relative" for="check-9">
                                <input type="checkbox" class="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-[#535C91] checked:border-[#535C91]" id="check-9" />
                                <span class="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                </span>
                            </label>
                            <label class="cursor-pointer ml-2 text-[#8a88d6] text-sm" for="check-9">
                                Steam
                            </label>
                        </div>
                    </li>
                    <li class="mb-1">
                        <div class="inline-flex items-center">
                            <label class="flex items-center cursor-pointer relative" for="check-10">
                                <input type="checkbox" class="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-[#535C91] checked:border-[#535C91]" id="check-10" />
                                <span class="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                </span>
                            </label>
                            <label class="cursor-pointer ml-2 text-[#8a88d6] text-sm" for="check-10">
                                Steam
                            </label>
                        </div>
                    </li>
                    <li class="mb-1">
                        <div class="inline-flex items-center">
                            <label class="flex items-center cursor-pointer relative" for="check-11">
                                <input type="checkbox" class="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-[#535C91] checked:border-[#535C91]" id="check-11" />
                                <span class="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                </span>
                            </label>
                            <label class="cursor-pointer ml-2 text-[#8a88d6] text-sm" for="check-11">
                                Steam
                            </label>
                        </div>
                    </li>
                    <li class="mb-1">
                        <div class="inline-flex items-center">
                            <label class="flex items-center cursor-pointer relative" for="check-12">
                                <input type="checkbox" class="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-[#535C91] checked:border-[#535C91]" id="check-12" />
                                <span class="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                </span>
                            </label>
                            <label class="cursor-pointer ml-2 text-[#8a88d6] text-sm" for="check-12">
                                Steam
                            </label>
                        </div>
                    </li>
                    <li class="mb-1">
                        <div class="inline-flex items-center">
                            <label class="flex items-center cursor-pointer relative" for="check-13">
                                <input type="checkbox" class="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-[#535C91] checked:border-[#535C91]" id="check-13" />
                                <span class="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                </span>
                            </label>
                            <label class="cursor-pointer ml-2 text-[#8a88d6] text-sm" for="check-13">
                                Steam
                            </label>
                        </div>
                    </li>
                    <li class="mb-1">
                        <div class="inline-flex items-center">
                            <label class="flex items-center cursor-pointer relative" for="check-14">
                                <input type="checkbox" class="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-[#535C91] checked:border-[#535C91]" id="check-14" />
                                <span class="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                </span>
                            </label>
                            <label class="cursor-pointer ml-2 text-[#8a88d6] text-sm" for="check-14">
                                Steam
                            </label>
                        </div>
                    </li>
                    <li class="mb-1">
                        <div class="inline-flex items-center">
                            <label class="flex items-center cursor-pointer relative" for="check-15">
                                <input type="checkbox" class="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-[#535C91] checked:border-[#535C91]" id="check-15" />
                                <span class="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                </span>
                            </label>
                            <label class="cursor-pointer ml-2 text-[#8a88d6] text-sm" for="check-15">
                                Steam
                            </label>
                        </div>
                    </li>
                    <li class="mb-1">
                        <div class="inline-flex items-center">
                            <label class="flex items-center cursor-pointer relative" for="check-16">
                                <input type="checkbox" class="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-[#535C91] checked:border-[#535C91]" id="check-16" />
                                <span class="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                </span>
                            </label>
                            <label class="cursor-pointer ml-2 text-[#8a88d6] text-sm" for="check-16">
                                Steam
                            </label>
                        </div>
                    </li>
                    <li class="mb-1">
                        <div class="inline-flex items-center">
                            <label class="flex items-center cursor-pointer relative" for="check-17">
                                <input type="checkbox" class="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-[#535C91] checked:border-[#535C91]" id="check-17" />
                                <span class="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                </span>
                            </label>
                            <label class="cursor-pointer ml-2 text-[#8a88d6] text-sm" for="check-17">
                                Steam
                            </label>
                        </div>
                    </li>
                </ul>
                <p class="text-gray-800 font-semibold mb-3">Price</p>
                <div class="flex gap-2 mb-4">
                    <input type="number" min="0" value="0" class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-300 rounded p-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer" />
                    <input type="number" value="10000" class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-300 rounded p-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer" />
                </div>
                <button class="flex justify-center w-full bg-[#535C91] hover:bg-[#384176] items-center gap-1 text-gray-200 px-3 py-2 transition-all text-sm md:text-md rounded-lg">
                    <TrashIcon class="size-4" />
                    <span>Clear Filter</span>
                </button>
            </div>
            <div class="col-span-3 p-3 border border-slate-300 rounded-lg">
                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <Game v-for="(item, index) in 20" :key="index" />
                </div>
            </div>
        </div>
        <div>
            <!-- Pagination -->
        </div>
    </div>
</div>
<Footer />
</template>

<style scoped>
::-webkit-scrollbar {
    width: 5px;
}

::-webkit-scrollbar-thumb {
    background: #a7afdc;
}
</style>
