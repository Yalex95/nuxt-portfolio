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
    title: "communicationSkills",
    description: "communicationSkillsDesciption",
  },
  {
    image: "/skills/teamwork.svg",
    title: "teamworkCollaboration",
    description: "teamworkCollaborationDescription",
  },
  {
    image: "/skills/problem_solving.svg",
    title: "problemSolvingAbility",
    description: "problemSolvingAbilityDescription",
  },
  {
    image: "/skills/adaptability.svg",
    title: "adaptabilityFlexibility",
    description: "adaptabilityFlexibilityDescription",
  },
  {
    image: "/skills/time_management.svg",
    title: "timeManagementOrganization",
    description: "timeManagementOrganizationDescription",
  },
  {
    image: "/skills/attention_to_detail.svg",
    title: "attentionToDetail",
    description: "attentionToDetailDescription",
  },
  {
    image: "/skills/creativity.svg",
    title: "creativityInnovation",
    description: "creativityInnovationDescription",
  },
  {
    image: "/skills/empathy.svg",
    title: "empathyUserCentricThinking",
    description: "empathyUserCentricThinkingDescription",
  },
  {
    image: "/skills/resilience.svg",
    title: "resiliencePerseverance",
    description: "resiliencePerseveranceDescription",
  },
  {
    image: "/skills/conflict_resolution.svg",
    title: "conflictResolution",
    description: "conflictResolutionDescription",
  },
];
const sliderOptions = {
  loop: true,
  autoplay: {
    delay: 4000,
  },
  speed: 1000,
  allowTouchMove: true,
  slidesPerView: 3,
  breakpoints: {
    320: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 3.5,
      spaceBetween: 30,
    },
    640: {
      slidesPerView: 4.5,
      spaceBetween: 50,
    },
  },
};
</script>
<template>
  <div class="bg-greenbg">
    <SectionHero />
    
    <Slider
      :slides="techStack"
      sliderClass="flex flex-col"
      imageClass="w-1/2 h-1/2"
      titleClass="text-xl mt-4 capitalize font-semibold"
      sliderWrapperClass="purple-grad"
    />
    <SectionAbout />
    <!-- SOFT SKILLS -->
    
    <Slider
      :sliderOptions="sliderOptions"
      :slides="softSkills"
      sliderClass="flex flex-col justify-center items-center border-2 border-[#79F297] rounded-md px-8 py-8 h-min  min-h-72 cursor-pointer "
      :showDescription="true"
      imageClass="w-10 h-10"
      titleClass="text-center capitalize font-semibold mt-5"
      descriptionClass="text-sm mt-3"
      sliderWrapperClass="py-10 bg-[#203359]"
      :lang="true"
    />
    <section
      class="flex flex-col w-full md:w-8/12 mx-auto text-white justify-center items-center relative"
    >
      <h2 class="text-3xl font-bold mt-8">Latest Blog Post</h2>
      <div class="grid mt-8 gap-10 md:grid-cols-3">
        <Post :post="posts" />
      </div>
    </section>
    <Contact />
  </div>
</template>
<style>
.green-gradient {
  background: linear-gradient(180deg, #1f0642, #00dc82);
}
.purple-grad {
  background:linear-gradient(0deg, transparent, #3f295a, transparent);
}
.bg-greenbg {
  background-image: url("/images/home/dc_.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
}
</style>
