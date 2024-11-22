<template>
  <section
    class="flex flex-col justify-center items-center relative py-12"
    id="about"
  >
    <div class="container pt-6 grid grid-cols-1 md:grid-cols-2" id="about-me">
      <!-- image -->
      <div class="flex-row flex justify-center relative">
        <div class="relative pt-6 pl-8">
          <img
            src="/images/home/img.png"
            class="rounded-lg relative z-0"
            alt="portfolio image"
          />
        </div>
      </div>
      <!-- about text -->
      <div>
        <h4 class="uppercase">Yeris Alejandra Aguilar</h4>
        <p class="my-3">{{ $t("aboutMeText") }}</p>

        <div class="relative">
          <ULink
            target="_blank"
            type="button"
            class="mt-5"
            active-class="text-white "
            inactive-class="text-[#0f172a] bg-[#00dc82] rounded-md border-2 border-transparent py-2 px-4  hover:text-white hover:bg-transparent border-2 hover:border-[#00dc82] "
            >{{ $t("downloadTextBtn") }}</ULink
          >
        </div>
      </div>
    </div>
    <!-- <TechStack/> -->
  </section>
</template>
<script setup lang="ts"></script>
<style scoped>
#about {
  min-height: 100vh;
}
</style>
