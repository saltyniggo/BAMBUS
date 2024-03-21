<template>
  <div class="rental-item">
    <h2>{{ rentalItem.title }}</h2>
    <div class="rental-item-content">
      <item-information />
      <item-form />
      <base-text-button>Item ausleihen</base-text-button>
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
  width: 100%;
}

.rental-item-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
</style>
