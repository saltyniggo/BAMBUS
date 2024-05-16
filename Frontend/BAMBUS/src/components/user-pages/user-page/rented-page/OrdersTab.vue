<template>
  <div class="content">
    <div class="rented">
      <h1>Derzeit ausgeliehen</h1>
      <rented-item
        v-for="item in rentedItems"
        :key="item.itemId"
        :item="item"
        @openReturnModal="openReturnModal(item.itemId)"
        @extensionRequested="updateRentedItems()"
      />
    </div>

    <div class="reserved">
      <h1>Reserviert für dich</h1>
      <reserved-item
        v-for="item in reservedItems(user.userId)"
        :key="item.itemId"
        :item="item"
        :userId="user.userId"
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
      // rentedItems: "getItemsRentedByUser",
      reservedItems: "getItemsReservedByUser",
    }),

    ...mapGetters("userStore", {
      user: "getUser",
    }),
    rentedItems() {
      let rentedItems = [];
      let rentedItemsIds =
        this.$store.getters["loanStore/getActiveItemIdFromUserId"];
      if (!Array.isArray(rentedItemsIds)) {
        rentedItemsIds = [rentedItemsIds];
      }
      rentedItemsIds.forEach((id) => {
        let item = this.$store.getters["itemStore/getItemById"](id);
        rentedItems.push(item);
      });
      return rentedItems;
    },
  },
  methods: {
    openReturnModal(id) {
      this.$emit("openReturnModal", id);
    },
    updateRentedItems() {
      this.rentedItems = [];
      let rentedItemsIds =
        this.$store.getters["loanStore/getActiveItemIdFromUserId"];
      if (!Array.isArray(rentedItemsIds)) {
        rentedItemsIds = [rentedItemsIds];
      }
      rentedItemsIds.forEach((id) => {
        let item = this.$store.getters["itemStore/getItemById"](id);
        this.rentedItems.push(item);
      });
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
