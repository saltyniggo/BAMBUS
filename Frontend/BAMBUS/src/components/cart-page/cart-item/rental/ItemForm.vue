<template>
  <form class="rental-item-form">
    <label for="fromDate">Ausleihen vom:</label>
    <p name="fromDate">{{ formattedFromDate }}</p>
    <label for="dueDate">Bis zum:</label>
    <input
      id="inputdueDate"
      type="date"
      name="dueDate"
      :min="minDate"
      :max="maxDate"
      v-model="dueDate"
      @change="
        adddueDate({ dueDate: this.dueDate, itemId: this.itemId })
      "
    />
  </form>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "ItemForm",
  props: {
    itemId: Number,
  },
  data() {
    return {
      dueDate: "",
    };
  },
  methods: {
    ...mapActions("cartStore", ["adddueDate"]),
  },
  computed: {
    formattedFromDate() {
      const date = new Date(this.fromDate);
      const day = date.getDate().toString().padStart(2, "0");
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const year = date.getFullYear();
      return `${day}.${month}.${year}`;
    },
    minDate() {
      const minDate = new Date();
      return minDate.toLocaleDateString("de-DE");
    },
    maxDate() {
      const maxDate = new Date();
      maxDate.setDate(maxDate.getDate() + 31);
      return maxDate.toLocaleDateString("de-DE");
    },
  },
  beforeMount() {
    this.fromDate = new Date().toLocaleDateString("de-DE");
  },
};
</script>

<style scoped>
.rental-item-form {
  display: flex;
  flex-direction: column;
  width: 15%;
  margin: 2% 0;
}

#inputdueDate {
  width: 33%;
}
</style>
