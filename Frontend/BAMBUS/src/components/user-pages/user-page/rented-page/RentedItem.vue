<template>
  <div>
    <h2>{{ item.title }}</h2>
    <p><strong>Ausgeliehen bis zum: </strong>{{ item.dueDate }}</p>
    <section>
      <p>
        <strong>Verlängern zum: </strong>
      </p>
      <input
        id="inputNewdueDate"
        type="date"
        name="newdueDate"
        :min="item.dueDate"
        :max="maxDate"
        v-model="newdueDate"
      />
      <button @click="requestExtension({ item: item, newdueDate: newdueDate })">
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
      newdueDate: "",
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
      let date = new Date(this.item.dueDate);
      date.setDate(date.getDate() + 31);
      return date.toISOString().split("T")[0];
    },
  },
};
</script>
