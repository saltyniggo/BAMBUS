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
      <label for="ISBN">ISBN </label>
      <input type="text" id="ISBN" v-model="ISBN" required />
    </div>
    <div class="field">
      <label for="category">Kategorie </label>
      <input type="text" id="category" v-model="category" required />
    </div>
    <div class="field">
      <label for="available">Verfügbarkeit </label>
      <input type="text" id="available" v-model="available" required />
    </div>
  </div>
</template>

<script>
export default {
  name: "BookForm",
  props: ["item"],
  data() {
    return {
      title: "",
      author: "",
      ISBN: "",
      category: "",
      available: "",
    };
  },
  computed: {
    title: {
      get() {
        return this.$store.state.editStore.editItem.title;
      },
      set(value) {
        this.$store.dispatch("editStore/updateEditItemTitle", value);
      },
    },
    author: {
      get() {
        return this.$store.state.editStore.editItem.author;
      },
      set(value) {
        this.$store.dispatch("editStore/updateEditItemAuthor", value);
      },
    },
    ISBN: {
      get() {
        return this.$store.state.editStore.editItem.ISBN;
      },
      set(value) {
        this.$store.dispatch("editStore/updateEditItemISBN", value);
      },
    },
    category: {
      get() {
        return this.$store.state.editStore.editItem.category;
      },
      set(value) {
        this.$store.dispatch("editStore/updateEditItemCategory", value);
      },
    },
    available: {
      get() {
        return this.$store.state.editStore.editItem.availability;
      },
      set(value) {
        this.$store.dispatch("editStore/updateEditItemAvailability", value);
      },
    },
  },
  // watch: {
  //   title: {
  //     handler: function (value) {
  //       this.$store.dispatch("editStore/updateEditItemTitle", value);
  //     },
  //   },
  //   author: {
  //     handler: function (value) {
  //       this.$store.dispatch("editStore/updateEditItemAuthor", value);
  //     },
  //   },
  //   ISBN: {
  //     handler: function (value) {
  //       this.$store.dispatch("editStore/updateEditItemISBN", value);
  //     },
  //   },
  //   category: {
  //     handler: function (value) {
  //       this.$store.dispatch("editStore/updateEditItemCategory", value);
  //     },
  //   },
  //   available: {
  //     handler: function (value) {
  //       this.$store.dispatch("editStore/updateEditItemAvailability", value);
  //     },
  //   },
  // },
  beforeMount() {
    this.$store.dispatch("editStore/clearEditItem");
    this.title = this.item.title;
    this.author = this.item.author;
    this.ISBN = this.item.ISBN;
    this.category = this.item.category;
    if (this.item.available === true) {
      this.available = "Ja";
    } else {
      this.available = "Nein";
    }
    // this.$store.dispatch("editStore/setEditItem", this.item);
  },
};

//
// TODO: Fix that it saves the input values to the store
//
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
