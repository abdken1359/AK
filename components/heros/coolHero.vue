<style scoped>
.animeIt{
    animation: letsgob 10s infinite alternate ease-in-out;
}

@keyframes letsgob {
    0%{
        transform: translateY(0);
    }
    100%{
        transform: translateY(-350px);
    }
    
}
</style>
<template>
    <div>
        <section class=" bg-neutral-900/50   md:px-10 overflow-hidden md:py-10 lg:py-20 p-5 flex gap-4 items-center  flex-row md:flex-row mt-16 rounded-xl border-gray-500 border  ">
         <div class="md:w-3/4">
            <h1 class="lg:text-6xl text-left  md:text-left font-bold md:text-5xl text-4xl text-violet-600 uppercase">Abdiel Kengne</h1>
            <h2 class="text-2xl mt-4 text-left md:text-left lg:text-4xl md:text-3xl">Enthusiastic <span class="text-blue-400 font-bold">Frontend Developer</span> based in Edmundston
        </h2>
        </div>

        <div class="md:w-2/5 relative h-60 hidden md:block overflow-hidden my-auto ml-auto">
            <NuxtImg src="/heroImg.svg" class="object-cover  hidden mx-auto md:w-3/4 h-50" alt="A graphical representation of a computer"/>
        <section class="animeIt absolute right-2 md:right-10 ml-auto">
            <template v-for="(i,index) in images" :key="index">
                <NuxtImg class="object-cover  ml-auto md:w-16 w-10 grayscale hover:grayscale-0 mt-4" :src="i.src" :alt="i.alt"/>
            </template>
            
        </section>
        </div>
        </section>
    </div>
</template>
<script setup lang="ts">
const wordCarousel=ref([
    {text:'HTML',class:'text-red-500'},
    {text:'CSS',class:'text-blue-500'},
    {text:'Javascript',class:'text-yellow-500'},
    {text:'Tailwind',class:'text-sky-500'},
    {text:'Vue',class:'text-green-500'},
    {text:'Nuxt',class:'text-purple-500'}
])
const images=ref([
    {src:'/images/techs/html.png',alt:'HTML Image'},
    {src:'/images/techs/css.png',alt:'CSS Image'},
    {src:'/images/techs/js.png',alt:'Javascript Image'},
    {src:'/images/techs/tailwind.png',alt:'Tailwind CSS Image'},
    {src:'/images/techs/vue.png',alt:'Vue JS Image'},
    //{src:'https://pinia.vuejs.org/logo.svg',alt:'Pinia Image'},
    {src:'/images/techs/nuxt.png',alt:'Nuxt Image'}
])
const counter=ref(0)
const moveIt=()=>{
    setInterval(()=>{
           
   counter.value++;
   if(counter.value===wordCarousel.value.length){
    counter.value=0
   }

    },2000)
}
onMounted(()=>{
    moveIt()
})
</script>