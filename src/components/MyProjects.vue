<template>
  <section class="py-14" id="projects">
    <div
      class="
        xl:px-24 xl:max-w-7xl
        lg:max-w-5xl lg:px-20
        md:max-w-5xl
        sm:max-w-2xl sm:px-8
        mx-auto
      "
    >
      <p class="text-4xl text-center py-8">Mes projets personnels</p>
      <div class="grid sm:grid-cols-2 gap-6 sm:px-0 px-4">
        <a
          class="
            flex flex-col
            justify-between
            border
            rounded
            p-2
            hover:cursor-pointer hover:shadow-custom hover:-translate-y-2
            transition-all
            duration-300
            dark:bg-secondary-dark
          "
          v-for="(project, index) in projects"
          :key="index + project.name"
          :href="
            'https://github.com/FeckNeck/' + project.name.toLocaleLowerCase()
          "
          target="_blank"
        >
          <div class="flex items-center">
            <svg
              height="16"
              viewBox="0 0 16 16"
              width="16"
              data-view-component="true"
              class="dark:text-white"
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"
              ></path>
            </svg>
            <p class="pl-2 font-semibold">
              {{ project.name }}
            </p>
          </div>
          <p class="py-3 font-light">{{ project.description }}</p>
          <div class="flex flex-wrap">
            <div
              class="flex flex-row items-center px-1"
              v-for="(techno, index) in project.techno"
              :key="index + techno.name"
            >
              <span
                class="rounded-full p-1.5 mx-1.5"
                :class="techno.color"
              ></span>
              <p>{{ techno.name }}</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import projects from "../data/projects";
export default {
  data() {
    return {
      projects,
    };
  },
};
</script>

<style>
</style>
