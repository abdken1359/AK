<template>
    <div>
        <div  class="lg:text-2xl font-bold text-xl ">
        {{ heading }}
      </div>
    </div>
</template>
<script lang="ts" setup>
defineProps({
    heading:{
        type:String,
        required:true
    }
})

console.log('Heading Initialised')
</script>