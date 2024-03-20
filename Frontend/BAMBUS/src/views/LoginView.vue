<template>
  <div class="login-view">
    <login-page
      class="login-view-content"
      v-if="currentPage == 'login'"
      @redirectRegister="redirectTo('register')"
    />
    <register-page
      class="login-view-content"
      v-else
      @redirectLogin="redirectTo('login')"
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
      currentPage: "login",
    };
  },
  methods: {
    redirectTo(page) {
      this.currentPage = page;
    },
  },
};
</script>

<style scoped>
.login-view {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #3b8c84;
}

.login-view-content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #3b8c84;
}
</style>
