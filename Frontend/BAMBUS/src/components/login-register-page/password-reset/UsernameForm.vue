<template>
  <form @submit.prevent class="email-form">
    <label for="email"
      >Bitte gebe Deine Emailadresse ein, um eine Passwortzurücksetzung zu benatragen.
    </label>
    <input
      class="email-form-input"
      type="text"
      placeholder="Emailadresse"
      v-model="email"
    />
    <base-text-button @click="submitPasswordReset()" >
      Passwort zurücksetzen
    </base-text-button>
  </form>
</template>

<script>
import { mapActions } from "vuex";

import BaseTextButton from "../../base-components/BaseTextButton.vue";

export default {
  name: "PasswordResetPage",
  components: {
    BaseTextButton,
  },
  data() {
    return {
      email: "",
    };
  },
  methods: {
    submitPasswordReset() {
      this.requestPasswordReset(this.email);
    },
    ...mapActions("notificationStore", {
      requestPasswordReset: "userRequestsPasswordReset",
    }),
  },
};
</script>

<style scoped>
.username-form {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.username-form-input {
  width: 45%;
  margin: 2.5%;
  padding: 2%;
  border-radius: 0.5rem;
  border: none;
  box-shadow: 0px 0px 5px 0px #222126;
}

.username-form-input:focus {
  box-shadow: 0px 0px 10px 0px #222126;
}

.username-form-input:active {
  box-shadow: 0px 0px 5px 0px #222126;
}

h1,
h2,
p,
input::placeholder {
  color: #222126;
}
</style>
