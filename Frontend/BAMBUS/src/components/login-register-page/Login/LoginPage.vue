<template>
  <div class="login-page">
    <BaseContentContainer>
      <h1 slot="header">Login</h1>
      <h2>Please enter your credentials to log in.</h2>
      <login-credential-form />
      <p>Don't have an account yet?</p>
      <base-text-button @click="$emit('redirectRegister')">
        Register
      </base-text-button>
    </BaseContentContainer>
  </div>
</template>

<script>
import BaseContentContainer from "../../base-components/base-content-container.vue";
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
.login-page {
}

h1,
h2,
p,
input::placeholder {
  color: #222126;
}
</style>
