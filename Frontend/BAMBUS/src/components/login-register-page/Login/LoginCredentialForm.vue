<template>
  <form @submit.prevent class="login-credential-form">
    <input
      class="login-credential-form-input"
      type="text"
      placeholder="Username"
      v-model="username"
    />
    <input
      class="login-credential-form-input"
      type="password"
      placeholder="Password"
      v-model="password"
    />
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
  computed: {
    loginForm() {
      return {
        username: this.username,
        password: this.password,
      };
    },
  },
  methods: {
    ...mapActions("userStore", ["loginUser"]),
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
</style>
