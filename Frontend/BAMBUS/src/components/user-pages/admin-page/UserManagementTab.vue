<template>
  <div>
    <h1>User Management</h1>
    <br>
  <all-users-table></all-users-table> 
  </div>
</template>


<script>
import BaseContentContainer from "@/components/base-components/BaseContentContainer.vue";
import AllUsersTable from "./AllUsersTable.vue";

export default {
  name: "UserManagementTab",
  components: {
    BaseContentContainer,
    AllUsersTable,
  },
}
</script>

<style scoped>
select {
  width: 100%;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  box-sizing: border-box;
}

.content {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
