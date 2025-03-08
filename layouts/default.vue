<template>
<div>
<NavigationNavbar/>

<NuxtPage />
</div>
</template>
<script setup lang="ts">

useHead({
    htmlAttrs:{
        lang:'en',
        class:'dark'
    },
    link:[{
        rel:'icon', href:'/images/icon.svg', type:'image/svg+xml'
    }],
    
})

</script>
