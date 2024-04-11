<template>
  <div class="item-information">
    <p>Item ID: {{ itemId }}</p>
    <p>Item Zustand: {{ isDamagedText[isDamaged] }}</p>
  </div>
</template>

<script>
export default {
  name: "ItemInformation",
  props: {
    itemId: Number,
    isDamaged: Number,
  },
  data() {
    return {
      isDamagedText: {
        0: "Nicht beschädigt",
        1: "Zustand wird geprüft",
        2: "Beschädigt",
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
