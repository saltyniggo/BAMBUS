<template>
  <div>
    <h1>Account Einstellungen</h1>
    <div class="account-container">
      <div class="account-container-left-panel">
        <form @submit.prevent="changeUsername(this.newUsername)">
          <h2>Benutzernamen ändern</h2>
          <label for="newUsername">Neuer Benutzername:</label>
          <input type="text" id="newUsername" v-model="newUsername" required />
          <button type="submit">Benutzernamen ändern</button>
        </form>
        <form @submit.prevent="changeEmail(newEmail)">
          <h2>Email ändern</h2>
          <label for="newEmail">Neue Email:</label>
          <input type="email" id="newEmail" v-model="newEmail" required />
          <button type="submit">Email ändern</button>
        </form>
        <form
          @submit.prevent="
            changeName({ firstName: newFirstname, lastName: newLastname })
          "
        >
          <h2>Namen ändern</h2>
          <label for="newFirstname">Neuer Vorname:</label>
          <input type="text" id="newFirstname" v-model="newFirstname" />
          <label for="newLastname">Neuer Nachname:</label>
          <input type="text" id="newLastname" v-model="newLastname" />
          <button type="submit">Namen ändern</button>
        </form>
        <form
          @submit.prevent="
            changePassword({
              currentPassword: currentPassword,
              newPassword: newPassword,
            })
          "
        >
          <h2>Passwort ändern</h2>
          <label for="currentPassword">Aktuelles Passwort:</label>
          <input
            type="password"
            id="currentPassword"
            v-model="currentPassword"
            required
          />
          <label for="newPassword">Neues Passwort:</label>
          <input
            type="password"
            id="newPassword"
            v-model="newPassword"
            required
          />
          <button type="submit">Passwort ändern</button>
        </form>
        <h2>Account löschen</h2>
        <button @click="deleteAccount">Account löschen</button>
      </div>
      <div class="account-container-right-panel">
        <h2>Account Daten</h2>
        <p><strong>Benutzername:</strong> {{ user.username }}</p>
        <p><strong>Email:</strong> {{ user.email }}</p>
        <p><strong>Vorname:</strong> {{ user.firstname }}</p>
        <p><strong>Nachname:</strong> {{ user.lastname }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  name: "AccountTab",
  data() {
    return {
      currentPassword: "",
      newPassword: "",
      newUsername: "",
      newEmail: "",
      newFirstname: "",
      newLastname: "",
    };
  },
  methods: {
    ...mapActions("userStore", [
      "changeUsername",
      "changeEmail",
      "changeName",
      "changePassword",
      "deleteAccount",
    ]),
  },
  computed: {
    ...mapGetters("userStore", { user: "getUserObject" }),
  },
};
</script>

<style>
.account-container {
  display: flex;
  margin-top: 2.5%;
}
.account-container-left-panel {
  flex: 1;
  padding-right: 1%;
}

.account-container-left-panel form {
  margin-bottom: 2.5%;
}

.account-container-right-panel {
  flex: 1;
  padding-left: 1%;
}
</style>
