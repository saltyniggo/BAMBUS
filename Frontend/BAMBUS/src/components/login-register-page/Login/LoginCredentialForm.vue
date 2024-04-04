<template>
  <form @submit.prevent class="login-credential-form">
    <h2>Bitte geben Sie Ihre Anmeldedaten ein, um sich anzumelden.</h2>
    <input
      class="login-credential-form-input"
      type="text"
      placeholder="Username"
      v-model="username"
    />
    <input
      class="login-credential-form-input"
      id="inputPassword"
      type="password"
      placeholder="Password"
      v-model="password"
    />
    <button class="button-toggle-password" @click="togglePassword">
      <i v-if="showPassword" class="fas fa-eye"></i>
      <i v-else class="fa-regular fa-eye"></i>
    </button>
    <base-text-button @click="loginUser(loginForm)">Login</base-text-button>
  </form>
</template>

<script>
import { mapActions } from "vuex";

import BaseTextButton from "../../base-components/BaseTextButton.vue";

export default {
  name: "LoginCredentialForm",
  components: {
    BaseTextButton,
  },
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    ...mapActions("userStore", ["loginUser"]),
    togglePassword() {
      var btn = document.getElementById("inputPassword");
      if (btn.type === "password") {
        btn.type = "text";
      } else {
        btn.type = "password";
      }
    },
  },
  computed: {
    loginForm() {
      return {
        username: this.username,
        password: this.password,
      };
    },
  },
};
</script>

<style scoped>
.login-credential-form {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.login-credential-form-input {
  width: 45%;
  margin: 2.5%;
  padding: 2%;
  border-radius: 0.5rem;
  border: none;
  box-shadow: 0px 0px 5px 0px #222126;
}

.login-credential-form-input:focus {
  box-shadow: 0px 0px 10px 0px #222126;
}

.login-credential-form-input:active {
  box-shadow: 0px 0px 5px 0px #222126;
}

.button-toggle-password {
  background-color: transparent;
  border: none;
  cursor: pointer;
}
</style>
