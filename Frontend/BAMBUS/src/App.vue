<template>
  <side-nav id="app-base-sidenav"></side-nav>

  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import SideNav from "./components/SideNav.vue";

export default {
  name: "App",
  components: {
    RouterLink,
    RouterView,
    SideNav,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Red Hat Text", sans-serif;
  color: #222126;
  font-size: 20px;
}

#app-base-sidenav {
  position: fixed;
  top: 0;
  left: 0;
  width: 15%;
  height: 100%;
  z-index: 100;
}
</style>
