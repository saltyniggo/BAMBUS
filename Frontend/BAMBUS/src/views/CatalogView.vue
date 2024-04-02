<template>
  <div class="catalog-view">
    <startPage @scrollDownShow="scrollDownShow"></startPage>
    <catalogPage :category="this.$route.params.category" id="catalog"></catalogPage>
    <p>{{ category }}</p>
  </div>
</template>

<script>
import CatalogPage from "../components/catalog-page/CatalogPage.vue";
import StartPage from "../components/catalog-page/StartPage.vue";

export default {
  name: "CatalogView",
  props: {
    category: {
      type: String,
      default: "all",
    },
  },
  components: {
    CatalogPage,
    StartPage,
  },
  watch: {
    category() {
      console.log("Category changed to: " + this.category);
    },
  },
  methods: {
    scrollDownShow(category) {
      this.$el.querySelector("#catalog").scrollIntoView({ behavior: "smooth" });
      this.category = category;
    },
  },
};
</script>

