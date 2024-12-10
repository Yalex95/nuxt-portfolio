<script setup>
const query = gql`
  {
    viewer {
      repositories(first: 6, orderBy: { field: CREATED_AT, direction: DESC }) {
        totalCount
        nodes {
          id
          name
          createdAt
          description
          url
          forks {
            totalCount
          }
          watchers {
            totalCount
          }
          stargazers {
            totalCount
          }
        }
      }
    }
  }
`;
const { data } = await useAsyncQuery(query);
</script>
<template>
  <NuxtLayout itemActiveName="projects">
    <div
      id="projects"
      class="flex flex-col w-11/12 md:w-8/12 lg:w-11/12 mx-auto text-white justify-center items-center mt-20"
    >
      <h1 class="text-5xl font-bold mt-20">{{ $t("projects") }}</h1>
      <p class="text-base p-2">{{ $t("projectsDesc") }}</p>

      <section
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 lg:gap-10"
      >
        <div
          v-for="project in data.viewer.repositories.nodes"
          class="p-3 md:p-8 border-4 my-4 rounded-lg hover:bg-gray-500"
        >
          <a :href="project.url" target="_blank">
            <h2
              class="text-2xl text-indigo-800 font-semibold mb-2 hover:underline"
            >
              {{ project.name }}
            </h2>
          </a>
          <p class="lg:line-clamp-none text-xs line-clamp-3">
            {{ project.description }}
          </p>
          <div class="mt-4">
            <Icon name="fontisto:star" size="1.1rem" class="text-indigo-700" />
            Stars: {{ project.stargazers.totalCount }}
            <Icon
              name="system-uicons:branch"
              size="1.1rem"
              class="text-indigo-800"
            />
            Forks: {{ project.forks.totalCount }}
            <Icon
              name="system-uicons:eye"
              size="1.1rem"
              class="text-indigo-700"
            />
            Watchers: {{ project.watchers.totalCount }}
          </div>
        </div>
      </section>
    </div>
  </NuxtLayout>
</template>
<style scoped>
#projects {
  min-height: 90vh;
}
</style>
