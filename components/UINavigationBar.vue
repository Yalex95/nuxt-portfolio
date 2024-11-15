<script setup lang="ts">
const route = useRoute();
const links = [
  {
    label: "Home",
    icon: "i-heroicons-home",
    to: "/",
    // active: true,
  },
  {
    label: "Blog",
    icon: "i-heroicons-book-open",
    to: "/blog",
  },
  {
    label: "Projects",
    icon: "i-heroicons-chart-bar",
    to: "/projects",
  },
  {
    label: "Uses",
    icon: "i-heroicons-command-line",
    to: "/uses",
  },
];
</script>

<template>
  <UHorizontalNavigation :links="links">
    <template #default="{ link, isActive }">
      <span class="group-hover:text-primary relative">{{ link.label }}</span>
    </template>
  </UHorizontalNavigation>
</template>
