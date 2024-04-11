<template>

    <div class="new-item-container">
        <base-content-container>
            <template v-slot:header>
                <h1>Neues Item hinzufügen</h1>

            </template>
            <template v-slot:body>
                <div class="warning">
                    <p v-if="showAlert">Bitte fülle alle Felder aus</p>
                </div>

                <div class="input">
                    <label for="title">Titel</label>
                    <input type="text" id="title" v-model="title">
                </div>
                <div class="input">
                    <label for="itemCategory">Kategorie</label>
                    <select id="itemCategory" v-model="itemCategory">
                        <option value="1">Buch</option>
                        <option value="0">Zeitschrift</option>
                        <option value="2">Spiel</option>
                    </select>
                </div>
                <div class="input" v-if="itemCategory == 0 || itemCategory == 1">
                    <label for="author">Autor</label>
                    <input type="text" id="author" v-model="author">
                </div>
                <div class="input" v-if="itemCategory == 1">
                    <label for="ISBN">ISBN</label>
                    <input type="text" id="ISBN" v-model="ISBN">
                </div>
                <div class="input" v-if="itemCategory == 0">
                    <label for="ISSN">ISSN</label>
                    <input type="text" id="ISSN" v-model="ISSN">
                </div>
                <div class="input">
                    <label for="category">Kategorie</label>
                    <input type="text" id="category" v-model="category">
                </div>

                <div class="buttons">
                    <base-rectangle-button @click="createNewItem">Hinzufügen</base-rectangle-button>
                </div>

            </template>
        </base-content-container>
    </div>

</template>

<script>
import BaseContentContainer from "../base-components/BaseContentContainer.vue";
import BaseRectangleButton from "../base-components/BaseRectangleButton.vue";
export default {
    name: "NewItemContainer",
    components: {
        BaseContentContainer,
        BaseRectangleButton,
    },
    data() {
        return {
            title: "",
            author: "",
            category: "",
            ISBN: "",
            ISSN: "",
            isDamaged: 0,
            isAvailable: true,
            itemCategory: 1,
            showAlert: false,
        };
    },
    methods: {
        createNewItem() {
            if (this.title.trim() == "" || this.category.trim() == "") {
                this.showAlert = true;
                return;
            }
            else if (this.itemCategory == 1 && (this.author.trim() == "" || this.ISBN.trim() == "")) {
                this.showAlert = true;
                return;
            }
            else if (this.itemCategory == 0 && (this.author.trim() == "" || this.ISBN.trim() == "")) {
                this.showAlert = true;
                return;
            }
            else {
                const item = {
                    title: this.title,
                    itemCategory: this.itemCategory,
                    category: this.category,
                    reservations: [],
                    isDamaged: 0,
                    available: true,
                    dueDate: undefined,
                    rentedBy: undefined,
                    itemId: new Date().getTime().toString(),
                };

                if (this.itemCategory == 0 || this.itemCategory == 1) {
                    item.author = this.author;
                }

                if (this.itemCategory == 1) {
                    item.ISBN = this.ISBN;
                }
                else if (this.itemCategory == 0) {
                    item.ISSN = this.ISSN;
                }

                this.$store.dispatch("itemStore/createItem", item);
            }
        },
    },
};
</script>

<style scoped>
.new-item-container {
    background-color: #3b8c84;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
}

.warning {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
}

.warning p {
    color: red;
    font-weight: bold;
}

.input {
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5rem;
    align-items: flex-start;
}

.buttons {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 2rem;
}

input {
    min-width: 200px;
    width: 35rem;
}
</style>
