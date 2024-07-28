import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/interior",
    name: "interior",
    component: () => import("../views/InteriorView.vue"),
  },
  {
    path: "/interior/:project",
    component: () => import("../views/Interior/IndividualProject.vue"),
    props: true,
  },
  {
    path: "/chronicles",
    name: "chronicles",
    component: () => import("../views/ChroniclesView.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../views/ContactView.vue"),
  },
];

const router = createRouter({
  mode: "history",
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
