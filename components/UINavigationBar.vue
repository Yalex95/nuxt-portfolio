<template>
  <Disclosure
    as="nav"
    :class="[{ scrolled: scrolled }, 'navbar']"
    id="navbar"
    v-slot="{ open }"
  >
    <MobileNav />
    <div
      class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8"
      :class="[!scrolled && open ? 'bg-[#190039]' : '']"
    >
      <div class="relative flex items-center justify-between">
        <div class="inset-y-0 left-0 flex w-full items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton
            class="flex-row-reverse w-full relative flex items-center justify-between rounded-md p-2 text-gray-400 hover:bg-[#341063] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-transparent"
          >
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
            <p class="uppercase text-center font-bold text-white">
              Yeris Aguilar
            </p>
          </DisclosureButton>
        </div>
        <div
          class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between"
        >
          <div class="hidden sm:block">
            <div class="flex">
              <a
                v-for="item in navigation"
                :key="item.name"
                :href="item.href"
                :class="[
                  item.current ? 'item-active' : ' active-item',
                  ' px-5  font-bold  text-white py-4 ',
                ]"
                :aria-current="item.current ? 'page' : undefined"
                >{{ item.name }}</a
              >
            </div>
          </div>
          <div class="hidden sm:flex sm:items-center sm:justify-center">
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
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div
        class="space-y-1 px-2 pb-3 pt-2"
        :class="[!scrolled && open ? 'bg-[#190039]' : '']"
      >
        <DisclosureButton
          v-for="item in navigation"
          :key="item.name"
          as="a"
          :href="item.href"
          :class="[
            item.current
              ? 'bg-gray-900 text-white'
              : 'text-gray-300 hover:bg-gray-700 hover:text-white',
            'block rounded-md px-3 py-2 text-base font-medium',
          ]"
          :aria-current="item.current ? 'page' : undefined"
          >{{ item.name }}</DisclosureButton
        >
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/vue/24/outline";
import { useI18n } from "vue-i18n";
const scrolled = ref(false);
const route = useRoute();

console.log("query", route.hash);
const navigation = [
  {
    name: "Home",
    href: "/",
    current: false,
  },
  { name: "About", href: "/#about", current: route.hash === "#about" },
  {
    name: "Projects",
    href: "/projects",
    current: route.path.includes("projects"),
  },
  { name: "Blog", href: "/blog", current: route.path.includes("blog") },
  {
    name: "Contact",
    href: "/#contact",
    current: route.hash === "#contact",
  },
];
const switchLocalePath = useSwitchLocalePath();

const { locale } = useI18n();
const handleScroll = () => {
  const navbar = document.getElementById("navbar"); // Replace 'navbar' with your actual navbar ID
  if (navbar) {
    const scrollPosition = window.scrollY || window.pageYOffset;
    scrolled.value = scrollPosition > 0;
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
// consoles.lele
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
<style scoped>
.navbar {
  background-color: transparent;
  position: fixed;
  z-index: 3;
  width: 100%;
}
.item-active {
  background-color: #203359;
}
.active-item:hover {
  /* border: solid 1px #cbc5d991; */
  background-color: #203359;
}
.scrolled {
  background-color: #0a1626;
  position: fixed;
  z-index: 3;
  box-shadow: 0 2px 4px rgb(0, 0, 0); /* Example box shadow */
}
</style>
