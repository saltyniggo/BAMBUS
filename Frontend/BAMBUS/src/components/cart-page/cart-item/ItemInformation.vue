<template>
  <div class="item-information">
    <p>Item ID: {{ itemId }}</p>
    <p>Item Zustand: {{ isDamaged }}</p>
  </div>
</template>

<script>
export default {
  name: "ItemInformation",
  props: {
    itemId: Number,
    isDamaged: Number,
  },
};
</script>

<style scoped>
.item-information {
  width: 100%;
}
</style>
