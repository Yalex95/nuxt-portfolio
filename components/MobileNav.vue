<template>
  <div class="flex md:hidden justify-between items-center py-2 px-4">
    <div class="block">
      <label class="inline-flex items-center cursor-pointer">
        <UIcon name="heroicons:globe-americas" class="w-8 h-8 mr-2" />
              <div class="flex gap-1 justify-center items-center">
                <ClientOnly>
                  <NuxtLink
                    class="font-bold"
                    :class="{ 'text-[#79F297]': locale === 'es' }"
                    :to="switchLocalePath('es')"
                  >
                    ES
                  </NuxtLink>
                  |
                  <NuxtLink
                    class="font-bold"
                    :class="{ 'text-[#79F297]': locale === 'en' }"
                    :to="switchLocalePath('en')"
                  >
                    EN
                  </NuxtLink>
                </ClientOnly>
              </div>
        
      </label>
    </div>
    <div>
      <!-- <Links :links="links" wrapperClass=" flex gap-2" /> -->
      <UHorizontalNavigation :links="links" class="" />
    </div>
  </div>
</template>
<script setup>
const switchLocalePath = useSwitchLocalePath();
const { locale } = useI18n();
const links = [
  {
    to: "https://www.linkedin.com/in/yeris-aguilar/",
    icon: "i-entypo-social-linkedin",
    name: "LinkedIn icon",
  },
  {
    to: "mailto:yerisaguilar95@gmail.com",
    icon: "",
    name: "Email icon",
  },
  {
    to: "https://github.com/Yalex95",
    icon: "i-entypo-social-github",
    name: "Github icon",
  },
];

</script>
