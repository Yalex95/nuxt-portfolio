<template>
  <div id="allproyects" class="grid grid-cols-1 md:grid-cols-3 gap-10  w-8/12 m-auto  py-20">
    <ProjectTile
      v-for="project in projects"
      :key="project.id"
      :title="project.name"
      :description="project.description"
      :link="project.link"
      :github_link="project.github_link"
      :icon="project.icon"
      :image="project.image"
    />
  </div>
</template>
<script setup>
const props = defineProps(["projects"]);

</script>
