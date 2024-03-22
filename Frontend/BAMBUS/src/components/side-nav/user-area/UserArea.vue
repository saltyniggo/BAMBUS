<template>
  <div class="SideNav-Content">
    <cart-link
      class="SideNav-Content-Section"
      @click="redirectTo('/cart')"
    ></cart-link>
    <section class="SideNav-Content-User-Area">
      <user-login
        class="SideNav-Content-Section"
        v-if="!isLoggedIn"
        @click="redirectTo('/login')"
      />
      <user-employee
        class="SideNav-Content-Section"
        v-else-if="isLoggedIn && userRole === 0"
        @click="redirectTo('/my-view')"
      />
      <user-manager
        class="SideNav-Content-Section"
        v-else-if="isLoggedIn && userRole === 1"
        @click="redirectTo('/managing')"
      />
      <user-admin
        class="SideNav-Content-Section"
        v-else-if="isLoggedIn && userRole === 2"
        @click="redirectTo('/admin')"
      />
    </section>
  </div>
</template>

<script>
import CartLink from "./CartLink.vue";
import UserLogin from "./UserLogin.vue";
import UserEmployee from "./UserEmployee.vue";
import UserManager from "./UserManager.vue";
import UserAdmin from "./UserAdmin.vue";

export default {
  name: "SideNavUserArea",
  components: {
    CartLink,
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
    redirectTo(path) {
      this.$router.push(path);
    },
  },
};
</script>

<style>
.SideNav-Content-Section {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  height: 10%;
  margin-left: 1%;
  justify-content: start;
}

.SideNav-Content-Section p {
  display: inline-flex;
  font-size: 1.5vw;
  color: #f2eae4;
}

.SideNav-ContentSection-Section p:hover {
  cursor: pointer;
  color: #d9910d;
  transition: 0.3s;
}

.SideNav-Content-Section i {
  width: 2.5rem;
  font-size: 1.5vw;
  display: inline-flex;
  color: #f2eae4;
}
</style>
