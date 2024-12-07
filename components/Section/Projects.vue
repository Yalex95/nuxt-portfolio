<script setup>
const projects = [
  {
    name: "Portfolio",
    icon: "i-logos-nuxt-icon",
    description: "portfolioDesc",
    category: "nuxt",
    link: "https://yalex95.github.io/portfolio/",
    github_link: "https://github.com/Yalex95/portfolio",
    image: "image.png",
  },
  {
    name: "Budget Controller",
    icon: "i-devicon-react",
    description: "budgetDesc",
    link: "https://yalex95.github.io/budget/",
    github_link: "https://github.com/Yalex95/budget",
    image: "budget.png",
  },
  {
    name: "Anime Rest API",
    icon: "i-devicon-react",
    description: "animeDesc",
    link: "https://yalex95.github.io/web-app/",
    github_link: "https://github.com/Yalex95/web-app",
    image: "anime.png",
  },
];
</script>
<template>
  <section id="proyects" class="">
    <ProjectRecent />
    <ProjectAll :projects="projects" />
  </section>
</template>
<style scoped>
#proyects {
  background: linear-gradient(180deg, #1f06429e, transparent);
}
</style>
