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
    path: "/our-story/spellbound",
    component: () => import("../views/OurStory/SpellboundView.vue"),
    props: true,
  },
  {
    path: "/our-story/design-culture",
    component: () => import("../views/OurStory/DesignCultureView.vue"),
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
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
