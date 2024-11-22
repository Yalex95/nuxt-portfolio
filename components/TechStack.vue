<script setup lang="ts">
const containerRef = ref(null);
const slides = ref(Array.from({ length: 10 }));
const swiper = useSwiper(containerRef, {
  // effect: "creative",
  loop: true,
  autoplay: {
    delay: 2000,
  },
  speed: 1000,
  allowTouchMove: true,
  slidesPerView: 3,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },

  // creativeEffect: {
  //   prev: {
  //     // will set `translateZ(-400px)` on previous slides
  //     translate: [0, 0, -400],
  //   },
  //   next: {
  //     // will set `translateX(100%)` on next slides
  //     translate: ['100%', 0, 0],
  //   },
  // },
});

onMounted(() => {
  console.log(swiper.instance);
});
</script>

<template>
  <section class="w-10/12 mx-auto">
    <ClientOnly>
      <swiper-container ref="containerRef" :init="false">
        <swiper-slide
          v-for="(slide, idx) in slides"
          :key="idx"
          style="background-color: rgb(32, 233, 70); color: white"
        >
          Slide {{ idx + 1 }}
        </swiper-slide>
      </swiper-container> </ClientOnly
    ><!-- Go back one slide -->
  </section>
</template>

<style lang="css">
swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20vh;
  font-size: 4rem;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
}
</style>
