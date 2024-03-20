<template>
     <div class="catalog" id="catalog">
        <div class="catalog-filter">

            <div>
                <label for="filter">Filter: </label>
                <select name="filter" id="filter">
                    <option value="all">Alle</option>
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

        <div class="catalog-items">
            <item-container></item-container>
            <item-container></item-container>
            <item-container></item-container>
            <item-container></item-container>
            <item-container></item-container>
            <item-container></item-container>
            <item-container></item-container>
            <item-container></item-container>
        </div>
    </div>
</template>

<script>
import itemContainer from "../base-components/base-item-container.vue";
import rectangleButton from "../base-components/base-rectangle-button.vue";

export default {
    name: "CatalogPage",
    components: {
        itemContainer,
        rectangleButton
    },
};
</script>

<style scoped>
   .catalog {
        min-height: 100vh;
        width: 100%;
        background-color: #3b8c84;
    }

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

    .catalog-items {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        grid-gap: 2rem;
        padding: 2rem;
        align-items: stretch;
    }
</style>