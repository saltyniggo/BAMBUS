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

import BaseNotification from "../../base-components/BaseNotification.vue";

export default {
  name: "OverviewTab",
  components: {
    BaseNotification,
  },
  computed: {
    ...mapGetters("userStore", { user: "getUser" }),
  },
};
</script>

<style></style>
