<template>
  <div class="catalog-view">
    <startPage @scrollDownShow="scrollDownShow"></startPage>
    <catalogPage :category></catalogPage>
  </div>
</template>

<script>
import CatalogPage from "../components/catalog-page/CatalogPage.vue";
import StartPage from "../components/catalog-page/StartPage.vue";

export default {
  name: "CatalogView",
  components: {
    CatalogPage,
    StartPage,
  },
  data() {
    return {
      category: "all",
    };
  },
  methods: {
    scrollDownShow(category) {
      1;
      const catalog = this.$el.querySelector("#catalog");
      this.$el.querySelector("#catalog").scrollIntoView({ behavior: "smooth" });
      this.category = category;
    },
  },
};
</script>

<style scoped>
.catalog-view {
  scroll-behavior: smooth;
}
</style>
