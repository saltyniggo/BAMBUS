<template>
  <div>
    <h2>{{ item.title }}</h2>
    <p><strong>Ausgeliehen bis zum: </strong>{{ item.returnDate }}</p>
    <section>
      <p>
        <strong>Verlängern zum: </strong>
      </p>
      <input
        id="inputNewReturnDate"
        type="date"
        name="newReturnDate"
        :min="item.returnDate"
        :max="maxDate"
        v-model="newReturnDate"
      />
      <button
        @click="requestExtension({ item: item, newReturnDate: newReturnDate })"
      >
        click me
      </button>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  name: "RentedItem",
  props: ["item"],
  data() {
    return {
      newReturnDate: "",
    };
  },
  methods: {
    // ...mapActions("itemStore", ["requestExtension"]),
    ...mapActions("notificationStore", {
      requestExtension: "userRequestsLoanExtension",
    }),
  },
  computed: {
    ...mapGetters("userStore", {
      user: "getUser",
    }),
    maxDate() {
      let date = new Date(this.item.returnDate);
      date.setDate(date.getDate() + 31);
      return date.toISOString().split("T")[0];
    },
  },
};
</script>
