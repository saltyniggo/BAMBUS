<template>
  <div class="cart-page">
    <h1>Temporärer Einkaufskorb Seiten Header Name</h1>
    <cart-container>
      <h1 slot="header">Ausleihen</h1>
      <rental-item
        v-for="rentalItem in cartRentalItems"
        :key="rentalItem.id"
        :rentalItem="rentalItem"
      ></rental-item>
    </cart-container>
    <cart-container>
      <h1 slot="header">Reservieren</h1>
      <reservation-item
        v-for="reservationItem in cartReservationItems"
        :key="reservationItem.id"
        :reservationItem="reservationItem"
      ></reservation-item>
    </cart-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import CartContainer from "./CartContainer.vue";
import RentalItem from "./cart-item//rental/RentalItem.vue";
import ReservationItem from "./cart-item/reservation/ReservationItem.vue";

export default {
  name: "CartPage",
  components: {
    CartContainer,
    RentalItem,
    ReservationItem,
  },
  // computed: {
  //   ...mapGetters("cartStore", {
  //     cartRentalItems: "getCartRentalItems",
  //     cartReservationItems: "getCartReservationItems",
  //   }),
  // },
  computed: {
    ...mapGetters({ items: "itemStore/getItems" }),
    ...mapGetters({ cartRentalItems: "cartStore/getCartRentalItems" }),
    ...mapGetters({
      cartReservationItems: "cartStore/getCartReservationItems",
    }),
  },
};
</script>

<style scoped>
.cart-page {
  display: flex;
  height: 100vh;
  width: 80vw;
  background-color: #3b8c84;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
}
</style>
