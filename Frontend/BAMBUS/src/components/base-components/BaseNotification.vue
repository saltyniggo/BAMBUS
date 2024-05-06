<template>
  <div class="base-notification-element">
    <section class="notification-base-content">
      <h2>{{ title }}</h2>
      <br />
      <h3>Von {{ senderName }} am {{ date }}</h3>
      <p>{{ notification.text }}</p>
    </section>
    <section class="notification-manager-extension" v-if="this.notification.type == 4">
      <base-text-button @click="sendResponse('accept')">accept</base-text-button>
      <base-text-button @click="sendResponse('decline')">nein oida</base-text-button>
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
  computed: {
    senderName() {
      const user = this.$store.getters["userStore/getUserFromUsers"](this.notification.senderId);
      var name = user.firstName + " " + user.lastName;
      return name;
    },
    date() {
      return new Date(this.notification.date).toLocaleDateString();
    },
    title() {
      switch (this.notification.type) {
        case 0:
          return "Erinnerung Rückgabe";
        case 1:
          return "Reservierung";
        case 2:
          return "Verleihung";
        case 3:
          return "Rückgabe";
        case 4:
          return "Verlängerungsanfrage";
        case 5:
          return "Frist abgelaufen";
        case 6:
          return "Neue Registrierung"
        case 7:
          return "Passwort zurücksetzen";
        case 8:
          return "Schadensmeldung";
        case 9:
          return "Neuer Katalogsgegenstand";
        case 10:
          return "Anfragenantwort"
        default:
          return "Neue Benachrichtigung";
      }
    }
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
  padding: 1.25rem;
  margin: 1%;
  border-radius: 2rem;
  box-shadow: 0 0 0.5rem #222126;
  color: #222126;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
