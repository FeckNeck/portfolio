import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

createApp(App).use(router).use(AOS).mount("#app");
