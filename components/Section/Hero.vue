<template>
  <section
    class="flex flex-col w-full text-white justify-center items-center relative py-12 mt-20"
    id="hero"
  >
    <div class="w-10/12 md:w-6/12 xl:w-4/12 md:text-center">
      <h6 class="uppercase"><span>Yeris Aguilar -</span> front end</h6>
      <h1 class="uppercase mb-3">
        Web <br class="display" />
        developer
      </h1>
      <p>
        {{ $t("heroDescription") }}
      </p>
      <div
        class="btn-container mt-5 relative flex-row flex md:justify-center gap-2"
      >
        <ULink
          type="button"
          active-class="text-white "
          inactive-class="text-[#0f172a] bg-[#00dc82] rounded-md border-2 border-transparent py-2 px-4  hover:text-white hover:bg-transparent border-2 hover:border-[#00dc82] "
        >
          Contact Me
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
#hero {
  min-height: 100vh;
  position: relative
}
#hero h1 {
  font-size: 40px;
  font-family: Sansation;
}
#hero h6 {
  font-size: 16px;
}
#hero h1,
#hero h6 {
  font-weight: 700;
}
#hero::after,#hero::before{
  content: "";
  position: absolute;
  width: 20%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: contain;

}
#hero::after{
  left: 20%;
  background-image: url("/images/home/tag_right.svg");
  background-position: left center;
}
#hero::before{
  right: 20%;
  background-image: url("/images/home/tag_left.svg");
  background-position: right center;
}
</style>
