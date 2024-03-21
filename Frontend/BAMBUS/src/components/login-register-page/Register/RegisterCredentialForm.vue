<template>
  <form @submit.prevent class="register-credential-form">
    <section>
      <input
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
        placeholder="First Name"
        v-model="firstName"
      />
      <input
        class="register-credential-form-input"
        type="text"
        placeholder="Last Name"
        v-model="lastName"
      />
      <input
        class="register-credential-form-input"
        type="password"
        placeholder="Password"
        v-model="password"
      />
      <input
        class="register-credential-form-input"
        type="password"
        placeholder="Repeat Password"
        v-model="repeatPassword"
      />
    </section>
    <base-text-button @click="RegisterUser">Register</base-text-button>
  </form>
</template>

<script>
import BaseTextButton from "../../base-components/BaseTextButton.vue";

export default {
  name: "RegisterCredentialForm",
  components: {
    BaseTextButton,
  },
  data() {
    return {
      username: "",
      email: "",
      password: "",
      repeatPassword: "",
      firstName: "",
      lastName: "",
    };
  },
  methods: {
    RegisterUser() {
      console.log("Username: " + this.username);
      console.log("Email: " + this.email);
      console.log("Password: " + this.password);
      console.log("Repeat Password: " + this.repeatPassword);
      console.log("First Name: " + this.firstName);
      console.log("Last Name: " + this.lastName);
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
</style>
