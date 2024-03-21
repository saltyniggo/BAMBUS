<template>
  <div>
    <i class="fa-regular fa-user" style="color: #f2eae4"></i>
    <p @click="$emit('clickedLogout')">Account</p>
  </div>
</template>

<script>
export default {
  name: "UserEmployee",
  emits: ["clickedLogout"],
};
</script>

<style></style>
