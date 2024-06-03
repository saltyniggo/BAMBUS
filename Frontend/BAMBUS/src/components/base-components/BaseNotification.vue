<template>
  <div class="base-notification-element">
    <section class="notification-base-content">
      <h2>{{ title }}</h2>
      <br />
      <h3>Von {{ senderName }} am {{ notification.date }}</h3>
      <p>{{ notification.text }}</p>
    </section>
    <section
      class="notification-manager-extension"
      v-if="this.notification.type == 5"
    >
      <base-text-button @click="sendResponse(true)">accept</base-text-button>
      <base-text-button @click="sendResponse(false)"
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
  computed: {
    senderName() {
      if (this.notification.senderId == 0) return "System";
      const user = this.$store.getters["userStore/getUserFromUsers"](
        this.notification.senderId
      );
      if (!user) return "Unbekannter User";
      const name = user.firstName + " " + user.lastName;
      return name;
    },
    title() {
      switch (this.notification.type) {
        case 1:
          return "Erinnerung an den Rückgabezeitpunkt";
        case 2:
          return "Benachrichtigung über die Reservierung";
        case 3:
          return "Benachrichtigung über die Ausleihe";
        case 4:
          return "Benachrichtigung über die Rückgabe";
        case 5:
          return "Anfrage zur Verlängerung einer Ausleihe";
        case 6:
          return "Rückgabe ist überfällig";
        case 7:
          return "User hat sich registriert";
        case 8:
          return "Anfrage zur Zurücksetzung des Passworts";
        case 9:
          return "Schaden wurde gemeldet";
        case 10:
          return "Ein neuer Artikel ist im System verfügbar!";
        case 11:
          return "Der Manager hat deine Anfrage zur Verlängerung der Ausleihe bearbeitet";
        default:
          return "Neue Benachrichtigung";
      }
    },
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
