<template>
  <h3>Hallo Worlt</h3>
  <side-nav></side-nav>
  <round-buttton></round-buttton>
  <rectangle-button></rectangle-button>
  <item-container></item-container>
  

  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from "vue-router";

import SideNav from "./components/SideNav.vue";
import itemContainer from "./components/base-components/item-container.vue";
import roundButton from "./components/base-components/round-button.vue";
import rectangleButton from "./components/base-components/rectangle-button.vue";

export default {
  name: "App",
  components: {
    RouterLink,
    RouterView,
    SideNav,
    roundButton,
    rectangleButton,
    itemContainer
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
}

p {
  font-size: 18px;
}


</style>
