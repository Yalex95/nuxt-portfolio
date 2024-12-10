<template>
 <Slider
      :sliderOptions="sliderOptions"
      :slides="softSkills"
      sliderClass="flex flex-col justify-center items-center border-2 border-[#79F297] rounded-md px-4 py-5 lg:px-8 lg:py-8 h-min  min-h-72 cursor-pointer "
      :showDescription="true"
      imageClass="w-10 h-10"
      titleClass="text-center capitalize font-semibold mt-5"
      descriptionClass="text-sm mt-3 font-light line-clamp-4 md:line-clamp-3"
      sliderWrapperClass="lg:py-20 py-10 md:py-10 bg-[#203359] px-5 lg:px-10 md:px-0"
      :lang="true"
      :showReadMore="true"
    />
</template>
<script setup >

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
      slidesPerView: 1,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    960: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    1280: {
      slidesPerView: 4.5,
      spaceBetween: 50,
    },
  },
};
</script>