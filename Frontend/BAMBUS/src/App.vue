<template>
  <app-side-nav id="app-base-sidenav"></app-side-nav>
  <div class="app-base-content">
  <round-button></round-button>
  <rectangle-button></rectangle-button>
  <item-container></item-container>
  <content-container>
    <v-slot:default>
      <!-- <modalL></modalL> -->
      <!-- <modalS></modalS> -->
    </v-slot:default>
  </content-container>
  <base-tab-header></base-tab-header>
  </div>

  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from "vue-router";

import AppSideNav from "./components/AppSideNav.vue";
import itemContainer from "./components/base-components/base-item-container.vue";
import roundButton from "./components/base-components/base-round-button.vue";
import rectangleButton from "./components/base-components/base-rectangle-button.vue";
import contentContainer from "./components/base-components/base-content-container.vue";
import modalL from "./components/base-components/base-modal-large.vue";
import modalS from "./components/base-components/base-modal-small.vue";
import baseTabHeader from "./components/base-components/base-tab-header.vue";

export default {
  name: "App",
  components: {
    RouterLink,
    RouterView,
    AppSideNav,
    roundButton,
    rectangleButton,
    itemContainer,
    contentContainer,
    modalL,
    modalS,
    baseTabHeader,
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

h1 {
  font-size: 2rem;
  font-weight: bold;
}

h2 {
  font-size: 1.5rem;
  font-weight: bold;
}

.app-base-content {
  margin-left: 15%;
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
./components/base-components/base-item-container.vue./components/base-components/base-rectangle-button.vue./components/base-components/base-round-button.vue./components/AppSideNav.vue
