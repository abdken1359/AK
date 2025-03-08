<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout/>
  </div>
</template>
<script setup lang="ts">



onMounted(()=>{
  useHead({
    htmlAttrs:{
      class:'dark'
    }
  })
})
</script>
