import { createRouter, createWebHistory } from "vue-router";
import PresentationView from "../views/PresentationView";

const routes = [
  {
    path: "/",
    name: "Presentationview",
    component: PresentationView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
