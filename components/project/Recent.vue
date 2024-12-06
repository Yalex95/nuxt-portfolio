<script setup></script>
<template>
  <div class="flex w-8/12 m-auto flex-col py-20">
    <h1 class="uppercase text-3xl font-bold">Works showcase</h1>
    <div class="flex gap-14 mt-20">
      <div
        class="flex justify-between w-full h-80 items-end pb-5 px-10 rounded-md "
        id="recentproyect"
      >
        <ULink
          type="button"
          active-class="text-white "
          inactive-class="text-[#0f172a] bg-[#00dc82] rounded-md border-2 border-transparent py-2 px-4  hover:text-white hover:bg-transparent border-2 hover:border-[#00dc82] flex-row flex  items-center gap-2 justify-center h-fit"
        >
          {{ $t("viewWebsite") }}
        </ULink>
        <ULink
          type="button"
          active-class="text-white "
          inactive-class="text-[#0f172a] bg-[#00dc82] rounded-md border-2 border-transparent py-2 px-4  hover:text-white hover:bg-transparent border-2 hover:border-[#00dc82] flex-row flex  items-center gap-2 justify-center h-fit"
          ><UIcon name="i-mdi-github-face" class="w-5 h-5" />
          Github
        </ULink>
      </div>
      <div class="flex flex-col w-full">
        <h2 class="uppercase text-xl">Recent project</h2>
        <h1 class="uppercase text-3xl font-bold">Portfolio</h1>
        <p class="my-5">
          A modern Nuxt 3 application. Built with NuxtUI, Nuxt Content,
          Graphql, nuxt i18n, this project demostrates responsiveness, graphql
          integration, translation features, dynamic routing
        </p>
        <ULink
          :exact-hash="true"
          type="button"
          active-class="text-white "
          inactive-class="text-[#0f172a] bg-[#00dc82] rounded-md border-2 border-transparent py-2 px-4  hover:text-white hover:bg-transparent border-2 hover:border-[#00dc82] flex-row flex  items-center gap-2 justify-center w-fit"
        >
          {{ $t("learnMore") }}
        </ULink>
      </div>
    </div>
  </div>
</template>
<style scoped>
#recentproyect {
  background: linear-gradient(0deg, #1f0642, transparent),
    url("/images/home/image.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  border: solid 1px #00dc82;
}
#recentproyect:hover {
  background: linear-gradient(0deg, #4444, transparent),
    url("/images/home/image.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
}
</style>
