<script setup>
const { data: posts } = await useAsyncData("latest-posts", () =>
  queryContent("/blog").sort({date:1}).limit(3).find()
);
</script>
<template>
  <section>
    <h1 class="text-5xl font-bold mt-20">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, nam.
      Soluta nisi quae
    </h1>
    <p class="text-base text-gray-900 p-2">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
      voluptas alias qui porro! At, sequi vitae quae repudiandae nulla beatae
      eaque tempore recusandae eligendi expedita atque placeat sapiente repellat
      voluptate.
    </p>
  </section>
  <section>
    <h2 class="text-3xl font-bold mt-8">Latest Blog Post</h2>
    <div class="grid mt-8 gap-10 md:grid-cols-3">
      <Post :post="posts" />
    </div>
  </section>
</template>
