<template>
    <NuxtLayout name="404">
        <header>
            <NavigationNavbar/>
        </header>
      <main>
        <UContainer>
           <section class="my-10">
            <NuxtImg src="images/notfound.svg" class="object-cover w-52 md:w-60  mx-auto"/>
            <div class="mt-5 text-center">
                <div class="text-violet-500 text-2xl md:text-3xl  font-bold mb-4">Page Not found</div>
                <p>The page you are looking for does not exist.</p>
                <UButton class="mt-4 bg-violet-600 text-white" color="violet" size="lg" to="/" label="Back to Home"/>
            </div>
           </section>
        </UContainer>
      </main>
        
    
    </NuxtLayout>
  </template>
  <script setup lang="ts">
useHead({
    htmlAttrs:{
     lang:'en',
     class:'dark'
    },
    title:'Page not found | AK',
    link:[
      {rel:'icon',href:'/icon.png',type:'image/svg+xml'}
    ]
})
const route=useRoute();

const pathHandler=computed(()=>{

})
</script>