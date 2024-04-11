<template>
  <div class="base-notification-element">
    <section class="notification-base-content">
      <h2>{{ notification.title }}</h2>
      <h3>Von {{ notification.senderName }} am {{ notification.date }}</h3>
      <p>{{ notification.message }}</p>
    </section>
    <section
      class="notification-manager-extension"
      v-if="this.notification.type == 5"
    >
      <base-text-button @click="sendResponse('accept')"
        >accept</base-text-button
      >
      <base-text-button @click="sendResponse('decline')"
        >nein oida</base-text-button
      >
    </section>
  </div>
</template>

<script>
import { mapActions } from "vuex";

import BaseTextButton from "./BaseTextButton.vue";
import notification from "@/store/modules/notification";

export default {
  name: "BaseNotification",
  props: {
    notification: {
      type: Object,
      required: true,
    },
  },
  components: {
    BaseTextButton,
  },
  methods: {
    ...mapActions("loanStore", ["extensionRequestResponse"]),
    ...mapActions("userStore", ["deleteNotification"]),
    sendResponse(response) {
      this.extensionRequestResponse({
        loanId: this.notification.payload.loanId,
        newDueDate: this.notification.payload.newDueDate,
        response: response,
      });
      this.deleteNotification({
        notificationId: this.notification.notificationId,
        userId: this.notification.receiverId,
      });
    },
  },
};
</script>

<style scoped>
.base-notification-element {
  background-color: #f2eae4;
  padding: 1%;
  margin: 1%;
  border-radius: 2rem;
  box-shadow: 0 0 0.5rem #222126;
  color: #222126;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
