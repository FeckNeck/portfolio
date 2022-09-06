import { createRouter, createWebHistory } from "vue-router";
import PresentationView from "../views/PresentationView";

const routes = [
  {
    path: "/:pathMatch(.*)*",
    name: "Presentationview",
    component: PresentationView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
  },
});

export default router;
