<template>
  <div class="edit-container-fields" id="editBook">
    <div class="field">
      <label for="title">Titel </label>
      <input type="text" id="title" v-model="title" required />
    </div>
    <div class="field">
      <label for="author">Autor </label>
      <input type="text" id="author" v-model="author" required />
    </div>
    <div class="field">
      <label for="isbn">ISBN </label>
      <input type="text" id="isbn" v-model="isbn" required />
    </div>
    <div class="field">
      <label for="category">Kategorie </label>
      <input type="text" id="category" v-model="category" required />
    </div>
    <div class="field">
      <label for="available">Verfügbarkeit </label>
      <select id="available" v-model="available">
        <option value="Ja">Ja</option>
        <option value="Nein">Nein</option>
      </select>
    </div>
  </div>
</template>

<script>
//
// TODO: Fix that it saves the input values directly to the store
//

export default {
  name: "BookForm",
  props: ["item", "saveItem"],
  data() {
    return {
      title: "",
      author: "",
      isbn: "",
      category: "",
      available: "",
    };
  },

  watch: {
    saveItem: {
      immediate: true,
      handler: function (newVal) {
        if (newVal === true) {
          this.$store.dispatch("itemStore/editItem", {
            itemId: this.item.itemId,
            title: this.title,
            author: this.author,
            isbn: this.isbn,
            category: this.category,
            available: this.available === "Ja" ? true : false,
          });
          this.$emit("saved");
        }
      },
    },
  },
  beforeMount() {
    this.title = this.item.title;
    this.author = this.item.author;
    this.isbn = this.item.isbn;
    this.category = this.item.category;
    if (this.item.available === true) {
      this.available = "Ja";
    } else {
      this.available = "Nein";
    }
  },
};
</script>

<style scoped>
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

select,
input {
  width: 10vw;
  padding: 0.3rem;
  border-radius: 0.5rem;
  border: none;
  box-shadow: 0px 0px 5px 0px #222126;
}
</style>
