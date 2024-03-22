<template>
  <div>
    <label for="sort">Sortieren nach: </label>
    <select name="sort" id="sort">
      <option value="title">Titel</option>
      <option value="author">Autor</option>
      <option value="rating">Bewertung</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "SortSelection",
};
</script>

<style scoped></style>
