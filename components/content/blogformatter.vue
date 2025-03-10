<style scoped>
.imageHeight{
    height: 80vh;
}
.container{
    max-width: 80%;
    margin: auto;
    padding: 10px;
}
@media screen AND (max-width: 768px) {
    .imageHeight{
        height: 50vh !important;
    }
    .container{
        width: 100%;
        max-width: 1200px;
        padding: 5px;
    }
    
}
@media  screen AND (max-width:1024px) {
    .container{
       max-width: 90%;
    }
}
</style>
<template>

    <main>

    <div class="container">
    <article class="my-10">
        <div class="overflow-hidden mb-10">
           <NuxtImg :src="image" class="rounded-xl w-full object-cover imageHeight" :alt="alt"/>
           <section class="mt-5 md:border-l-8 border-l-neutral-300 md:pl-4">
         <div class="text-2xl md:text-3xl lg:text-4xl font-extrabold text-neutral-100">{{ title }}</div>
           </section>
           <section class="mt-4 flex align-middle flex-wrap">
            <p class="mr-auto">{{ author }}</p><p class="ml-autotext-gray-200">{{ date }}</p>
           </section>
        </div>
          
        
        
    <slot name="content">
        <p class="my-4">Put some text here...</p>
    </slot>

    
    
    </article>
</div>
</main>

</template>
<script setup lang="ts">
defineProps({
    image:{
        type:String,
        required:true
    },
   alt:{
        type:String,
        required:true,
    },

    title:{
        type:String,
        required:true,

    },
    
    author:{
        type:String,
        required:true,
    },
    
    date:{
        type:String,
        required:true,
    }

})

</script>