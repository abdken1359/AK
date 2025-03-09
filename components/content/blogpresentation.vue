<template>
    <section class="mb-10">
            <div class=" grid md:grid-cols-2 w-full align-middle justify-items-center justify-center grid-cols-1 gap-4 lg:gap-6 lg:grid-cols-3 ">
            <template v-for="b in blogData" :key="b.id">
            <NuxtLink :to="b.to">
            <article class="bg-neutral-800 group mx-auto overflow-hidden rounded-xl ">
                <div class="w-full overflow-hidden">
                    <NuxtImg :src="b.image" :alt="b.alt" class="object-cover transition-all duration-300 group-hover:scale-105 rounded-t-xl w-full h-40 md:h-72"/>

                </div>
                <div class="p-4">
                    <div class="md:text-2xl text-xl font-bold">{{ b.title }}</div>
                    <div class="flex mt-3 align-middle">
                        <p>{{ b.author }}</p><p class="ml-auto text-gray-200">{{ b.created }}</p>
                    </div>
                    <div class="flex mt-4 align-middle flex-wrap gap-4">
                    <template v-for="(t,index) in b.tags" :key="index">
                        <div class="py-1 px-2 text-center rounded-lg bg-neutral-600">{{ t }}</div>
                    </template>
                </div>

                </div>
            </article>
        </NuxtLink>
        </template>
        </div>
        </section>
</template>
<script setup lang="ts">
import { blogPost } from '~/assets/blog';

const blog=useBlogStore();
const blogData=computed(()=>{
    return blogPost.reverse()
})
</script>