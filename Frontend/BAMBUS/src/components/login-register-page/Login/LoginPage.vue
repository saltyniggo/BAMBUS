<template>
  <div class="login-page">
    <base-content-container>
      <h1 slot="header">Login</h1>
      <h2>Please enter your credentials to log in.</h2>
      <login-credential-form />
      <p>Don't have an account yet?</p>
      <base-text-button @click="$router.push('/register')">
        Register
      </base-text-button>
    </base-content-container>
  </div>
</template>

<script>
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
