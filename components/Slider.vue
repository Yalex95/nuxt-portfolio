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
  sliderWrapperClass: {
    type: String,
    default: "w-10/12 mx-auto py-12",
  },
  lang:{
    type: Boolean,
    default: false
  },
  sliderOptions: {
    type: Object,
    default: {
      loop: true,
      autoplay: {
        delay: 3000,
      },
      speed: 1000,
      allowTouchMove: true,
      slidesPerView: 3,
      breakpoints: {
        320: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        480: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 5,
          spaceBetween: 40,
        },
      },
    },
  },
});
const containerRef = ref(null);
const swiper = useSwiper(containerRef, props.sliderOptions);

onMounted(() => {
  console.log(swiper.instance);
});
</script>

<template>
  <section :class="sliderWrapperClass">
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
          <h2 v-if="lang"  :class="titleClass">{{ $t(item.title) }}</h2>
          <h2 v-if="!lang" :class="titleClass">{{ item.title }}</h2>

          <p v-if="lang && showDescription " :class="descriptionClass" >
            {{ $t(item.description) }}
          </p>
          <p v-if="!lang && showDescription " :class="descriptionClass" >
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
