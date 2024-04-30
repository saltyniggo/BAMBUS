<template>
  <div>
    <h1>Account Einstellungen</h1>
    <div class="account-container">
      <div class="account-container-left-panel">
        <BaseContainerNarrow>
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
          <br />
          <label for="newLastname" id="label2">Neuer Nachname:</label>
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
          <br />
          <label for="newPassword" id="label2">Neues Passwort:</label>
          <input
            type="password"
            id="newPassword"
            v-model="newPassword"
            required
          />
          <button type="submit">Passwort ändern</button>
        </form>
      </BaseContainerNarrow>
      <BaseContainerNarrow>
        <div class="delete-account">

        
        <h2>Account löschen</h2>
        <button @click="deleteAccount">Account löschen</button>
      </div>
      </BaseContainerNarrow>
      </div>
      
      <div class="account-container-right-panel">
        <BaseContainerNarrow>
        <h2>Account Daten</h2>
        <p><strong>Benutzername:</strong> {{ user.username }}</p>
        <p><strong>Email:</strong> {{ user.email }}</p>
        <p><strong>Vorname:</strong> {{ user.firstName }}</p>
        <p><strong>Nachname:</strong> {{ user.lastName }}</p>
      </BaseContainerNarrow>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
import BaseContainerNarrow from "@/components/base-components/BaseContainerNarrow.vue";

export default {
  name: "AccountTab",
  components: {
    BaseContainerNarrow,
  },
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
    ...mapGetters("userStore", { user: "getUser" }),
  },
};
</script>

<style scoped>
h2 {
  grid-area: h2;
  margin-bottom: 0.5rem;
}
input {
  grid-area: input;
  width: 100%;
  justify-self: end;
}
label {
  grid-area: label;
  justify-self: start;
  width: 100%;
}
button {
  grid-area: button;
  justify-self: end;
  width: 10rem;
}
.account-container {
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr;
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
#label2 {
  grid-area: label2;
  width: 100%;
  justify-self: start;
}
#newPassword, #newLastname {
  grid-area: input2;
  width: 100%;
  justify-self: end;
}
.delete-account {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
}

form {
  width: 100%;
  display: grid;
  grid-template-columns: 33%, 33%, 33%;
  grid-template-rows: 1fr, 1fr, 1fr, 1fr;
  gap: 0.5rem;
  grid-template-areas:"h2 h2 h2" "label input input" "label2 input2 input2" ". . button";
}
</style>
