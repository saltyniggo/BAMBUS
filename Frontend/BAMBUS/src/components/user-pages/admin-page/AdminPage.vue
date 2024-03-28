<template>
  <div class="admin-page">
    <user-tabs :tabs="tabs" :activeRoute="activeRoute" />
    <section class="admin-page-content">
      <!-- <overview-tab v-if="activeRoute == 'overview'" />
      <orders-tab v-else-if="activeRoute == 'user-management'" /> -->
    </section>
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
        { title: "Overview", route: "/admin/overview" },
        { title: "User Management", route: "/admin/user-management" },
      ],
      activeRoute: undefined,
    };
  },
  watch: {
    "$route.params": {
      immediate: true,
      handler(newParams) {
        this.activeRoute = newParams.overview;
      },
    },
  },
};
</script>

<style scoped>
.admin-page {
  height: 100vh;
  background-color: #f2eae4;
  padding: 1%;
  color: #222126;
}

.admin-page-content {
  margin-top: 1%;
}
</style>
