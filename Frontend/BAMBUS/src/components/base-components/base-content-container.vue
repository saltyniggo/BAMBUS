<template>
  <div class="content-container">
    <h1><slot name="header"></slot></h1>

    <p><slot name="body"></slot></p>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "base-content-container",
};
</script>

<style scoped>
div.content-container {
  width: 33%;
  min-width: 300px;
  min-height: 300px;

  border-radius: 1rem;
  border: none;
  box-sizing: border-box;

    padding: 2rem;
    background-color: #F2EAE4;
    box-shadow: 0px 0px 5px 0px #222126;

  transition: 0.3s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

div.content-container:hover {
  box-shadow: 0px 0px 10px 0px #222126;
}

h1, h2, h3, p, i {
    color: #222126;
}
</style>
