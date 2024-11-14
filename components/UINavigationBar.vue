<script setup lang="ts">
const route = useRoute();
console.table(route.query);
const links = [
  {
    label: "Home",
    icon: "i-heroicons-home",
    to: "/",
    active: route.path == "/",
  },
  {
    label: "Blog",
    icon: "i-heroicons-book-open",
    to: "/blog",
    active: route.path == "/blog",
  },
  {
    label: "Projects",
    icon: "i-heroicons-chart-bar",
    to: "/projects",
    active: route.path == "/projects",
  },
  {
    label: "Uses",
    icon: "i-heroicons-command-line",
    to: "/uses",
    active: route.path == "/uses",
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
