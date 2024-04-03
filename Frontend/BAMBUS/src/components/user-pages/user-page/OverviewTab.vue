<template>
  <div>
    <h1>Benachrichtigungen</h1>
    <base-notification
      v-for="notification in user.notifications"
      :key="notification.id"
      :notification="notification"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

import BaseNotification from "../../base-components/BaseNotification.vue";

export default {
  name: "OverviewTab",
  components: {
    BaseNotification,
  },
  methods: {
    ...mapActions("notificationStore", [
      "checkReturnDates",
      "checkReservedItems",
    ]),
    ...mapActions("userStore", ["deleteNotificationsWithTitle"]),
  },
  computed: {
    ...mapGetters("userStore", { user: "getUser" }),
  },
  beforeMount() {
    this.deleteNotificationsWithTitle("Erinnerung an den Rückgabezeitpunkt");
    this.checkReservedItems();
    this.checkReturnDates();
  },
};
</script>

<style></style>
