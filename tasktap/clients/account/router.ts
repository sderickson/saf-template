import HomePage from "./pages/home-page/HomePageAsync.vue";
import { createRouter, createWebHistory } from "vue-router";

export const createAccountRouter = () => {
  const routes = [{ path: "/", component: HomePage }];
  return createRouter({
    history: createWebHistory("/"),
    routes,
  });
};
