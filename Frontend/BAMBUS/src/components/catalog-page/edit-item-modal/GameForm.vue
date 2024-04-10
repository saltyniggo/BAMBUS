<template>
  <div class="edit-container-fields" id="editGame">
    <div class="field">
      <label for="title">Title </label>
      <input type="text" id="title" v-model="title" required />
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
export default {
  name: "GameForm",
  props: ["item", "saveItem"],
  data() {
    return {
      title: "",
      category: "",
      available: "",
    };
  },
  watch: {
    saveItem: {
      immediate: true,
      handler: function (newVal) {
        console.log(newVal);
        if (newVal) {
          this.$store.dispatch("editStore/updateEditItemTitle", this.title);
          this.$store.dispatch("editStore/updateEditItemCategory", this.category);
          if (this.available === "Ja") {
            this.$store.dispatch("editStore/updateEditItemAvailability", true);
          } else {
            this.$store.dispatch("editStore/updateEditItemAvailability", false);
          }
          this.$emit("saved");
        }
      },
    },
  },
  // watch: {
  //   title: {
  //     handler: function (value) {
  //       this.$store.dispatch("editStore/updateEditItemTitle", value);
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
    this.category = this.item.category;
    if (this.item.available === true) {
      this.available = "Ja";
    } else {
      this.available = "Nein";
    }
    this.$store.dispatch("editStore/setEditItem", this.item);
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
