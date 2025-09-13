import { createRouter, createWebHistory } from "vue-router";
import { rootLinks } from "@your-org/web-root-links";
import StubPage from "./StubPage.vue";

export const createRootRouter = () =>
  createRouter({
    history: createWebHistory(),
    scrollBehavior(_to, _from, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      } else {
        return { top: 0 };
      }
    },
    routes: [
      {
        path: rootLinks.home.path,
        name: "stub",
        component: StubPage,
      },
    ],
  });
