<template>
  <div>
    <label for="filter">Filter: </label>
    <select name="filter" id="filter">
      <option value="all" >Alles</option>
      <option value="books">Bücher</option>
      <option value="magazines">Zeitschriften</option>
      <option value="games">Spiele</option>
      <option value="test">Test</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "FilterSelection",
  props: {
    category: {
      type: String,
    },
  },
};
</script>

<style scoped></style>
