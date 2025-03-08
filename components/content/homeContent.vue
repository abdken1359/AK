<template>
    <div>
        <section class="my-10 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-3 lg:gap-10">
            <template v-for="c in contents" :key="c.id">
                <NuxtLink :to="c.to">
                <article class="bg-neutral-800 group overflow-hidden rounded-xl">
               <div class="w-full overflow-hidden">
               <NuxtImg :src="c.img"  class="object-cover transition-all duration-300 group-hover:scale-105 rounded-t-xl w-full h-40 md:h-72 " :alt="c.alt"/>
               </div>
               <div class="p-5">
                <h3 class=" font-bold">{{ c.title }}</h3>
                   <p>{{ c.text }}</p>
               </div>
           </article>
        </NuxtLink>
            </template>
            
        </section>
    </div>
</template>
<script setup lang="ts">
const contents=ref([
    {id:1,to:'/about',img:'/images/aboutMe.png',alt:'Image of a note saying About Me',title:'About Me',text:'Know more about me.'},
    {id:2,to:'/',img:'/images/blog.png',alt:'My blog Image',title:'Blog',text:'Explore my blog.'},
    {id:3,to:'/',img:'/images/showcase.png',alt:'Image of an oval ',title:'Showcase',text:'See projects built by me.'}
])
</script>