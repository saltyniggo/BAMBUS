<template>
  <form @submit.prevent class="register-credential-form">
    <h2>Bitte geben Sie Ihre Anmeldedaten ein, um sich zu registrieren.</h2>
    <section>

      <div>
        <input
          class="register-credential-form-input"
          type="text"
          placeholder="Username"
          v-model="username"
        />
        <div v-if="v$.username.$dirty">
          <span v-if="!v$.username.required">Username is required</span>
          <span v-if="!v$.username.minLength">Username must be at least 3 characters</span>
          <span v-if="!v$.username.maxLength">Username must be at most 20 characters</span>
        </div>
      </div>


      <!-- <input
        class="register-credential-form-input"
        type="text"
        placeholder="Username"
        v-model="username"
      />
      <input
        class="register-credential-form-input"
        type="email"
        placeholder="Email"
        v-model="email"
      />
      <input
        class="register-credential-form-input"
        type="text"
        placeholder="Vorname"
        v-model="firstName"
      />
      <input
        class="register-credential-form-input"
        type="text"
        placeholder="Nachname"
        v-model="lastName"
      />
      <input
        class="register-credential-form-input"
        id="inputPassword"
        :type="showPassword ? 'text' : 'password'"
        placeholder="Passwort"
        v-model="password"
      />
      <input
        class="register-credential-form-input"
        id="inputPasswordRepeat"
        :type="showPassword ? 'text' : 'password'"
        placeholder="Passwort wiederholen"
        v-model="repeatPassword"
      /> -->
    </section>
    <button class="button-toggle-password" type="button" @click="togglePassword()">
      <i v-if="showPassword" class="fas fa-eye"></i>
      <i v-else class="fa-regular fa-eye"></i>
    </button>
    <base-text-button @click="registerUser(registerForm)">Registrieren</base-text-button>
  </form>
</template>

<script>
import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength, maxLength } from "@vuelidate/validators";

import { mapActions } from "vuex";

import BaseTextButton from "../../base-components/BaseTextButton.vue";

export default {
  name: "RegisterCredentialForm",
  components: {
    BaseTextButton,
  },
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      username: "",
      email: "",
      password: "",
      repeatPassword: "",
      firstName: "",
      lastName: "",
      showPassword: false,
    };
  },
  validations: {
    username: { required, minLength: minLength(3), maxLength: maxLength(20) },
    email: { required, email },
    password: { required, minLength: minLength(8), maxLength: maxLength(20) },
    repeatPassword: { required, minLength: minLength(8), maxLength: maxLength(20) },
    firstName: { required, minLength: minLength(2), maxLength: maxLength(20) },
    lastName: { required, minLength: minLength(2), maxLength: maxLength(20) },
  },
  methods: {
    // ...mapActions("userStore", ["registerUser"]),
    registerUser(registerForm) {
      console.log(registerForm);
    },
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
  },
  computed: {
    registerForm: function () {
      return {
        username: this.username,
        email: this.email,
        password: this.password,
        repeatPassword: this.repeatPassword,
        firstName: this.firstName,
        lastName: this.lastName,
      };
    },
  },
};
</script>

<style scoped>
.register-credential-form {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.register-credential-form-input {
  width: 45%;
  margin: 2.5%;
  padding: 2%;
  border-radius: 0.5rem;
  border: none;
  box-shadow: 0px 0px 5px 0px #222126;
}

.register-credential-form-input:focus {
  box-shadow: 0px 0px 10px 0px #222126;
}

.register-credential-form-input:active {
  box-shadow: 0px 0px 5px 0px #222126;
}
.button-toggle-password {
  background-color: transparent;
  border: none;
  cursor: pointer;
}
</style>
