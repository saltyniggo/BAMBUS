<template>
  <div>
    <h1>Derzeit ausgeliehen</h1>
    <rented-item
      v-for="item in rentedItems(user.userId)"
      :key="item.itemId"
      :item="item"
      class=""
    />
    <h1>Reserviert für dich</h1>
    <div v-for="item in reservedItems(user.userId)" :key="item.itemId" class="">
      <h2>{{ item.title }}</h2>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import RentedItem from "./RentedItem.vue";

export default {
  name: "OrdersTab",
  components: {
    RentedItem,
  },
  computed: {
    ...mapGetters("itemStore", {
      rentedItems: "getItemsRentedByUser",
      reservedItems: "getItemsReservedByUser",
    }),
    ...mapGetters("userStore", {
      user: "getUser",
    }),
    maxDate() {
      const maxDate = new Date();
      maxDate.setDate(maxDate.getDate() + 31);
      return maxDate.toISOString().split("T")[0];
    },
  },
};
</script>

<style></style>
