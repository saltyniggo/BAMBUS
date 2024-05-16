<template>
  <div class="admin-page">
    <user-tabs :tabs="tabs" :activeRoute="activeRoute" />
    <section class="admin-page-content">
      <overview-tab v-if="activeRoute == 'overview'" />
      <user-management-tab v-else-if="activeRoute == 'management'" />
      <settings-tab v-else-if="activeRoute == 'settings'" />
    </section>
  </div>
</template>

<script>
import UserTabs from "../UserTabs.vue";
import OverviewTab from "./OverviewTab.vue";
import UserManagementTab from "./UserManagementTab.vue";
import SettingsTab from "./SettingsTab.vue";

export default {
  name: "AdminPage",
  components: {
    UserTabs,
    OverviewTab,
    UserManagementTab,
    SettingsTab,
  },
  data() {
    return {
      tabs: [
        { title: "Overview", route: "/admin/overview" },
        { title: "Management", route: "/admin/management" },
        // { title: "Settings", route: "/admin/settings" },
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
