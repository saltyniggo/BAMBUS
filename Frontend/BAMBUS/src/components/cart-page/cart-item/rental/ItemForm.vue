<template>
  <form class="rental-item-form">
    <label for="fromDate">Ausleihen vom:</label>
    <p name="fromDate">{{ formattedFromDate }}</p>
    <label for="returnDate">Bis zum:</label>
    <input
      id="inputReturnDate"
      type="date"
      name="returnDate"
      :min="minDate"
      :max="maxDate"
      v-model="returnDate"
      @change="
        addReturnDate({ returnDate: this.returnDate, itemId: this.itemId })
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
      returnDate: "",
    };
  },
  methods: {
    ...mapActions("cartStore", ["addReturnDate"]),
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
      return minDate.toISOString().split("T")[0];
    },
    maxDate() {
      const maxDate = new Date();
      maxDate.setDate(maxDate.getDate() + 31);
      return maxDate.toISOString().split("T")[0];
    },
  },
  beforeMount() {
    this.fromDate = new Date();
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

#inputReturnDate {
  width: 33%;
}
</style>
