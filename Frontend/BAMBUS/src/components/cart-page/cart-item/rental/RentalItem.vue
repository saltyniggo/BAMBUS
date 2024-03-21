<template>
  <div class="rental-item">
    <h2>{{ rentalItem.title }}</h2>
    <div class="rental-item-content">
      <item-information
        class="rental-item-content-row"
        :id="rentalItem.id"
        :condition="rentalItem.condition"
      />
      <item-form class="rental-item-content-row" />
      <base-text-button class="rental-item-content-row"
        >Item ausleihen</base-text-button
      >
    </div>
    <hr />
  </div>
</template>

<script>
import ItemInformation from "../ItemInformation.vue";
import ItemForm from "./ItemForm.vue";
import BaseTextButton from "../../../base-components/BaseTextButton.vue";

export default {
  name: "RentalItem",
  props: {
    rentalItem: Object,
  },
  components: {
    ItemInformation,
    ItemForm,
    BaseTextButton,
  },
};
</script>

<style scoped>
.rental-item {
  border: 1px solid black;
  width: 100%;
}

.rental-item-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.rental-item-content-row {
  width: 15%;
  margin: 2% 0;
}
</style>
