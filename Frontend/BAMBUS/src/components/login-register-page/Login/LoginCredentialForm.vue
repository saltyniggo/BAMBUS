<template>
  <form class="login-credential-form">
    <section>
      <input
        class="login-credential-form-input"
        type="text"
        placeholder="Username"
      />
      <input
        class="login-credential-form-input"
        type="password"
        placeholder="Password"
      />
    </section>
    <base-text-button type="submit">Login</base-text-button>
  </form>
</template>

<script>
import BaseTextButton from "../../base-components/BaseTextButton.vue";

export default {
  name: "LoginCredentialForm",
  components: {
    BaseTextButton,
  },
};
</script>

<style scoped>
.login-credential-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.login-credential-form-input {
  margin: 0.5rem;
  padding: 0.5rem;
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
