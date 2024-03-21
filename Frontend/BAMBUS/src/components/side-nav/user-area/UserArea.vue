<template>
  <section class="SideNav-Content">
    <user-login
      class="SideNav-Content"
      v-if="!isLoggedIn"
      @clickedLogin="login"
    />
    <user-employee
      class="SideNav-Content"
      v-else-if="isLoggedIn && userRole === 0"
      @clickedLogout="logout"
    />
    <user-manager
      class="SideNav-Content"
      v-else-if="isLoggedIn && userRole === 1"
      @clickedLogout="logout"
    />
    <user-admin
      class="SideNav-Content"
      v-else-if="isLoggedIn && userRole === 2"
      @clickedLogout="logout"
    />
  </section>
</template>

<script>
import UserLogin from "./UserLogin.vue";
import UserEmployee from "./UserEmployee.vue";
import UserManager from "./UserManager.vue";
import UserAdmin from "./UserAdmin.vue";

export default {
  name: "SideNavUserArea",
  components: {
    UserLogin,
    UserEmployee,
    UserManager,
    UserAdmin,
  },
  data() {
    return {
      isLoggedIn: false,
      userRole: 1,
    };
  },
  methods: {
    login() {
      this.isLoggedIn = true;
    },
    logout() {
      this.isLoggedIn = false;
    },
  },
};
</script>

<style>
.SideNav-Content {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  height: 10%;
  margin-left: 1%;
  justify-content: start;
}

.SideNav-Content p {
  display: inline-flex;
  font-size: 1.5vw;
  color: #f2eae4;
}

.SideNav-Content p:hover {
  cursor: pointer;
  color: #d9910d;
  transition: 0.3s;
}

.SideNav-Content i {
  width: 2.5rem;
  font-size: 1.5vw;
  display: inline-flex;
  color: #f2eae4;
}
</style>
