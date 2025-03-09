<template>
    <div>
     <main>
        <UContainer>
        <section class=" my-10 text-center">
            <div class="text-3xl lg:text-4xl text-slate-50 font-bold text-center">BLOG</div>
            <ContentSearchblog/>
            
        </section>
        <ContentBlogpresentation/>
    </UContainer>
     </main>
    </div>
</template>
<script setup lang="ts">



useHead({
    title:'Blog | AK',
    meta:[
        {name:'description',content:'This is my simple personal blog, where I share my knowledge of frontend development'}
    
    ],

})
</script>