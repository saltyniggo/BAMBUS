<template>
  <base-container-narrow>
    <div class="cardContent">
      <div class="informations">
        <h2>{{ item.title }}</h2>
        <p><strong>Ausgeliehen bis zum: </strong>{{ item.returnDate }}</p>
      </div>
      <div class="return">
        <base-rectangle-button @click="returnItem">
          Rückgabe
        </base-rectangle-button>
      </div>
      <div class="extend">
        <p>
          <strong>Verlängern zum: </strong>
        </p>
        <input id="inputNewReturnDate" type="date" name="newReturnDate" :min="item.returnDate" :max="maxDate"
          v-model="newReturnDate" />
        <base-rectangle-button @click="requestExtension({ item: item, newReturnDate: newReturnDate })">
          Verlängern
        </base-rectangle-button>
      </div>
    </div>
  </base-container-narrow>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
import BaseContentContainer from "@/components/base-components/BaseContentContainer.vue";
import BaseRectangleButton from "@/components/base-components/BaseRectangleButton.vue";
import BaseContainerNarrow from "@/components/base-components/BaseContainerNarrow.vue";

export default {
  name: "RentedItem",
  components: {
    BaseContentContainer,
    BaseRectangleButton,
    BaseContainerNarrow,
  },
  props: ["item"],
  data() {
    return {
      newReturnDate: "",
    };
  },
  methods: {
    // ...mapActions("itemStore", ["requestExtension"]),
    ...mapActions("notificationStore", {
      requestExtension: "userRequestsLoanExtension",
    }),
    returnItem() {
      console.log("returnItem " + this.item.itemId);
    }
  },
  computed: {
    ...mapGetters("userStore", {
      user: "getUser",
    }),
    maxDate() {
      let date = new Date(this.item.returnDate);
      date.setDate(date.getDate() + 31);
      return date.toISOString().split("T")[0];
    },
  },
};
</script>

<style scoped>
.cardContent {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "informations informations"
    "extend return ";
  gap: 1rem;
}

.informations {
  grid-area: informations;
}

.return {
  grid-area: return;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}

.extend {
  grid-area: extend;
}

#inputNewReturnDate {
  margin: 0.5rem;
}
</style>
