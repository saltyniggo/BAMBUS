<template>
  <div class="startpage">
    <h1>Was willst Du heute entdecken?</h1>
    <shortcut-button @click="scrollDownShow('Bücher')">Bücher</shortcut-button>
    <shortcut-button @click="scrollDownShow('Zeitschriften')">Zeitschriften</shortcut-button>
    <shortcut-button @click="scrollDownShow('Spiele')">Spiele</shortcut-button>
    <shortcut-button @click="scrollDownShow('Alles')">Alles</shortcut-button>
  </div>
</template>

<script>
import ShortcutButton from "./ShortcutButton.vue";

export default {
  name: "StartPage",
  emits: ["scrollDownShow"],
  components: {
    ShortcutButton,
  },
  methods: {
    scrollDownShow(category) {
      this.$emit("scrollDownShow", category);
    },
  },
};
</script>

<style scoped>
.startpage {
  display: flex;
  height: 100vh;
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
</style>
