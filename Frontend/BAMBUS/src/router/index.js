import { createRouter, createWebHistory } from "vue-router";

import CatalogView from "../views/CatalogView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import CartView from "../views/CartView.vue";
import UserView from "../views/UserView.vue";
import AdminView from "../views/AdminView.vue";
import ManagerView from "../views/ManagerView.vue";

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
      component: CartView,
    },
    {
      path: "/my-view",
      name: "user-view",
      redirect: { name: "user-view-overview" },
      children: [
        {
          path: ":overview",
          name: "user-view-overview",
          component: UserView,
          props: true,
        },
        {
          path: ":orders",
          name: "user-view-orders",
          component: UserView,
          props: true,
        },
        {
          path: ":account",
          name: "user-view-account",
          component: UserView,
          props: true,
        },
      ],
    },
    {
      path: "/admin",
      name: "admin-view",
      redirect: { name: "admin-view-overview" },
      children: [
        {
          path: ":overview",
          name: "admin-view-overview",
          component: AdminView,
          props: true,
        },
        {
          path: ":management",
          name: "admin-view-management",
          component: AdminView,
          props: true,
        },
        {
          path: ":settings",
          name: "admin-view-settings",
          component: AdminView,
          props: true,
        },
      ],
    },
    {
      path: "/managing",
      name: "manager-view",
      redirect: { name: "manager-view-overview" },
      children: [
        {
          path: ":overview",
          name: "manager-view-overview",
          component: ManagerView,
          props: true,
        },
        {
          path: ":management",
          name: "manager-view-management",
          component: ManagerView,
          props: true,
        },
        {
          path: ":statistics",
          name: "manager-view-statistics",
          component: ManagerView,
          props: true,
        },
      ],
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      redirect: { name: "catalog" },
    },
  ],
});

export default router;
