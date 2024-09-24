<script setup>
import {StarIcon,UserIcon} from "@heroicons/vue/24/solid";
</script>
<template>
    <div class="p-4 bg-stone-300 rounded-lg flex gap-4 items-start">
            <div class="p-2 rounded-full bg-stone-400">
                <UserIcon class="size-5 text-gray-200" />
            </div>
            <div class="">
                <h1 class="text-gray-600 text-sm font-bold mb-1">SneakyArcher</h1>
                <div class="flex">
                <StarIcon class="size-4 text-yellow-500" />
                <StarIcon class="size-4 text-yellow-500" />
                <StarIcon class="size-4 text-yellow-500" />
                <StarIcon class="size-4 text-yellow-500" />
                <StarIcon class="size-4 text-yellow-500" />
                </div>
                <p class="text-gray-600 line-clamp-2">very good but i got 2 key idk why.very good but i got 2 key idk why.very good but i got 2 key idk why</p>
            </div>
    </div>
</template>