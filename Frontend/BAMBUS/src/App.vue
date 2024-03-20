<template>
  <h3>Hallo Worlt</h3>
  <side-nav></side-nav>
  <round-buttton></round-buttton>
  <rectangle-button></rectangle-button>
  <item-container></item-container>
  <content-container>
    <v-slot:default>
      <modal></modal>
    </v-slot:default>
  </content-container>
  

  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from "vue-router";

import SideNav from "./components/SideNav.vue";
import itemContainer from "./components/base-components/base-item-container.vue";
import roundButton from "./components/base-components/base-round-button.vue";
import rectangleButton from "./components/base-components/base-rectangle-button.vue";
import contentContainer from "./components/base-components/base-content-container.vue";
import modal from "./components/base-components/base-modal-large.vue";

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
    modal
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


</style>./components/base-components/base-item-container.vue./components/base-components/base-rectangle-button.vue./components/base-components/base-round-button.vue
