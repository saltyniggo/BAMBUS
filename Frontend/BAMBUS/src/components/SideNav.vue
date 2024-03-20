<template>
  <div class="SideNav">
    <section class="SideNav-Top-Branding">
      <img src="/logo.jpg" alt="Bambus Logo" id="SideNav-Top-Logo" />
      <h1>BAMBUS</h1>
    </section>
    <div class="SideNav-Base-Link-Tree">
      <section class="SideNav-Item-Link-Tree">
        <p>Toller Buch Bums</p>
        <p>Toller Magazin Bums</p>
        <p>Toller Spiele Bums</p>
      </section>
      <section class="SideNav-User-Area">
        <p>User Specific Bums</p>
        <p>Login</p>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideNav",
};
</script>

<style scoped>
.SideNav {
  border-right: 0.25em solid #f2eae4;
  background-color: #222126;
  padding: 0.5%;
}

.SideNav-Top-Branding {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 10%;
  margin-bottom: 5%;
}

.SideNav-Top-Branding h1 {
  font-size: 2rem;
  margin-left: 5%;
  color: #f2eae4;
}

#SideNav-Top-Logo {
  height: 75%;
  width: auto;
}

.SideNav-Base-Link-Tree {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90%;
}

.SideNav-Base-Link-Tree p {
  font-size: 1.2rem;
  color: #f2eae4;
  margin-bottom: 5%;
}

.SideNav-Base-Link-Tree p:hover {
  cursor: pointer;
  color: #d9910d;
  transition: 0.3s;
}
</style>
