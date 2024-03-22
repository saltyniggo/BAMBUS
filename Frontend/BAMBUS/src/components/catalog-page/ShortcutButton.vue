<template>
  <div>
    <p><slot></slot></p>
  </div>
</template>

<script></script>

<style scoped>
p {
  width: 20rem;
  margin: 1rem;
  padding: 1rem;
  font-size: 3rem;
  color: #f2eae4;
  background-color: #d9910d;
  border: none;
  border-radius: 0.5rem;
  box-shadow: 0.1rem 0.1rem 0.5rem #446354;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
}

p:hover {
  background-color: #f2eae4;
  color: #d9910d;
}
</style>
