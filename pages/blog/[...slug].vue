<script setup>
const { path } = useRoute();

const { data } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).findOne();
});
</script>
<template>
  <ContentRenderer
    :value="data"
    class="prose dark:prose-invert my-10 mx-auto max-w-7xl"
  />
  <div class="my-10">
    <a
      v-for="tag in data.tags"
      :key="tag"
      :href="`/blogs/tags/${tag}`"
      class="text-sm front-semibold inline-block py-2 px-4 rounded-lg text-gray-100 bg-blue-500 uppercase last:mr-0 mr-2"
      ><Icon name="mdi:tag" class="mr-2 text-gray-100" />{{ tag }}</a
    >
  </div>
</template>
