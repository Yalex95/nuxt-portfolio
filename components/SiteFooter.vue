<script setup>
const links = [
  { name: "github", to: "https://github.com/", icon: "i-entypo-social-github" },
  {
    name: "LinkedIn",
    to: "https://github.com/",
    icon: "i-entypo-social-linkedin",
  },
  {
    name: "Email",
    to: "mailto:yerisaguilar95@gmail",
    icon: "i-heroicons-envelope-16-solid",
  },
];
</script>
<template>
  <hr class="mb-10 border-[#03340f]" />
  <footer>
    <section
      class="mx-auto max-w-7xl px-2 sm:px-4 lg:py-6 text-gray flex flex-row justify-between items-center"
    >
      <div class="flex flex-col">
        <p class="text-lg uppercase">Frontend web developer</p>
        <p class="flex-1 text-[#79F297] font-bold uppercase text-2xl">Yeris Aguilar</p>
        <p class="inline-flex gap-2 mt-5">
          <UIcon name="i-heroicons-map-pin-16-solid" class="w-5 h-5" />Tijuana,
          Baja California MX
        </p>
      </div>
      <div class="flex flex-row justify-center gap-4 mb-4 mt-2">
        <UHorizontalNavigation :links="links" class="" />
      </div>
    </section>
  </footer>
</template>
