<template>
    <div>

        <UContainer >

            <header>
                <HerosCoolHero/>
            </header>

            <main>
                <ContentHomeContent/>
            </main>
            
            
        </UContainer>

        <footer>
         <ContentFooter/>
        </footer>
        
      
        </div>
</template>
<script setup lang="ts">

useHead({
    htmlAttrs:{
    lang:'en',
    class:'dark'
    },
    title:'AK',
    link:[
        {rel:'icon', href:'/icon.png', type:'image/png'}
    ],
    meta:[
        {name:'description',content:'Welcome to my portfolio. My name is Abdiel, I am a frontend developer based in Edmundton, a small town in the province of New Brunswick, Canada'}
    ]
})

</script>