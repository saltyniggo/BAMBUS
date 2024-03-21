<template>
  <div class="reservation-item">
    <h2>{{ reservationItem.title }}</h2>
    <div class="reservation-item-content">
      <item-information
        :id="reservationItem.id"
        :condition="reservationItem.condition"
      />
      <p>Hier Liste von ausleiern</p>
      <base-text-button>Item reservieren</base-text-button>
    </div>
    <hr />
  </div>
</template>

<script>
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
};
</script>

<style scoped>
.reservation-item {
  width: 100%;
}

.reservation-item-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
</style>
