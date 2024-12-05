<template>
  <section
    class="flex flex-col w-full text-white justify-center items-center relative py-12 mt-20"
    id="hero"
  >
    <div class="w-10/12 md:w-6/12 xl:w-4/12 text-center hero-container">
      <h6 class="uppercase text-lg text-sm md:text-2xl font-bold">
        <span>Yeris Aguilar </span> <br class="display sm:hidden" />front end
      </h6>
      <h1 class="uppercase mb-3 text-xl md:text-5xl font-bold">
        Web <br class="display sm:hidden" />
        developer
      </h1>
      <p class="text-sm md:text-lg">
        {{ $t("heroDescription") }}
      </p>
      <div
        class="btn-container mt-5 relative flex-row flex justify-center gap-2"
      >
        <ULink
        to="#contact"
        :exact-hash="true"
          type="button"
          active-class="text-white "
          inactive-class="text-[#0f172a] bg-[#00dc82] rounded-md border-2 border-transparent py-2 px-4  hover:text-white hover:bg-transparent border-2 hover:border-[#00dc82] "
        >
          {{ $t("contactText") }}
        </ULink>

        <div class="click-here relative"></div>
      </div>
    </div>
  </section>
</template>
<script setup>
// TODO: add animation to hero
</script>
<style>
.hero-container{
  position: relative;
  z-index: 1;
}
#hero {
  min-height: 100vh;
  position: relative;
  background: linear-gradient(0deg, transparent, #0a1626, #0a1626, #0a1626);
}

#hero::after,
#hero::before {
  content: "";
  position: absolute;
  width: 20%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: contain;
}
#hero::after {
  left: 20%;
  background-image: url("/images/home/tag_right.svg");
  background-position: left center;
}
#hero::before {
  right: 20%;
  background-image: url("/images/home/tag_left.svg");
  background-position: right center;
}
@media screen and (max-width: 960px) {
  #hero::after {
    left: 5%;
  }
  #hero::before {
    right: 5%;
  }
}
@media screen and (max-width: 640px) {
  #hero{
    background: linear-gradient(0deg, transparent, #0a1626);
  }
  #hero::after,
  #hero::before {
    opacity: 0.5;
  }
  #hero::before{
  }
}
</style>
