<template>
  <div class="base-notification-element">
    <h2>{{ notification.title }}</h2>
    <h3>Von {{ notification.author }} am {{ notification.date }}</h3>
    <p>{{ notification.message }}</p>
  </div>
</template>

<script>
export default {
  name: "BaseNotification",
  props: {
    notification: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.base-notification-element {
  background-color: #f2eae4;
  padding: 1%;
  margin: 1%;
  border-radius: 2rem;
  box-shadow: 0 0 0.5rem #222126;
  color: #222126;
}
</style>
