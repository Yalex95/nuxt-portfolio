<script setup>
const { locale } = useI18n();
const { data: posts } = await useAsyncData("latest-posts", () =>
  queryContent(`/${locale.value}/blog`).sort({ date: 1 }).limit(3).find()
);
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

let softSkills = [
  {
    image: "/skills/communication.svg",
    title: "Communication Skills",
    description:
      "Clearly articulating ideas and feedback, understanding and interpreting client requirements, collaborating with team members across different departments.",
  },
  {
    image: "/skills/teamwork.svg",
    title: "Teamwork and Collaboration",
    description:
      "Working effectively in a team environment, being open to feedback and willing to provide constructive feedback to others, sharing knowledge and assisting team members when needed.",
  },
  {
    image: "/skills/problem_solving.svg",
    title: "Problem-Solving Ability",
    description:
      "Thinking critically to identify issues and find effective solutions, approaching problems with a logical and analytical mindset, staying calm and composed under pressure.",
  },
  {
    image: "/skills/adaptability.svg",
    title: "Adaptability and Flexibility",
    description:
      "Being open to new technologies, tools, and methodologies, adjusting to changing project requirements or client needs, managing multiple tasks and priorities effectively.",
  },
  {
    image: "/skills/time_management.svg",
    title: "Time Management and Organization",
    description:
      "Prioritizing tasks and managing time efficiently, meeting deadlines without compromising quality, keeping track of project progress and updates.",
  },
  {
    image: "/skills/attention_to_detail.svg",
    title: "Attention to Detail",
    description:
      "Ensuring precision and accuracy in coding and design, conducting thorough testing and debugging, maintaining high standards of quality and usability.",
  },
  {
    image: "/skills/creativity.svg",
    title: "Creativity and Innovation",
    description:
      "Bringing fresh ideas and creative solutions to projects, enhancing user experience through innovative design and functionality, staying updated with the latest design trends and technologies.",
  },
  {
    image: "/skills/empathy.svg",
    title: "Empathy and User-Centric Thinking",
    description:
      "Understanding and anticipating user needs and behaviors, designing and developing with the end-user in mind, creating intuitive and accessible interfaces.",
  },
  {
    image: "/skills/resilience.svg",
    title: "Resilience and Perseverance",
    description:
      "Handling setbacks and criticism positively, continuing to push through challenges and obstacles, staying motivated and committed to continuous learning and improvement.",
  },
  {
    image: "/skills/conflict_resolution.svg",
    title: "Conflict Resolution",
    description:
      "Addressing and resolving disagreements in a constructive manner, finding common ground and reaching compromises, maintaining a positive and collaborative team environment.",
  },
];
</script>
<template>
  <SectionHero />
  <SectionAbout />
  <Slider
    :slides="techStack"
    sliderClass="flex flex-col"
    imageClass="w-1/2 h-1/2"
    titleClass="text-xl mt-4 capitalize font-semibold"
  />
  <Slider
    :slides="softSkills"
    sliderClass="flex flex-col justify-center items-center"
    :showDescription="true"
    titleClass="text-center capitalize font-semibold"
    descriptionClass="text-sm"
  />
  <section
    class="flex flex-col w-full md:w-8/12 mx-auto text-white justify-center items-center relative"
  >
    <h2 class="text-3xl font-bold mt-8">Latest Blog Post</h2>
    <div class="grid mt-8 gap-10 md:grid-cols-3">
      <Post :post="posts" />
    </div>
  </section>
</template>
