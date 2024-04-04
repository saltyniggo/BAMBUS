<template>
  <div class="user-page">
    <user-tabs :tabs="tabs" :activeRoute="activeRoute" />
    <section class="user-page-content">
      <overview-tab v-if="activeRoute == 'overview'" />
      <orders-tab v-else-if="activeRoute == 'orders'" />
      <account-tab v-else-if="activeRoute == 'account'" /> 
    </section>
    <return-modal></return-modal>
  </div>
</template>

<script>
import UserTabs from "../UserTabs.vue";
import OverviewTab from "./OverviewTab.vue";
import OrdersTab from "./rented-page/OrdersTab.vue";
import AccountTab from "./AccountTab.vue";
import ReturnModal from "./ReturnModal.vue";

export default {
  name: "UserPage",
  components: {
    UserTabs,
    OverviewTab,
    OrdersTab,
    AccountTab,
    ReturnModal,
  },
  data() {
    return {
      tabs: [
        { title: "Overview", route: "/my-view/overview" },
        { title: "Orders", route: "/my-view/orders" },
        { title: "Account", route: "/my-view/account" },
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
.user-page {
  height: 100vh;
  background-color: #f2eae4;
  padding: 1%;
  color: #222126;
}

.user-page-content {
  margin-top: 1%;
}
</style>
