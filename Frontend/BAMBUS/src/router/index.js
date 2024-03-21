import { createRouter, createWebHistory } from "vue-router";

import CatalogView from "../views/CatalogView.vue";
import LoginView from "../views/LoginView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "catalog",
      component: CatalogView,
    },
    {
      path: "/cart",
      name: "cart",
    },
    {
      path: "/my-view",
      name: "loaner-view",
    },
    {
      path: "/admin",
      name: "admin-view",
    },
    {
      path: "/managing",
      name: "manager-view",
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/*",
      name: "not-found",
      redirect: { name: "catalog" },
    },
  ],
});

export default router;
