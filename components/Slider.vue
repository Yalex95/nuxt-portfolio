<script setup lang="ts">
const props = defineProps({
  slides: {
    type: Array as () => {
      image: string;
      title: string;
      description: string;
    }[],
    default: [],
  },
  imageClass: {
    type: String,
    default: "",
  },
  titleClass: {
    type: String,
    default: "",
  },
  showDescription: {
    type: Boolean,
    default: false,
  },
  slidesPerView: {
    type: Number,
    default: 3,
  },
  sliderClass: {
    type: String,
    default: "",
  },
  descriptionClass: {
    type: String,
    default: "",
  },
});
const containerRef = ref(null);
const swiper = useSwiper(containerRef, {
  loop: true,
  autoplay: {
    delay: 2000,
  },
  speed: 1000,
  allowTouchMove: true,
  slidesPerView: 3,
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
      slidesPerView: 5,
      spaceBetween: 40,
    },
  },
});

onMounted(() => {
  console.log(swiper.instance);
});
</script>

<template>
  <section class="w-10/12 mx-auto py-12">
    <ClientOnly>
      <swiper-container ref="containerRef" :init="false">
        <swiper-slide
          v-for="(item, idx) in slides"
          :key="idx"
          :class="sliderClass"
        >
          <img
            :class="imageClass"
            :src="`./images/home/${item.image}`"
            :alt="item.title"
          />
          <h2 :class="titleClass">{{ item.title }}</h2>
          <p :class="descriptionClass" v-if="showDescription">
            {{ item.description }}
          </p>
        </swiper-slide>
      </swiper-container>
    </ClientOnly>
  </section>
</template>

<style lang="css">
swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20vh;
  padding: 10px 0;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
}
</style>
