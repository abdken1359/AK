<template>
    
      
      <nav class=" flex align-middle sticky h-14 md:h-16 top-0 z-50 backdrop-blur-md bg-opacity-5 bg-neutral p-10 md:p-12">
        
        <div class="flex mr-auto items-center ">
          <NuxtLink to="/"><NuxtImg src="/icon.png" alt="AK logo" class="object-cover w-12 m-auto "/></NuxtLink>
        </div>

        <!--Middle and large left navbar-->
        <div class="md:flex hidden items-center gap-6  ml-auto">
         <template v-for="l in links" :key="l.id">
          <NuxtLink active-class="text-violet-500" exact-active-class="text-violet-500" :to="l.to" class="font-bold hover:text-violet-500 transitio duration-150">
            {{ l.label }}
          </NuxtLink>
         </template>
          
        </div>
     
        <div class="md:hidden ml-auto flex items-center" >
          <UDropdown :ui="dropdownUi" :items="smallLinks" v-model:open="isOpen" :popper="{ placement:'bottom'}">
    <UButton color="white" :aria-label="`{isOpen?'Close':'Open'} Menu`" size="xl" variant="soft" :icon="isOpen?'heroicons:x-mark-16-solid':'heroicons:bars-3-solid'"/>
    
  </UDropdown>

        </div>

      </nav>
   
</template>
<script setup lang="ts">
const links = [
  {id:1,label:'About',to:'/about'},
  {id:2,label:'Blog',to:'/blog'},
  {id:3,label:'Showcase',to:'/showcase'},
 // {id:4,label:'Contact',to:'/'}
]
const smallLinks=[
  [{
    label:'About',
    labelClass:'text-white hover:text-violet-500 w-full text-center font-bold',
    to:'/about'

  }],
  [{
    label:'Blog',

    labelClass:'text-white hover:text-violet-500 w-full text-center font-bold',
    to:'/blog'

  }]
]
const isOpen=ref(false)
const dropdownUi=reactive({
  background:'bg-green-500 dark:bg-gray-800', shadow:'shadow-lg',ring:'ring-1  dark:ring-violet-600',
 transition:{
  enterFromClass:'transform translate-y-1/2 opacity-0',
  enterToClass:'transform translate-y-0 opacity-100',
  leaveFromClass: 'transform translate-y-0 opacity-100',
    leaveToClass: 'transform translate-y-2 opacity-0'
 },
 item:{
  active:'text-purple-600 dark:text-purple-500 bg-green-200'
 }
})
</script>