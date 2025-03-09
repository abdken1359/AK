<template>
    <div>
    <UInput class="my-10 w-56" type="search" aria-label="Input here to search for content" v-model="blog.searchBlog" size="lg" color="violet" variant="outline" placeholder="Search" icon="mdi-search"/>
    </div>
</template>
<script setup lang="ts">
const blog=useBlogStore();

</script>
