<template>
  <div
    class="flex flex-col overflow-hidden relative rounded-md border-2 border-[#3d1d4c] py-10 px-5 max-h-72 cursor-pointer relative item"
  >
    <div class="overlay"></div>
    <img class="project-image" :src="`/images/home/${image}`" :alt="title" />
    <div
      class="content relative h-96 flex flex-col justify-center items-center gap-5"
    >
      <UIcon :name="icon" class="w-10 h-10" />
      <h2 class="text-xl font-bold">{{ title }}</h2>
      <!-- <p class="line-clamp-3 my-5">{{ description }}</p> -->
    </div>
    <div class="description">
      <p class="line-clamp-2 my-5">{{ $t(description) }}</p>
      <div class="flex gap-5 ">
        <ULink
          :to="link"
          type="button"
          active-class="text-white "
          inactive-class="text-[#0f172a] bg-[#00dc82] rounded-md border-2 border-transparent py-1 px-2  hover:text-white hover:bg-transparent border-2 hover:border-[#00dc82] flex-row flex  items-center gap-2 justify-center text-xs"
        >
        <UIcon name="i-lineicons-website" class="w-5 h-5" />
          {{ $t("viewWebsite") }}
        </ULink>
        <ULink v-if="github_link"
          :to="github_link"
          type="button"
          active-class="text-white "
          inactive-class="text-[#0f172a] bg-[#00dc82] rounded-md border-2 border-transparent py-2 px-4  hover:text-white hover:bg-transparent border-2 hover:border-[#00dc82] flex-row flex  items-center gap-2 justify-center text-xs"
        >
          <UIcon name="i-mdi-github-face" class="w-5 h-5" />
          {{ $t("viewCode") }}
        </ULink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps([
  "title",
  "description",
  "link",
  "github_link",
  "icon",
  "image",
]);
</script>
<style scoped>
.item:hover {
  background: #230a2e;
  padding: 20px;
}
/* .item:hover h2{
  font-size: 15px;
} */
.item:hover .description {
  transform: unset;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  position: relative;
  font-size: 15px;
  line-height: 24px;
}
.item .description {
  position: absolute;
  height: auto;
  width: 100%;
  bottom: 0;
  left: 0;
  font-size: 16px;
  /* padding: 0 1.5rem 1rem; */
  transform: translate(0, 100%);
  transition: 0.3s ease;
  z-index: 1;
}
.item:hover .project-image {
  height: 0;
}
.item:hover .content {
  /* gap: 0; */
  /* justify-content: start;
   */
   align-items: start;
}
.project-image {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 0;
}
.overlay {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(35 10 46 / 63%);
  z-index: 1;
}
.content {
  z-index: 1;
}
</style>
