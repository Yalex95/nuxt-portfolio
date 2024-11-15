<script setup>
const { data: posts } = await useAsyncData("posts", () =>
  queryContent("/blog").find()
);
</script>
<template>
  <h1 class="text-3xl my-8">Blog Post</h1>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias officia
  eius explicabo consequuntur maiores ratione amet quasi consequatur sapiente
  iure illum fugit non soluta doloribus error placeat iusto, quaerat libero.

  <section class="grid mt-8 gap-10 md:grid-cols-3">
    <Post :post="posts" />
  </section>
</template>
