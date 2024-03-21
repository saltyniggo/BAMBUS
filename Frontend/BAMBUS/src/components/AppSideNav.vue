<template>
  <div class="SideNav">
    <section class="SideNav-Top-Branding">
      <img src="/logo.jpg" alt="Bambus Logo" id="side-nav-logo" />
      <h1>BAMBUS</h1>
    </section>
    <div class="SideNav-Base-Link-Tree">
      <section class="SideNav-Item-Link-Tree">
        <p>Toller Buch Bums</p>
        <p>Toller Magazin Bums</p>
        <p>Toller Spiele Bums</p>
      </section>
      <section class="SideNav-User-Area">
        <section class="SideNav-User-Area-Login" v-if="!isLoggedIn">
          <i
            class="fa-solid fa-arrow-right-to-bracket"
            style="color: #f2eae4"
          ></i>
          <p @click="login">Login</p>
        </section>
        <section class="SideNav-User-Area-Profile" v-else>
          <i class="fa-regular fa-user" style="color: #f2eae4"></i>
          <p @click="logout">Account</p>
        </section>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideNav",
  data() {
    return {
      isLoggedIn: false,
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

<style scoped>
.SideNav {
  display: fixed;
  border-right: 0.25em solid #f2eae4;
  background-color: #222126;
  padding: 0.5%;
  width: 20vw;
  height: 100vh;
}

.SideNav-Top-Branding {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 10%;
  margin-bottom: 5%;
}

.SideNav-Top-Branding h1 {
  font-size: 2rem;
  margin-left: 5%;
  color: #f2eae4;
}

.SideNav-Base-Link-Tree {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90%;
}

.SideNav-Base-Link-Tree p {
  font-size: 1.2rem;
  color: #f2eae4;
  margin-bottom: 5%;
}

.SideNav-Base-Link-Tree p:hover,
.SideNav-User-Area-Login p:hover,
.SideNav-User-Area-Profile p:hover {
  cursor: pointer;
  color: #d9910d;
  transition: 0.3s;
}

.SideNav-User-Area-Login,
.SideNav-User-Area-Profile {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  height: 20%;
  margin-bottom: 5%;
  justify-content: start;
}

.SideNav-User-Area-Login p,
.SideNav-User-Area-Profile p {
  display: inline-flex;
  font-size: 1.2rem;
  color: #f2eae4;
  margin-left: 10%;
}

.SideNav-User-Area-Login i,
.SideNav-User-Area-Profile i {
  width: 2.5rem;
  font-size: 1.5rem;
  display: inline-flex;
  color: #f2eae4;
  margin-bottom: 5%;
}

#side-nav-logo {
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  margin-right: 5%;
}
</style>
