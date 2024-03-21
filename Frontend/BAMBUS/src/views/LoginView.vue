<template>
  <div>
    <login-page
      class="login-view-content"
      v-if="onLogin"
      @redirectRegister="changePage()"
    />
    <register-page
      class="login-view-content"
      v-else
      @redirectLogin="changePage()"
    />
  </div>
</template>

<script>
import LoginPage from "../components/login-register-page/Login/LoginPage.vue";
import RegisterPage from "../components/login-register-page/Register/RegisterPage.vue";

export default {
  name: "LoginView",
  components: {
    LoginPage,
    RegisterPage,
  },
  data() {
    return {
      onLogin: true,
    };
  },
  methods: {
    changePage() {
      this.onLogin = !this.onLogin;
    },
  },
};
</script>

<style scoped>
.login-view-content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  background-color: #3b8c84;
}
</style>
