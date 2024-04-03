<template>
  <div class="catalog-view">
    <startPage></startPage>
    <catalogPage
      :category="this.$route.params.category"
      id="catalog"
    ></catalogPage>
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
    },
  },
  components: {
    CatalogPage,
    StartPage,
  },
};
</script>

<style scoped>

</style>

