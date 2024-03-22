<template>
     <div class="catalog" id="catalog">

        <CatalogFilter></CatalogFilter>

        <div class="catalog-items" v-if="items">
            <item-container v-for="item in items" :key="item.itemId" :item="item" @openEditModal="openEditModal(item.itemId)" @openRatingsModal="openRatingsModal(item.itemId)"></item-container>
        </div>
        <EditModal v-if="showsEditModal"></EditModal>
        <RatingsModal v-if="showsRatingsModal"></RatingsModal>

    </div>
</template>

<script>
import CatalogFilter from './CatalogFilter.vue';
import itemContainer from "../base-components/base-item-container.vue";
import EditModal from "./EditItemModal.vue";
import RatingsModal from "./RatingsModal.vue";
import { mapGetters } from "vuex";

export default {
    name: "CatalogPage",
    components: {
        CatalogFilter,
        itemContainer,
        EditModal,
        RatingsModal,
    },
    props: {
        category: {
            type: String,
            default: "Alle"
        }
    },

    computed:{
        ...mapGetters({items: "itemStore/getItems", showsEditModal: "modalStore/getEditModalStatus", showsRatingsModal: "modalStore/getRatingsModalStatus"}),
    },
    watch: {
        category() {
            console.log("Category changed to: " + this.category);
            console.log("Items: " + this.items);
        }
    },
    methods: {
       async  openEditModal(id) {
            await this.$store.dispatch("modalStore/closeAllModals");
            await this.$store.dispatch("itemStore/setEditItemId", id);
            await this.$store.dispatch("modalStore/toggleEditModal");
        },
        async openRatingsModal(id) {
            await this.$store.dispatch("modalStore/closeAllModals");
            await this.$store.dispatch("itemStore/setRatingsId", id);
            await this.$store.dispatch("modalStore/toggleRatingsModal");
        },
    },
};

</script>

<style scoped>
   .catalog {
        min-height: 100vh;
        width: 100%;
        background-color: #3b8c84;
    }

    .catalog-items {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        grid-gap: 2rem;
        padding: 2rem;
        align-items: stretch;
        justify-items: center;
    }
</style>