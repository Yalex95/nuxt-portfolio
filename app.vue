<template>
  <div class="flex flex-col min-h-screen theme-black">
    <ClientOnly>
      <UINavigationBar />
    </ClientOnly>
    <main class="mb-10 grow items-start w-full">
      <NuxtPage />
    </main>
    <SiteFooter />
  </div>
</template>

<script setup></script>
