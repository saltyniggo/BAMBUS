<template>
    <base-modal-large>
        <template v-slot:modal-title>
            <h1>Bearbeiten</h1>
        </template>
        <template v-slot:modal-content>
            <div v-if="isLoading">
                <loading-spinner></loading-spinner>
            </div>
            <div class="edit-container" v-else>
                <div class="type">
                    <label for="type">Typ </label>
                    <select v-model="item.itemCategory">
                        <option value="1">Buch</option>
                        <option value="0">Magazin</option>
                        <option value="2">Spiel</option>
                    </select>
                </div>
                <div class="edit-container-fields" id="editBook" v-if="item.itemCategory == 1">
                    <div class="field">

                        <label for="title">Titel </label>
                        <input type="text" id="title" v-model="item.title" required>
                    </div>
                    <div class="field">
                        <label for="author">Autor </label>
                        <input type="text" id="author" v-model="item.author" required>
                    </div>
                    <div class="field">
                        <label for="ISBN">ISBN </label>
                        <input type="text" id="ISBN" v-model="item.ISBN" required>
                    </div>
                    <div class="field">

                        <label for="category">Kategorie </label>
                        <input type="text" id="category" v-model="item.category" required>
                    </div>
                    <div class="field"> <label for="available">Verfügbarkeit </label>
                        <input type="text" id="available" v-model="item.available" required>
                    </div>
                </div>

                <div class="edit-container-fields" id="editMagazin" v-if="item.itemCategory == 0">
                    <div class="field">

                        <label for="title">Titel </label>
                        <input type="text" id="title" v-model="item.title" required>
                    </div>

                    <div class="field">
                        <label for="ISSN">ISSN </label>
                        <input type="text" id="ISSN" v-model="item.ISSN" required>
                    </div>

                    <div class="field">

                        <label for="category">Kategorie </label>
                        <input type="text" id="category" v-model="item.category" required>
                    </div>
                    <div class="field"> <label for="available">Verfügbarkeit </label>
                        <input type="text" id="available" v-model="item.available" required>
                    </div>
                </div>

                <div class="edit-container-fields" id="editGame" v-if="item.itemCategory == 2">
                    <div class="field">
                        <label for="name">Name </label>
                        <input type="text" id="name" v-model="item.name" required>
                    </div>
                    <div class="field">

                        <label for="category">Kategorie </label>
                        <input type="text" id="category" v-model="category" required>
                    </div>
                    <div class="field"> <label for="available">Verfügbarkeit </label>
                        <input type="text" id="available" v-model="item.available" required>
                    </div>
                </div>
            </div>
        </template>
        <template v-slot:modal-button @click="edit">
            Speichern
        </template>
    </base-modal-large>
</template>

<script>
import { mapGetters } from "vuex";
import baseModalLarge from "../base-components/base-modal-large.vue";
import baseRectangleButton from "../base-components/base-rectangle-button.vue";
import loadingSpinner from "../base-components/base-loading-spinner.vue";

export default {
    name: "edit-modal",
    components: {
        baseModalLarge,
        baseRectangleButton,
        loadingSpinner,
    },
    data() {
        return {
            isLoading:true,
            item: {
                itemCategory: 0,
                itemID: "",
                condition: "",
                reservations: [],
                title: "",
                name: "",
                author: "",
                category: "",
                ISBN: "",
                ISSN: "",
                available: "",
            }
        }
    },
    computed: {
        ...mapGetters("itemStore", ["getEditItem"]),
    },
    methods: {
        edit() {
            this.$store.dispatch("itemStore/editItem", this.item);
            this.$store.dispatch("modalStore/closeAllModals");
        },
    },
    async mounted() {
        this.item = await this.getEditItem;
        this.isLoading = false;
    
    },
}

</script>

<style scoped>
.edit-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    background-color: #F2EAE4;
    border-radius: 2rem;
    margin: 1rem;
    width: 50vw;
}

.edit-container-fields {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin: 1rem;
}

.field {
    display: inline-flex;
    width: 20vw;
    justify-content: space-between;
    margin: 1rem;
}

.type {
    display: inline-flex;
    width: 15vw;
    justify-content: space-between;
    margin: 1rem;
}

select,
input {
    width: 10vw;
    padding: 0.3rem;
    border-radius: 0.5rem;
    border: none;
    box-shadow: 0px 0px 5px 0px #222126;
}
</style>