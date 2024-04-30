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
          <input type="text" id="title" v-model="title" />
        </div>
        <div class="input">
          <label for="type">Kategorie</label>
          <select id="type" v-model="type">
            <option value="1">Buch</option>
            <option value="0">Zeitschrift</option>
            <option value="2">Spiel</option>
          </select>
        </div>
        <div class="input" v-if="type == 0 || type == 1">
          <label for="author">Autor</label>
          <input type="text" id="author" v-model="author" />
        </div>
        <div class="input" v-if="type == 1">
          <label for="isbn">ISBN</label>
          <input type="text" id="isbn" v-model="isbn" />
        </div>
        <div class="input" v-if="type == 0">
          <label for="issn">ISSN</label>
          <input type="text" id="issn" v-model="issn" />
        </div>
        <div class="input">
          <label for="category">Kategorie</label>
          <input type="text" id="category" v-model="category" />
        </div>

        <div class="buttons">
          <base-rectangle-button @click="createNewItem"
            >Hinzufügen</base-rectangle-button
          >
        </div>
      </template>
    </base-content-container>
  </div>
</template>

<script>
import { mapActions } from "vuex";

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
      isbn: "",
      issn: "",
      condition: 0,
      isAvailable: true,
      type: 1,
      showAlert: false,
    };
  },
  methods: {
    ...mapActions("notificationStore", ["managerAddsItem"]),
    createNewItem() {
      if (this.title.trim() == "" || this.category.trim() == "") {
        this.showAlert = true;
        return;
      } else if (
        this.type &&
        (this.author.trim() == "" || this.isbn.trim() == "")
      ) {
        this.showAlert = true;
        return;
      } else if (
        this.type &&
        (this.author.trim() == "" || this.isbn.trim() == "")
      ) {
        this.showAlert = true;
        return;
      } else {
        const item = {
          title: this.title,
          type: this.type,
          category: this.category,
          reservations: [],
          condition: 0,
          available: true,
          dueDate: undefined,
          rentedBy: undefined,
          itemId: new Date().getTime().toString(),
        };

        if (this.type == 0 || this.type == 1) {
          item.author = this.author;
        }

        if (this.type == 1) {
          item.isbn = this.isbn;
        } else if (this.type == 0) {
          item.issn = this.issn;
        }
        this.managerAddsItem(item);
        this.$store.dispatch("itemStore/createItem", item);
        this.$router.push({ name: "catalog" });
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
