<template>
  <div class="item-information">
    <p>Item ID: {{ item.id }}</p>
    <p>Item Zustand: {{ item.condition }}</p>
  </div>
</template>

<script>
export default {
  name: "ItemInformation",
  props: {
    id: Number,
    condition: Number,
  },
  data() {
    return {
      item: {
        id: 1,
        reservations: [],
        condition: 1,
        available: true,
        title: "Test Item",
        author: "Test Author",
        category: "Test Category",
        ISBN: "Test ISBN",
      },
    };
  },
};
</script>

<style scoped>
.item-information {
  width: 100%;
}
</style>
