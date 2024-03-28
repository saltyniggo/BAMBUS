<template>
  <div>
    <h1>Derzeit ausgeliehen</h1>
    <div v-for="item in rentedItems(user.userId)" :key="item.itemId" class="">
      <h2>{{ item.title }}</h2>
      <p><strong>Ausgeliehen bis zum: </strong>{{ item.returnDate }}</p>
    </div>
    <h1>Reserviert für dich</h1>
    <div v-for="item in reservedItems(user.userId)" :key="item.itemId" class="">
      <h2>{{ item.title }}</h2>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "OrdersTab",
  computed: {
    ...mapGetters("itemStore", {
      rentedItems: "getItemsRentedByUser",
      reservedItems: "getItemsReservedByUser",
    }),
    ...mapGetters("userStore", {
      user: "getUser",
    }),
  },
};
</script>

<style></style>
