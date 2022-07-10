import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      components: {
        about: () => import("@/views/AboutView.vue"),
        default: () => import("@/views/HomeView.vue"),
      },
    },
    {
      path: "/projects",
      name: "projects",
      components: {
        about: () => import("@/views/AboutView.vue"),
        default: () => import("@/views/ProjectsView.vue"),
      },
    },
    {
      path: "/projects/bin2dec",
      name: "bin-2-dec",
      components: {
        about: () => import("@/views/projects/Bin2DecAbout.vue"),
        default: () => import("@/views/projects/Bin2Dec.vue"),
      },
    },
  ],
});

export default router;
