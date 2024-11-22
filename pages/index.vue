<script setup>
const { locale } = useI18n();
const { data: posts } = await useAsyncData("latest-posts", () =>
  queryContent(`/${locale.value}/blog`).sort({ date: 1 }).limit(3).find()
);
</script>
<template>
  <SectionHero />
  <SectionAbout />
  <TechStack/>
  <section
    class="flex flex-col w-full md:w-8/12 mx-auto text-white justify-center items-center relative"
  >
    <h2 class="text-3xl font-bold mt-8">Latest Blog Post</h2>
    <div class="grid mt-8 gap-10 md:grid-cols-3">
      <Post :post="posts" />
    </div>
  </section>
</template>
