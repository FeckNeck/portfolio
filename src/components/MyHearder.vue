<template>
  <header>
    <nav
      class="
        px-3
        xl:px-24 xl:max-w-7xl
        lg:max-w-5xl lg:px-20
        md:max-w-5xl
        sm:max-w-2xl sm:px-8
        mx-auto
        shadow-lg
        sm:shadow-transparent
      "
    >
      <div class="sm:flex sm:justify-between sm:items-center py-5">
        <div class="flex justify-between items-center">
          <img
            src="../assets/logo.png"
            class="w-24 hidden sm:block"
            width="512"
            height="113"
            alt="logo"
          />
          <img
            src="../assets/logo_mobile.png"
            class="w-12 sm:hidden block"
            width="512"
            height="113"
            alt="logo"
          />
          <theme-switch-vue class="sm:hidden block"></theme-switch-vue>
          <button
            class="sm:hidden"
            type="button"
            @click="isOpen = !isOpen"
            alt="open menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 21 16"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              v-if="!isOpen"
            >
              <line x1="1" y1="1" x2="20" y2="1"></line>
              <line x1="1" y1="8" x2="20" y2="8"></line>
              <line x1="1" y1="15" x2="20" y2="15"></line>
            </svg>
            <svg
              width="24"
              height="24"
              viewBox="0 0 21 16"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              v-else
            >
              <line x1="3" y1="1" x2="17" y2="15"></line>
              <line x1="17" y1="1" x2="3" y2="15"></line>
            </svg>
          </button>
        </div>
        <div
          class="block sm:flex sm:flex-row py-4"
          :class="isOpen ? 'block' : 'hidden'"
        >
          <router-link
            to="/"
            class="
              block
              sm:px-5 sm:py-0
              py-2
              text-lg
              hover:cursor-pointer hover:text-teal-400
              transition-colors
              duration-300
            "
            >Présentation</router-link
          >
          <p
            class="
              block
              sm:px-5 sm:py-0
              py-3
              text-lg
              hover:cursor-pointer hover:text-teal-400
              transition-colors
              duration-300
            "
          >
            Projets
          </p>
          <div>
            <a
              href="mailto:mathis.dousse@outlook.fr"
              class="
                flex
                sm:hidden
                items-center
                w-fit
                px-3
                py-3
                mt-2
                bg-teal-400
                text-white
                rounded
                hover:cursor-pointer hover:bg-teal-600
                transition-colors
                duration-300
              "
            >
              <svg
                width="18"
                height="18"
                viewBox="0 2 24 11"
                fill="none"
                stroke="currentColor"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect x="1" y="1" fill="none" width="18" height="11"></rect>
                <line x1="1" y1="1" x2="8" y2="6"></line>
                <line x1="19" y1="1" x2="12" y2="6"></line>
                <line x1="1" y1="12" x2="6" y2="5"></line>
                <line x1="19" y1="12" x2="14" y2="5"></line>
                <line x1="8" y1="6" x2="12" y2="6"></line>
              </svg>
              <span>Me contacter </span></a
            >
          </div>
        </div>
        <div class="flex flex-row">
          <a
            href="mailto:mathis.dousse@outlook.fr"
            class="
              hidden
              sm:flex
              items-center
              px-3
              py-2
              bg-teal-400
              text-white
              rounded
              hover:cursor-pointer hover:bg-teal-600
              transition-colors
              duration-300
            "
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 11"
              fill="none"
              stroke="currentColor"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect x="1" y="1" fill="none" width="18" height="11"></rect>
              <line x1="1" y1="1" x2="8" y2="6"></line>
              <line x1="19" y1="1" x2="12" y2="6"></line>
              <line x1="1" y1="12" x2="6" y2="5"></line>
              <line x1="19" y1="12" x2="14" y2="5"></line>
              <line x1="8" y1="6" x2="12" y2="6"></line>
            </svg>
            <span>Me contacter </span></a
          >
          <theme-switch-vue class="sm:block hidden px-4"></theme-switch-vue>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import ThemeSwitchVue from "./ThemeSwitch.vue";
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  components: {
    ThemeSwitchVue,
  },
};
</script>

<style>
</style>