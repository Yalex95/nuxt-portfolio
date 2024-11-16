<script setup>
const { data: posts } = await useAsyncData("latest-posts", () =>
  queryContent("/blog").sort({date:1}).limit(3).find()
);
</script>
<template>
  <SectionHero />
  <section>
    <h2 class="text-3xl font-bold mt-8">Latest Blog Post</h2>
    <div class="grid mt-8 gap-10 md:grid-cols-3">
      <Post :post="posts" />
    </div>
  </section>
</template>
