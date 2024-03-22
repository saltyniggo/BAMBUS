<template>
  <div class="SideNav-Item-Link-Tree">
    <router-link to="/books">
      Toller Buch Bums
    </router-link>
    <br>
    <router-link to="/magazines">
      Toller Magazin Bums
    </router-link>
    <br>
    <router-link to="/games">
      Toller Spiele Bums
    </router-link>
  </div>
</template>

<script>
export default {
  name: "LinkTree",
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
