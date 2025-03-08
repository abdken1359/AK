<template>
    <NuxtLayout name="404">
        <header>
            <NavigationNavbar/>
        </header>
      <main>
        <UContainer>
           <section class="my-10">
            <NuxtImg src="images/notfound.svg" class="object-cover w-72 mx-auto"/>
            <div class="mt-5 text-center">
                <h1 class="text-violet-500 font-bold mb-4">Page Not found</h1>
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
})
</script>