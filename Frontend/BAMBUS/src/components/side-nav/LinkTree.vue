<template>
  <div class="SideNav-Item-Link-Tree">
    <p>Toller Buch Bums</p>
    <p>Toller Magazin Bums</p>
    <p>Toller Spiele Bums</p>
  </div>
</template>

<script>
export default {
  name: "LinkTree",
};
</script>

<style scoped>
.SideNav-Item-Link-Tree p {
  font-size: 1.2vw;
  color: #f2eae4;
  margin-bottom: 5%;
}

.SideNav-Item-Link-Tree p:hover {
  cursor: pointer;
  color: #d9910d;
  transition: 0.3s;
}
</style>
