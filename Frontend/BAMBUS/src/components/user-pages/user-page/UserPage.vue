<template>
  <div class="user-page">
    <user-tabs :tabs="tabs" />
    <h1>User Page</h1>
    <p>penis</p>
  </div>
</template>

<script>
import UserTabs from "../UserTabs.vue";

export default {
  name: "UserPage",
  components: {
    UserTabs,
  },
  data() {
    return {
      tabs: [
        { title: "Overview", route: "/my-view/overview" },
        { title: "Ausleihen", route: "/my-view/arsch" },
        { title: "Account", route: "/my-view/account" },
      ],
    };
  },
};
</script>

<style scoped>
.user-page {
  height: 100vh;
  background-color: #f2eae4;
  padding: 2.5%;
  color: #222126;
}
</style>
