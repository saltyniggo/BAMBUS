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
    ...mapActions("notificationStore", ["checkAlldueDates"]),
    ...mapActions("userStore", ["deleteNotificationsWithType"]),
  },
  computed: {
    ...mapGetters("userStore", { user: "getUser" }),
  },
  beforeMount() {
    this.deleteNotificationsWithType(6);
    this.checkAlldueDates();
  },
};
</script>

<style></style>
