<script setup>
const projects = [
  {
    name: "Portfolio",
    icon: "i-logos-nuxt-icon",
    description: "A modern Nuxt 3 application. Built with NuxtUI, Nuxt Content, Graphql, nuxt i18n, this project demostrates responsiveness, graphql integration, translation features, dynamic routing",
    category: "nuxt",
    link: "https://yalex95.github.io/portfolio/",
    github_link: "https://github.com/Yalex95/portfolio",
    image:"image.png"
    
  },
  {
    name: "Budget Controller",
    icon: "i-devicon-react",
    description: "This project was made with React js framework.",
    link: "https://yalex95.github.io/budget/",
    github_link: "https://github.com/Yalex95/budget",
    image:"image.png"
  },
  {
    name: "Anime Rest API",
    icon: "i-devicon-react",
    description: "This project was made with React js framework.",
    link: "https://yalex95.github.io/web-app/",
    github_link: "https://github.com/Yalex95/web-app",
    image:"image.png"
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
