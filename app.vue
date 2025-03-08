<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout/>
  </div>
</template>
<script setup lang="ts">
console.log(useColorMode())

const colorMode = useColorMode()
const isDark = computed({
  get () {
    return colorMode.value === 'dark'
  },
  set () {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
});
onMounted(()=>{
  colorMode.value='dark'
})


/*onMounted(()=>{
  useHead({
    htmlAttrs:{
      class:'dark'
    }
  })
})*/
</script>
