<script setup>
const { locale } = useI18n();
const { data: posts } = await useAsyncData("posts", () =>
  queryContent(`/${locale.value}/blog`).find()
);
</script>
<template>
  <div
    id="blog"
    class="flex flex-col w-full md:w-8/12 mx-auto text-white justify-center items-center mt-20"
  >
    <h1 class="text-3xl my-8">{{ $t("welcomeToMyBlog") }}</h1>

    <p>{{ $t("blogDesc") }}</p>

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
