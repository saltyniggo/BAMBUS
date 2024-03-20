<template>
  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from "vue-router";

export default {
  name: "App",
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
</style>
