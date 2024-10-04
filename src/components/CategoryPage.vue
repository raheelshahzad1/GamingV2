<script setup>
    import Navbar from './Navbar.vue';
    import Footer from './Footer.vue';    
    import Game from './Game.vue';
</script>
<template>
    <Navbar/>
        <div class="max-w-7xl mx-auto px-4 mb-10 md:pb-12">
        <h1 class="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 py-4 sm:py-6 md:py-8 lg:py-10 text-center">
            Action
        </h1>

                    <div class="flex items-center gap-3 flex-col sm:flex-row justify-end mb-10">
                        <span class="text-gray-600 font-medium text-sm">Adjust Price</span>
                       <div class="flex gap-3">
                        <input type="number" min="0" value="0" class="w-24 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-300 rounded p-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer" />
                        <input type="number" value="10000" class="w-24 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-300 rounded p-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer" />
                       </div>
                    </div>

                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
                        <Game v-for="(item, index) in 16" :key="index" />
                    </div>
        </div>
    <Footer/>
</template>