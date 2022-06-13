<template>
  <cover-sheet></cover-sheet>
  <about-me></about-me>
  <my-technos></my-technos>
  <my-projects></my-projects>
</template>

<script>
import CoverSheet from "@/components/CoverSheet.vue";
import AboutMe from "@/components/AboutMe.vue";
import MyTechnos from "@/components/MyTechnos.vue";
import MyProjects from "@/components/MyProjects.vue";
export default {
  components: {
    CoverSheet,
    AboutMe,
    MyTechnos,
    MyProjects,
  },
};
</script>

<style>
</style>