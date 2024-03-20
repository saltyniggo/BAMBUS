<template>
    <div class="catalog-view">
        <startPage @scrollDownShow="scrollDownShow"></startPage>
        <catalogPage :category></catalogPage>
    </div>
</template>

<script>
import catalogPage from "../components/catalog-components/CatalogPage.vue";
import startPage from "../components/catalog-components/StartPage.vue";

export default {
    name: "CatalogView",
    data() {
        return {
            category: "all"
        };
    },

    components: {
        catalogPage,
        startPage
    },
    methods: {
        scrollDownShow(category) {
            const catalog = this.$el.querySelector("#catalog");
            this.$el.querySelector("#catalog").scrollIntoView({ behavior: "smooth" });
            this.category = category;

        }
    },
};

</script>

<style scoped>
    .catalog-view {
        scroll-behavior: smooth;
    }

</style>