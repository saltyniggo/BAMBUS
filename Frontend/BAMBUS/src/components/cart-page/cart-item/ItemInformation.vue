<template>
  <div class="item-information">
    <p>Item ID: {{ id }}</p>
    <p>Item Zustand: {{ condition }}</p>
  </div>
</template>

<script>
export default {
  name: "ItemInformation",
  props: {
    id: Number,
    condition: Number,
  },
};
</script>

<style scoped>
.item-information {
  width: 100%;
}
</style>
