<script setup>
const { locale } = useI18n();
const { data: posts } = await useAsyncData("posts", () =>
  queryContent(`/${locale.value}/blog`).find()
);
</script>
<template>
  <div
    id="blog"
    class="flex flex-col w-full md:w-8/12 mx-auto text-white justify-center items-center"
  >
    <h1 class="text-3xl my-8">Blog Post</h1>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias officia
    eius explicabo consequuntur maiores ratione amet quasi consequatur sapiente
    iure illum fugit non soluta doloribus error placeat iusto, quaerat libero.

    <section class="grid mt-8 gap-10 md:grid-cols-3">
      <Post :post="posts" />
    </section>
  </div>
</template>
<style scoped>
#blog {
  min-height: 80vh;
}
</style>
