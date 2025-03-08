<template>
    <div>

        <UContainer>

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
    },
    title:'AK-Home',
    link:[
        {rel:'icon', href:'/icon.png', type:'image/png'}
    ],
    meta:[
        {name:'description',content:'Welcome to my portfolio. My name is Abdiel, I am a frontend developer based in Edmundton, a small town in the province of New Brunswick, Canada'}
    ]
})
/*const isDark = useDark();
const toggle = useToggle(isDark);

// Ensure dark mode is set immediately when the page loads
onBeforeMount(()=>{
    if (!isDark.value) {
  toggle();
}
})
*/
</script>