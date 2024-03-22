<template>
  <button class="round-button">
    <slot>
      <i class="fa-solid fa-face-smile" style="color: #f2eae4"></i>
    </slot>
  </button>
</template>

<script>
export default {
  name: "base-round-button",
};
</script>

<style scoped>
button.round-button {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #d9910d;
  color: #f2eae4;
  border: none;
  box-shadow: 0px 0px 5px 0px #222126;
  cursor: pointer;
  transition: 0.3s;
  font-size: 1.4rem;
}

button.round-button:hover {
  background-color: #f2eae4;
  color: #d9910d;
}
</style>
