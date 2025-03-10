<template>
    <div>
     <main>
        <UContainer>
        <section class=" mt-10 mb-20 text-center">
            <div class="text-3xl lg:text-4xl text-slate-50 font-bold text-center">BLOG</div>
            
            
        </section>
        <ContentBlogpresentation/>
    </UContainer>
     </main>
    </div>
</template>
<script setup lang="ts">



useHead({
   
    

})
useSeoMeta({
    title:'Blog | AK',
    ogTitle:'Blog | AK',
    description:'This is my personal blog, where I share insights on tech and web development. ',
    ogDescription:'This is my personal blog, where I share insights on tech and web development. ',
    ogImage:'/images/blog.png',
    
    twitterCard:'summary_large_image',
    twitterTitle:'Blog | AK',
    twitterDescription:'Sharing insights on tech and web development.',
    twitterImage:'/images/blog.png'
})
</script>