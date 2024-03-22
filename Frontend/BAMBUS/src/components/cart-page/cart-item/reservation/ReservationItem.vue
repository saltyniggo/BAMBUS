<template>
  <div class="reservation-item">
    <h2>{{ reservationItem.title }}</h2>
    <div class="reservation-item-content">
      <item-information
        class="reservation-item-content-row"
        :id="reservationItem.id"
        :condition="reservationItem.condition"
      />
      <p class="reservation-item-content-row">Hier Liste von ausleiern</p>
      <base-text-button
        class="reservation-item-content-row"
        @click="reserveItem(reservationItem)"
        >Item reservieren</base-text-button
      >
    </div>
    <hr />
  </div>
</template>

<script>
import { mapActions } from "vuex";

import ItemInformation from "../ItemInformation.vue";
import BaseTextButton from "../../../base-components/BaseTextButton.vue";

export default {
  name: "ReservationItem",
  props: {
    reservationItem: Object,
  },
  components: {
    ItemInformation,
    BaseTextButton,
  },
  methods: {
    ...mapActions("cartStore", ["reserveItem"]),
  },
};
</script>

<style scoped>
.reservation-item {
  width: 100%;
  margin-bottom: 2vh;
}

.reservation-item-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.reservation-item-content-row {
  width: 15%;
  margin: 1vw, 0;
}
</style>
