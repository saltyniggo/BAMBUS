<template>
  <div class="register-page">
    <BaseContentContainer>
      <h1 slot="header">Register</h1>
      <h2>Please enter your credentials to register.</h2>
      <register-credential-form />
      <p>Already have an account?</p>
      <base-text-button @click="$emit('redirectLogin')">
        Login
      </base-text-button>
    </BaseContentContainer>
  </div>
</template>

<script>
import BaseContentContainer from "../../base-components/base-content-container.vue";
import BaseTextButton from "../../base-components/BaseTextButton.vue";
import RegisterCredentialForm from "./RegisterCredentialForm.vue";

export default {
  name: "RegisterPage",
  components: {
    BaseContentContainer,
    BaseTextButton,
    RegisterCredentialForm,
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
