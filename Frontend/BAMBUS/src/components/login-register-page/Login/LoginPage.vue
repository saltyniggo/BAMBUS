<template>
  <div class="login-page">
    <base-content-container v-if="loginOpen">
      <h1 slot="header">Login</h1>
      <h2>Bitte geben Sie Ihre Anmeldedaten ein, um sich anzumelden.</h2>
      <login-credential-form />
      <p>Noch kein Konto?</p>
      <base-text-button @click="$router.push('/register')">
        Registrieren
      </base-text-button>
      <p>Passwort vergessen?</p>
      <base-text-button @click="changePage()">
        Passwort zurücksetzen
      </base-text-button>
    </base-content-container>
    <base-content-container v-else>
      <h1 slot="header">Passwort zurücksetzen</h1>
      <h2>
        Bitte geben Sie Ihren Usernamen ein, um Ihr Passwort zurückzusetzen.
      </h2>
      <input type="text" placeholder="Username" v-model="username" required />
      <base-text-button @click="submitPasswordReset()">
        Passwort zurücksetzen
      </base-text-button>
      <p>Sie haben Ihr Passwort wieder gefunden?</p>
      <base-text-button @click="changePage()"
        >Zurück zum Login</base-text-button
      >
    </base-content-container>
  </div>
</template>

<script>
import { mapActions } from "vuex";

import BaseContentContainer from "../../base-components/BaseContentContainer.vue";
import BaseTextButton from "../../base-components/BaseTextButton.vue";
import LoginCredentialForm from "./LoginCredentialForm.vue";

export default {
  name: "LoginPage",
  components: {
    BaseContentContainer,
    BaseTextButton,
    LoginCredentialForm,
  },
  data() {
    return {
      loginOpen: true,
      username: "",
    };
  },
  methods: {
    changePage() {
      this.loginOpen = !this.loginOpen;
    },
    submitPasswordReset() {
      this.requestPasswordReset(this.username);
      alert("Passwort zurücksetzen angefordert.");
      this.changePage();
    },
    ...mapActions("notificationStore", {
      requestPasswordReset: "userRequestsPasswordReset",
    }),
  },
};
</script>

<style scoped>
h1,
h2,
p,
input::placeholder {
  color: #222126;
}
</style>
