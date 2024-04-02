<template>
  <div class="SideNav-Item-Link-Tree">
    <router-link :to="{ name: 'catalog-category', params: { category: 'books' }, hash: '#catalog' }" @click="setCategory('books')">Toller Buch Bums</router-link>
    <br />
    <router-link :to="{ name: 'catalog-category', params: { category: 'magazines' }, hash: '#catalog' }" @click="setCategory('magazines')">Toller Magazin Bums</router-link>
    <br />
    <router-link :to="{ name: 'catalog-category', params: { category: 'games' }, hash: '#catalog' }" @click="setCategory('games')">Toller Spiele Bums</router-link>
  </div>
</template>

<script>
export default {
  name: "LinkTree",
  methods: {
    setCategory(category) {
      this.$store.dispatch("routerStore/setCurrentCategory", category);
    },
  },
};
</script>

<style scoped>
.SideNav-Item-Link-Tree a {
  font-size: 1.2vw;
  color: #f2eae4;
  margin-bottom: 5%;
  text-decoration: none;
}

.SideNav-Item-Link-Tree p:hover {
  cursor: pointer;
  color: #d9910d;
  transition: 0.3s;
}
</style>
