<template>
  <base-modal-large :hasCloseButton="true">
    <template v-slot:modal-title>
      <h1>Bearbeiten</h1>
    </template>
    <template v-slot:modal-content>
      <div class="edit-container">
        <div class="type">
          <label for="type">Typ </label>
          <select v-model="item.itemCategory">
            <option value="1">Buch</option>
            <option value="0">Magazin</option>
            <option value="2">Spiel</option>
          </select>
        </div>
        <magazine-form v-if="item.itemCategory == 0" :item="item" />
        <book-form v-if="item.itemCategory == 1" :item="item" />
        <game-form v-if="item.itemCategory == 2" :item="item" />
      </div>
    </template>
    <template v-slot:modal-button>
      <base-rectangle-button @click="saveEdit">
        Speichern
      </base-rectangle-button>
    </template>
  </base-modal-large>
</template>

<script>
import { mapGetters } from "vuex";

import BaseModalLarge from "../../base-components/BaseModalLarge.vue";
import BaseRectangleButton from "../../base-components/BaseRectangleButton.vue";
import BookForm from "./BookForm.vue";
import MagazineForm from "./MagazineForm.vue";
import GameForm from "./GameForm.vue";

export default {
  name: "EditItemModal",
  components: {
    BaseModalLarge,
    BaseRectangleButton,
    BookForm,
    MagazineForm,
    GameForm,
  },
  computed: {
    ...mapGetters({
      ratings: "ratingStore/getRatingsByItemId",
      item: "itemStore/getEditItem",
    }),
  },
  methods: {
    saveEdit() {
      // this.$store.dispatch("itemStore/editItem", this.item);
      this.$store.dispatch("editStore/saveEditItem");
      this.$store.dispatch("modalStore/closeAllModals");
    },
  },
};
</script>

<style scoped>
.edit-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: #f2eae4;
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
