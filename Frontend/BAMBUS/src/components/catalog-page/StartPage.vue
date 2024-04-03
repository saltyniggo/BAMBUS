<template>
  <div class="startpage">
    <h1>Was willst Du heute entdecken?</h1>
    <shortcut-button
      ><router-link
        :to="{
          name: 'catalog-category',
          params: { category: 'all' },
          hash: '#catalog',
        }"
        >Alles</router-link
      >
    </shortcut-button>
    <shortcut-button
      ><router-link
        :to="{
          name: 'catalog-category',
          params: { category: 'books' },
          hash: '#catalog',
        }"
        >Bücher</router-link
      ></shortcut-button
    >
    <shortcut-button
      ><router-link
        :to="{
          name: 'catalog-category',
          params: { category: 'magazines' },
          hash: '#catalog',
        }"
        >Zeitschriften</router-link
      >
    </shortcut-button>
    <shortcut-button
      ><router-link
        :to="{
          name: 'catalog-category',
          params: { category: 'games' },
          hash: '#catalog',
        }"
        >Spiele</router-link
      ></shortcut-button
    >
  </div>
</template>

<script>
import ShortcutButton from "./ShortcutButton.vue";

export default {
  name: "StartPage",
  components: {
    ShortcutButton,
  },
};
</script>

<style scoped>
.startpage {
  display: flex;
  height: 100vh;
  width: 80vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(../../assets/bambooBackground.jpg);
  background-color: #84bf9e;
}

.startpage h1 {
  margin: 5% 0%;
  font-size: 5em;
  text-align: center;
  color: #f2eae4;
  text-shadow: 0.2rem 0.2rem 0.5rem #3c4e45;
}

a {
  text-decoration: none;
  color: #f2eae4;
}
</style>
