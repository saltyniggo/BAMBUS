<template>
  <div class="catalog-filter">
    <filter-selection :category="category"/>
    <sort-selection />

    <div>
      <label for="search">Suche: </label>
      <input type="text" name="search" id="search" />
    </div>

    <div>
      <label for="Verfuegbarkeit">nur verfügbare Objekte: </label>
      <input type="checkbox" name="available" id="available" />
    </div>

    <rectangle-button> Anwenden </rectangle-button>
  </div>
</template>

<script>
import RectangleButton from "../../base-components/BaseRectangleButton.vue";
import FilterSelection from "./FilterSelection.vue";
import SortSelection from "./SortSelection.vue";

export default {
  name: "CatalogFilter",
  props: {
    category: {
      type: String,
    },
  },
  components: {
    RectangleButton,
    FilterSelection,
    SortSelection,
  },
};
</script>

<style scoped>
.catalog-filter {
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
  background-color: #f2eae4;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.5rem;
}
</style>
