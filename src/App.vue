<template>
  <div class="font-body bg-bermuda dark:bg-primary-dark dark:text-white transition-bg duration-300">
    <my-hearder-vue></my-hearder-vue>
    <router-view data-aos="fade-right" />
    <my-footer-vue></my-footer-vue>
  </div>
</template>

<script>
import MyHearderVue from "@/components/MyHearder.vue";
import MyFooterVue from "@/components/MyFooter.vue";
export default {
  components: {
    MyHearderVue,
    MyFooterVue,
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}

body,
html {
  height: 100%;
}

#app {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100%;
  font-family: Nunito;
  overflow: hidden;
}

.container {
  width: 100%;
  padding-right: 1rem;
  padding-left: 1rem;
}

@media (min-width: 1280px) {
  .container {
    max-width: 1280px;
    padding-right: 6rem;
    padding-left: 6rem;
  }
}

@media (min-width: 1024px) {
  .container {
    max-width: 1024px;
    padding-right: 5rem;
    padding-left: 5rem;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 768px;
  }
}

@media (min-width: 640px) {
  .container {
    max-width: 640px;
    padding-right: 2rem;
    padding-left: 2rem;
  }
}
</style>
