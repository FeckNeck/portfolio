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
        <!-- <svg width="64" height="64" viewBox="0 0 32 32">
          <path
            d="M9,13.7q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q11.1,10.9,9,13.7ZM2,22.1q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q4.1,19.3,2,22.1Z"
          />
        </svg>
        <div class="bg-stone-700 w-16 h-16 m-2"></div>
        <div class="bg-stone-700 w-16 h-16 m-2"></div>
        <div class="bg-stone-700 w-16 h-16 m-2"></div>
        <div class="bg-stone-700 w-16 h-16 m-2"></div>
        <div class="bg-stone-700 w-16 h-16 m-2"></div>
        <div class="bg-stone-700 w-16 h-16 m-2"></div>
        <div class="bg-stone-700 w-16 h-16 m-2"></div>
        <div class="bg-stone-700 w-16 h-16 m-2"></div>
        <div class="bg-stone-700 w-16 h-16 m-2"></div> -->
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
  mounted: function () {
    console.log(techno[0].name);
  },
};
</script>

<style>
</style>