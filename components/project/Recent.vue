<script setup></script>
<template>
  <div class="flex w-11/12 lg:w-8/12 m-auto flex-col lg:py-20 py-10">
    <h1 class="uppercase text-3xl font-bold">Works showcase</h1>
    <div class="flex gap-4 md:gap-14 mt-10 lg:mt-20 flex-col-reverse md:flex-row">
      <div
        class="flex justify-between w-full h-40 md:h-80 items-end pb-5 px-5 md:px-10 rounded-md "
        id="recentproyect"
      >
        <ULink
          type="button"
          active-class="text-white "
          inactive-class="text-[#0f172a] bg-[#00dc82] rounded-md border-2 border-transparent py-2 px-4  hover:text-white hover:bg-transparent border-2 hover:border-[#00dc82] flex-row flex  items-center gap-2 justify-center h-fit text-xs md:text-sm"
        >
          {{ $t("viewWebsite") }}
        </ULink>
        <ULink
          type="button"
          active-class="text-white "
          inactive-class="text-[#0f172a] bg-[#00dc82] rounded-md border-2 border-transparent py-2 px-4  hover:text-white hover:bg-transparent border-2 hover:border-[#00dc82] flex-row flex  items-center gap-2 justify-center h-fit text-xs md:text-sm"
          ><UIcon name="i-mdi-github-face" class="w-5 h-5" />
          Github
        </ULink>
      </div>
      <div class="flex flex-col w-full">
        <h2 class="uppercase text-xl order-0">{{ $t("recentProject") }}</h2>
        <h1 class="uppercase text-3xl font-bold order-1">Portfolio</h1>
        <p class="my-5 line-clamp-3 md:line-clamp-none order-3">
          {{ $t("portfolioDesc") }}
        </p>
        <UButton class="w-fit mb-4 mb:d-none order-4 "> {{ $t("readMore") }}</UButton>
        <div class="flex gap-5 order-2 mt-4">
          <UIcon name="i-skill-icons-javascript" class="md:w-10 md:h-10" />
          <UIcon name="i-vscode-icons-file-type-html" class="md:w-10 md:h-10" />
          <UIcon name="i-vscode-icons-file-type-css" class="md:w-10 md:h-10" />
          <UIcon name="i-vscode-icons-file-type-nuxt" class="md:w-10 md:h-10" />
          <UIcon name="i-vscode-icons-file-type-tailwind" class="md:w-10 md:h-10" />
        </div>
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
