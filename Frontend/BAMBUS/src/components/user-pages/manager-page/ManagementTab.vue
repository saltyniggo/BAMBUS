<template>
  <div>
    <h1>Management</h1>
    <p>Management wird hier angezeigt</p>
    <ReportedDamagesTable></ReportedDamagesTable>
  </div>
</template>

<script>
import ReportedDamagesTable from "./ReportedDamagesTable.vue";
export default {
  name: "ManagementTab",
  components: {
    ReportedDamagesTable
  }
};
</script>

<style></style>
