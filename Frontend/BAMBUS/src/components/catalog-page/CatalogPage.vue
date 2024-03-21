<template>
     <div class="catalog" id="catalog">

        <CatalogFilter></CatalogFilter>

        <div class="catalog-items">
            <item-container></item-container>
            <item-container></item-container>
            <item-container></item-container>
            <item-container></item-container>
            <item-container></item-container>
            <item-container></item-container>
            <item-container></item-container>
            <item-container></item-container>
        </div>
    </div>
</template>

<script>
import CatalogFilter from './CatalogFilter.vue';
import itemContainer from "../base-components/base-item-container.vue";
export default {
    name: "CatalogPage",
    components: {
        CatalogFilter,
        itemContainer
    },
    props: {
        category: {
            type: String,
            default: "all"
        }
    },
    watch: {
        category() {
            console.log("Category changed to: " + this.category);
        }
    }
};

</script>

<style scoped>
   .catalog {
        min-height: 100vh;
        width: 100%;
        background-color: #3b8c84;
        scroll-behavior: smooth;
    }

    .catalog-items {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        grid-gap: 2rem;
        padding: 2rem;
        align-items: stretch;
    }
</style>