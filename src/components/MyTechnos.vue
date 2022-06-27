<template>
  <section class="py-14">
    <div
      class="
        xl:px-24 xl:max-w-7xl
        lg:max-w-5xl lg:px-20
        md:max-w-5xl
        sm:max-w-2xl sm:px-8
        mx-auto
      "
    >
      <p class="text-4xl text-center py-8">Technologies que j'utilise</p>
      <div class="flex flex-wrap justify-center text-slate-400" v-if="techno">
        <svg
          class="m-3 hover:text-teal-400 transition-colors duration-300"
          width="64"
          height="64"
          v-for="(techno, index) in techno"
          :key="techno.name + index"
          :viewBox="techno.viewBox"
        >
          <title>{{ techno.name }}</title>
          <path :d="techno.svg" fill="currentColor" />
        </svg>
      </div>
    </div>
  </section>
</template>

<script>
import techno from "../data/techno";
export default {
  data() {
    return {
      techno,
    };
  },
  mounted: function () {},
};
</script>

<style>
</style>