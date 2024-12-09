<script setup lang="ts">

</script>

<template>
  <section id="contact">
    <div
      id="contact-me"
      class="flex md:w-11/12 lg:w-8/12 w-full flex-row mx-auto lg:py-20 justify-center lg:justify-start"
    >
      <div
        class="md:w-10/12 w-11/12 flex justify-center items-center lg:py-10 flex-col"
      >
        <div class="flex flex-col py-10">
          <h2 class="text-3xl font-bold uppercase">{{ $t("contactText") }}</h2>
          <h3 class="font-bold text-2xl uppercase">{{ $t("contactMeSub") }}</h3>
          <p class="my-5">{{ $t("contactMeDesc") }}</p>
          
        <ULink
        to="mailto:yerisaguilar95@gmailcom"
        :exact-hash="true"
          type="button"
          inactive-class="text-[#0f172a] bg-[#00dc82] rounded-md border-2 border-transparent py-2 px-4  hover:text-white hover:bg-transparent border-2 hover:border-[#00dc82] flex-row flex  items-center gap-2 lg:w-2/12 justify-center  mt-5lg:mt-10"
        >
        <UIcon name="i-heroicons-envelope" class="w-5 h-5" />
          {{ $t("contactText") }}
        </ULink>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
#contact-me {
  position: relative;
}
#contact {
  position: relative;
}
#contact::before {
  content: "";
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, transparent, #0a1626, #0a1626, #0a1626);
}
</style>
