import { createRouter, createWebHistory } from "vue-router";
import PresentationView from "../views/PresentationView";
import MyProjects from "@/components/MyProjects.vue";

const routes = [
  {
    path: "/",
    name: "Presentationview",
    component: PresentationView,
  },
  { path: "/", name: "Projects", component: MyProjects },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
