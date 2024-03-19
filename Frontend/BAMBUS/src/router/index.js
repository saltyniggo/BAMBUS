import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "catalog",
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
    },
    {
      path: "/*",
      name: "not-found",
      redirect: { name: "catalog" },
    },
  ],
});

export default router;
