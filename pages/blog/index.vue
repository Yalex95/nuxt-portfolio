<script setup>
const { locale } = useI18n();
const { data: posts } = await useAsyncData("posts", () =>
  queryContent(`/${locale.value}/blog`).find()
);
</script>
<template>
  <div
    id="blog"
    class="flex flex-col w-full md:w-8/12 mx-auto text-white justify-center items-center"
  >
    <h1 class="text-3xl my-8">¡Bienvenidos a mi blog!</h1>

    En esta sección, compartiré contenido relacionado con el apasionante mundo
    del desarrollo web. Soy Ingeniero en Sistemas Computacionales y actualmente
    me desempeño como desarrollador front-end, especializado en tecnologías como
    Nuxt.js, JavaScript, CSS, HTML, entre otras. A través de este espacio,
    quiero explorar temas como el desarrollo de interfaces modernas, las mejores
    prácticas en programación, y herramientas útiles para potenciar tus
    proyectos web. Mi objetivo es aportar valor y conocimientos, ya sea que
    estés iniciando en el desarrollo o buscando perfeccionar tus habilidades.
    ¡Espero que encuentres aquí ideas, soluciones y motivación para tus propios
    proyectos! 🚀

    <section class="grid mt-8 gap-10 md:grid-cols-3">
      <Post :post="posts" />
    </section>
  </div>
</template>
<style scoped>
#blog {
  min-height: 80vh;
}
</style>
