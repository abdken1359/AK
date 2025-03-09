<template>
    <div>
    <main>
    <UContainer> 
        <section class="mt-10  mb-10">
            <div class="text-3xl lg:text-4xl text-slate-50 font-bold text-center">ABOUT ME</div>
        </section>
        <section class="mb-10 lg:mb-20">
            <p>I am a frontend developer based in Canada 🍁. I love ❤️ <NuxtLink href="https://vuejs.org" class="text-green-500 font-bold" target="_blank">Vue</NuxtLink>
                 and <NuxtLink href="https://nuxt.com/" class="text-green-500 font-bold" target="_blank">Nuxt</NuxtLink>
                . I delight in sharing my knowledge with others through my blog.
                </p>
                <p>You can contact me at <NuxtLink class="text-violet-500" href="mailto:abdielkengne6@gmail.com">abdielkengne6@gmail.com</NuxtLink> </p>
           <p class="my-6 font-bold text-xl">OR</p>
            <template v-for="o in otherContacts" :key="o.id">
                <NuxtLink :href="o.href" target="_blank" class="w-3/4 group block md:w-1/3 lg:w-1/4">
                <div class="p-4 flex   my-4 align-middle gap-4  hover:shadow-md transition-all duration-300 hover:shadow-gray-200 rounded-lg bg-neutral-800">
                    <div>
                    <UAvatar  class="grayscale group-hover:grayscale-0" :src="o.img" :alt="o.alt"/>
                    </div>
                    <div class="my-auto">
                        <p>{{ o.text }}</p>
                    
                    </div>
                    
                </div>
            </NuxtLink>

            </template>
            
            </section>
    </UContainer>

    </main>
    <footer v-show="false">
         <ContentFooter/>
</footer>
</div>
</template>
<script setup lang="ts">
useHead({
    htmlAttrs:{
     class:'dark'
    },
    title:'About | AK',
})
const otherContacts=ref([
    {id:1,
    href:'https://www.facebook.com/profile.php?id=61555117693474',
    text:'Message me on Facebook',
    img:'https://1.bp.blogspot.com/-S8HTBQqmfcs/XN0ACIRD9PI/AAAAAAAAAlo/FLhccuLdMfIFLhocRjWqsr9cVGdTN_8sgCPcBGAYYCw/s1600/f_logo_RGB-Blue_1024.png'
   ,
   alt:'Facebook Image'
    },
    {
        id:2,
        href:'https://github.com/abdken1359',
        text:'Follow me on Github',
        img:'https://cdn.iconscout.com/icon/free/png-256/github-153-675523.png',
        alt:'Github Image'
    }
])
</script>