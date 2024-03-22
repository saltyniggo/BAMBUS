<template>
  <div>
    <label for="filter">Filter: </label>
    <select name="filter" id="filter">
      <option value="all">Alles</option>
      <option value="books">Bücher</option>
      <option value="magazines">Zeitschriften</option>
      <option value="games">Spiele</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "FilterSelection",
};
</script>

<style scoped></style>
