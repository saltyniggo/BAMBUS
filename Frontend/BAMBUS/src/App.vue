<template>
  <h3>Hallo Worlt</h3>
  <side-nav></side-nav>

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
</style>
