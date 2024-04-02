<template>
  <div class="catalog">
    <catalog-filter :category="category"></catalog-filter>
    <div class="catalog-items" v-if="items">
      <item-container
        v-for="item in items"
        :key="item.itemId"
        :item="item"
        @openEditModal="openEditModal(item.itemId)"
        @openRatingsModal="openRatingsModal(item.itemId)"
      ></item-container>
    </div>
    <edit-item-modal v-if="showsEditModal"></edit-item-modal>
    <ratings-modal v-if="showsRatingsModal"></ratings-modal>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import CatalogFilter from "./catalog-filter/CatalogFilter.vue";
import ItemContainer from "./item-container/ItemContainer.vue";
import EditItemModal from "./edit-item-modal/EditItemModal.vue";
import RatingsModal from "./RatingsModal.vue";

export default {
  name: "CatalogPage",
  components: {
    CatalogFilter,
    ItemContainer,
    EditItemModal,
    RatingsModal,
  },
  props: {
    category: {
      type: String,
      default: "all",
    },
  },
  computed: {
    ...mapGetters({
      items: "itemStore/getItems",
      showsEditModal: "modalStore/getEditModalStatus",
      showsRatingsModal: "modalStore/getRatingsModalStatus",
    }),
  },
  methods: {
    async openEditModal(id) {
      await this.$store.dispatch("modalStore/closeAllModals");
      await this.$store.dispatch("itemStore/setEditItemId", id);
      await this.$store.dispatch("modalStore/toggleEditModal");
    },
    async openRatingsModal(id) {
      await this.$store.dispatch("modalStore/closeAllModals");
      await this.$store.dispatch("ratingStore/setItemId", id);
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
