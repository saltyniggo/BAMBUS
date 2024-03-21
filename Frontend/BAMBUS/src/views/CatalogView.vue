<template>
  <div class="catalog-view">
    <side-nav></side-nav>
    <div class="catalog-view-content">
      <startPage @scrollDownShow="scrollDownShow"></startPage>
      <catalogPage :category></catalogPage>
    </div>
  </div>
</template>

<script>
import CatalogPage from "../components/catalog-page/CatalogPage.vue";
import StartPage from "../components/catalog-page/StartPage.vue";
import SideNav from "../components/AppSideNav.vue";

export default {
  name: "CatalogView",
  components: {
    CatalogPage,
    StartPage,
    SideNav,
  },
  data() {
    return {
      category: "all",
    };
  },
  methods: {
    scrollDownShow(category) {
      const catalog = this.$el.querySelector("#catalog");
      this.$el.querySelector("#catalog").scrollIntoView({ behavior: "smooth" });
      this.category = category;
    },
  },
};
</script>

<style scoped>
.catalog-view {
  height: 100vh;
  width: 100vw;
  scroll-behavior: smooth;
}
</style>
