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
    component: () => import("../views/IndividualProject.vue"),
    props: true,
  },
  {
    path: "/chronicles",
    name: "chronicles",
    component: () => import("../views/ChroniclesView.vue"),
  },
  {
    path: "/chronicles/:project",
    component: () => import("../views/IndividualChronicle.vue"),
    props: true,
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
