<template>
    <div>
    <UInput class=" my-20 w-1/2 mx-auto" type="search" aria-label="Input here to search for content"  v-model="blog.searchBlog" size="lg" color="violet" variant="outline" placeholder="Search" icon="mdi-search"/>
    </div>
</template>
<script setup lang="ts">
const blog=useBlogStore();

</script>
