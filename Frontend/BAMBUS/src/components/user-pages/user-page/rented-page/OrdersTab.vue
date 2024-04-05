<template>
  <div class="content">
    <div class="rented">
      <h1>Derzeit ausgeliehen</h1>
      <rented-item
        v-for="itemObject in rentedItemObjects(user.userId)"
        :key="itemObject.item.itemId"
        :itemObject="itemObject"
        @openReturnModal="openReturnModal(itemObject.item.itemId)"
      />
    </div>

    <div class="reserved">
      <h1>Reserviert für dich</h1>
      <reserved-item
        v-for="item in reservedItems(user.userId)"
        :key="item.itemId"
        :item="item"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import RentedItem from "./RentedItem.vue";
import ReservedItem from "./ReservedItem.vue";

export default {
  name: "OrdersTab",
  components: {
    RentedItem,
    ReservedItem,
  },
  computed: {
    ...mapGetters("itemStore", {
      rentedItemObjects: "getItemsRentedByUser",
      reservedItems: "getItemsReservedByUser",
    }),
    ...mapGetters("userStore", {
      user: "getUser",
    }),
    maxDate() {
      const maxDate = new Date();
      maxDate.setDate(maxDate.getDate() + 31);
      return maxDate.toLocaleDateString("de-DE");
    },
  },
  methods: {
    openReturnModal(id) {
      this.$emit("openReturnModal", id);
    },
  },
};
</script>

<style scoped>
.content {
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-areas: "rented reserved";
  gap: 1rem;
  padding: 1rem;
}

.rented {
  grid-area: rented;
}

.reserved {
  grid-area: reserved;
}
</style>
