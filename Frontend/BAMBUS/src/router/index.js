import CatalogView from "@/views/CatalogView.vue";
import { compile } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import LoginView from "../views/LoginView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "catalog",
      component: {view: CatalogView},
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
