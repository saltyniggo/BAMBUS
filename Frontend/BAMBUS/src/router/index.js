import { createRouter, createWebHistory } from "vue-router";

import CatalogView from "../views/CatalogView.vue";
import LoginView from "../views/LoginView.vue";
import CartView from "../views/CartView.vue";
import CatalogPage from "@/components/catalog-page/CatalogPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (to.name === 'books' || to.name === 'magazines' || to.name === 'games') {
      console.log('scrolling to catalog');
      return { x: 100, behavior: 'smooth'}; 
    } else {
      return { x: 0, y: 0 };
    }
  },
  routes: [
    {
      path: "/",
      name: "catalog",
      component: CatalogView,
      children: [
       { path: "books",
        name: "books",
        component: CatalogPage,
        props: { category: "books" },
      }, 
      {path: "magazines",
        name: "magazines",
        component: CatalogPage,
        props: { category: "magazines" }
      },
      {path: "games",
        name: "games",
        component: CatalogPage,
        props: { category: "games" }
      },
      ]
    },
    {
      path: "/cart",
      name: "cart",
      component: CartView,
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
      path: "/:pathMatch(.*)*",
      name: "not-found",
      redirect: { name: "catalog" },
    },
  ],
});

export default router;
