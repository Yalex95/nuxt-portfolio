<script setup>
const { locale } = useI18n();
const { data: posts } = await useAsyncData("latest-posts", () =>
  queryContent(`/${locale.value}/blog`).sort({ date: 1 }).limit(3).find()
);
useSeoMeta({
  title: 'Yeris Aguilar - Front End Web Developer',
  ogTitle: 'Yeris Aguilar - Front End Web Developer',
  description: 'Soy Yeris, una apasionada desarrolladora web de front-end con habilidades para crear experiencias online cautivadoras',
  ogDescription: 'Soy Yeris, una apasionada desarrolladora web de front-end con habilidades para crear experiencias online cautivadoras',
  ogImage: '/images/home/image.png',
  twitterCard: 'summary_large_image',
})
const techStack = [
  {
    title: "Nuxt 3",
    description: "The Vue Framework for Enterprise",
    image: "nuxt.svg",
  },
  {
    title: "tailwind css",
    description: "the utility-first CSS framework",
    image: "tailwindcss.svg",
  },
  {
    title: "typescript",
    description: "the programming language of the web",
    image: "typescript.svg",
  },
  {
    title: "wordPress",
    description: "The Open Source Content Management System",
    image: "wordpress.svg",
  },
  {
    title: "javaScript",
    description: "the programming language of the web",
    image: "javascript.svg",
  },
  {
    title: "CSS",
    description: "the style language of the web",
    image: "css.svg",
  },
];

</script>
<template>
  <div class="bg-greenbg">
    <SectionHero />

    <Slider
      :slides="techStack"
      sliderClass="flex flex-col"
      imageClass="w-1/2 h-1/2"
      titleClass="text-sm md:text-xl mt-4 capitalize font-semibold"
      sliderWrapperClass="purple-grad "
    />
    <SectionAbout />
    <!-- SOFT SKILLS -->
    <SectionSkills />
    <SectionProjects />
    <!-- <section
      class="flex flex-col w-full md:w-8/12 mx-auto text-white justify-center items-center relative"
    >
      <h2 class="text-3xl font-bold mt-8">Latest Blog Post</h2>
      <div class="grid mt-8 gap-10 md:grid-cols-3">
        <Post :post="posts" />
      </div>
    </section> -->
    <Contact />
  </div>
</template>
<style>
.green-gradient {
  background: linear-gradient(180deg, #1f0642, #00dc82);
}
.purple-grad {
  background: linear-gradient(0deg, transparent, #3f295a, transparent);
}
.bg-greenbg {
  background-image: url("/images/home/dc_.svg");
  background-repeat: no-repeat;
  background-size: auto;
  background-position: top center;
}
</style>
