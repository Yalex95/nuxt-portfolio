<template>
  <section
    class="flex flex-col justify-center items-center relative w-11/12 lg:full my-10 mx-auto md:px-0"
    id="about"
  >
    <div
      class="lg:py-20 lg:px-10 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-10 py-10 px-5  lg:p-0 lg:w-8/12 m-auto"
      id="about-me"
    >
      <!-- image -->
      <div class="flex-row flex justify-center relative md:order-1 order-2">
        <div class="relative pt-0 lg:pt-6 lg:pl-8">
          <img
            src="/images/home/img.png"
            class="rounded-lg relative z-0 object-fit max-h-96"
            alt="portfolio image"
          />
        </div>
      </div>
      <!-- about text -->
      <div class="oreder-1 md:order-2">
        <h2 class="uppercase md:text-xl lg:text-3xl font-bold">
          Yeris Alejandra Aguilar
        </h2>
        <p class="my-3  lg:text-sm lg:text-lg line-clamp-5 md:line-clamp-5 lg:line-clamp-none">{{ $t("aboutMeText") }}</p>

        <div class="relative">
          <ULink
            target="_blank"
            type="button"
            class="mt-5 w-fit lg:w-2/5"
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
#about-me {
  position: relative;
}
#about-me > div {
  z-index: 1;
}
/* commetn */
#about-me::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 5px;
  bottom: 0;
  right: 0;
  background: linear-gradient(180deg, #170531, #1f0642, #00dc82);
  opacity: 0.5;

  backdrop-filter: blur(2px);
}
#about-me h2 {
  font-family: "Sansation", sans-serif;
}
</style>
