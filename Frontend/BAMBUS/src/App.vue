<template>
  <side-nav id="app-base-sidenav"></side-nav>
  <round-buttton></round-buttton>
  <rectangle-button></rectangle-button>
  <item-container></item-container>
  <content-container> </content-container>

  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from "vue-router";

import SideNav from "./components/SideNav.vue";
import itemContainer from "./components/base-components/base-item-container.vue";
import roundButton from "./components/base-components/base-round-button.vue";
import rectangleButton from "./components/base-components/base-rectangle-button.vue";
import contentContainer from "./components/base-components/base-content-container.vue";

export default {
  name: "App",
  components: {
    RouterLink,
    RouterView,
    SideNav,
    roundButton,
    rectangleButton,
    itemContainer,
    contentContainer,
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

#app-base-sidenav {
  position: fixed;
  top: 0;
  left: 0;
  width: 15%;
  height: 100%;
  z-index: 100;
}
</style>
./components/base-components/base-item-container.vue./components/base-components/base-rectangle-button.vue./components/base-components/base-round-button.vue
