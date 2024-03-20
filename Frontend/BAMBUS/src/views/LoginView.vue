<template>
  <div class="login-page">
    <BaseContentContainer>
      <h1 slot="header">Login</h1>
      <h2>Please enter your credentials to log in.</h2>
      <form class="login-page-form">
        <section>
          <input
            class="login-page-form-input"
            type="text"
            placeholder="Username"
          />
          <input
            class="login-page-form-input"
            type="password"
            placeholder="Password"
          />
        </section>
        <base-text-button type="submit">Login</base-text-button>
      </form>
      <p>Don't have an account yet?</p>
      <base-text-button v-on:click="$router.push('/register')">
        Register
      </base-text-button>
    </BaseContentContainer>
  </div>
</template>

<script>
import BaseContentContainer from "@/components/base-components/base-content-container.vue";
import BaseTextButton from "@/components/base-components/BaseTextButton.vue";

export default {
  name: "LoginView",
  components: {
    BaseContentContainer,
    BaseTextButton,
  },
};
</script>

<style scoped>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #3b8c84;
}

.login-page-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.login-page-form-input {
  margin: 0.5rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: none;
  box-shadow: 0px 0px 5px 0px #222126;
}

.login-page-form-input:focus {
  box-shadow: 0px 0px 10px 0px #222126;
}

.login-page-form-input:active {
  box-shadow: 0px 0px 5px 0px #222126;
}

h1,
h2,
p,
input::placeholder {
  color: #222126;
}
</style>
