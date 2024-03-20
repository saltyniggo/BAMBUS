<template>
    <div class="catalog-view">
        <startPage></startPage>
        <catalogPage></catalogPage>
    </div>
</template>

<script>
import catalogPage from "../components/catalog-components/CatalogPage.vue";
import startPage from "../components/catalog-components/StartPage.vue";

export default {
    name: "CatalogView",
    components: {
        catalogPage,
        startPage
    },
    methods: {

    },
};

</script>

<style scoped>


</style>../components/catalog-components/CatalogFilter.vue../components/catalog-components/Catalog.vue