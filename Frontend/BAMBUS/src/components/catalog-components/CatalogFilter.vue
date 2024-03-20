<template>
    <div class="catalog-filter">

        <div>
            <label for="filter">Filter: </label>
            <select name="filter" id="filter">
                <option value="all">Alles</option>
                <option value="books">Bücher</option>
                <option value="magazines">Zeitschriften</option>
                <option value="games">Spiele</option>
            </select>
        </div>

        <div>
            <label for="sort">Sortieren nach: </label>
            <select name="sort" id="sort">
                <option value="title">Titel</option>
                <option value="author">Autor</option>
                <option value="rating">Bewertung</option>
            </select>
        </div>

        <div>
            <label for="search">Suche: </label>
            <input type="text" name="search" id="search">
        </div>

        <div>
            <label for = Verfuegbarkeit>nur verfügbare Objekte: </label>
            <input type="checkbox" name="available" id="available">
        </div>

        <rectangle-button>
            Anwenden
        </rectangle-button>

    </div>
</template>

<script>
import rectangleButton from "../base-components/base-rectangle-button.vue";
export default {
    name: "CatalogFilter",
    components: {
        rectangleButton
    },
};
</script>

<style scoped>
      .catalog-filter {
        position: sticky;
        top: 0;
        width: 100%;
        background-color: #f2eae4;
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 0.5rem;
    }
</style>