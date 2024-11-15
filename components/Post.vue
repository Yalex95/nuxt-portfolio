<script setup>
const props = defineProps(["post"]);
</script>
<template>
  <div
    v-for="post in props.post"
    :key="post._slug"
    class="bg-white rounded-lg shadow-md overflow-hidden hover:opacity-75"
  >
    <NuxtLink :to="post._path">
      <img
        :src="`/images/blog/${post.cover}`"
        alt="Blog post cover image"
        class="w-full h-48 object-cover"
    /></NuxtLink>
    <div class="p-6 text-black">
      <h2 class="text-xl font-bold mb-2">{{ post.title }}</h2>
      <p class="text-gray mb-4">{{ post.description }}</p>
      <NuxtLink :to="post._path" class="inline-block bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded float-right mb-8"
        >Read more</NuxtLink
      >
    </div>
  </div>
</template>
