<script setup>
const links = [
  { name: "github", to: "https://github.com/", icon: "i-entypo-social-github" },
  {
    name: "LinkedIn",
    to: "https://github.com/",
    icon: "i-entypo-social-linkedin",
  },
];
</script>
<template>
  <footer class="bg-gray-800">
    <section
      class="mx-auto max-w-7xl px-2 sm:px-4 lg:py-6 text-gray flex flex-row"
    >
      <p class="flex-1 text-primary-500">
        &copy; Yeris Aguilar 2023. All Rights Reserved
      </p>
      <div class="flex flex-row justify-center gap-4 mb-4 mt-2">
        <UHorizontalNavigation
          :links="links"
          class=""
        />
      </div>
    </section>
  </footer>
</template>
