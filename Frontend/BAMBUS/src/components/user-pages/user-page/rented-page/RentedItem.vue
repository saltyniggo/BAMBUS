<template>
  <base-container-narrow>
    <div class="cardContent">
      <div class="informations">
        <h2>{{ itemObject.item.title }}</h2>
        <p>
          <strong>Ausgeliehen bis zum: </strong>{{ itemObject.loan.dueDate }}
        </p>
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
        <input
          id="inputNewdueDate"
          type="date"
          name="newdueDate"
          :min="itemObject.loan.dueDate"
          :max="maxDate"
          v-model="newdueDate"
        />
        <base-rectangle-button
          @click="
            requestExtension({ itemObject: itemObject, newdueDate: newdueDate })
          "
        >
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
  props: ["itemObject"],
  data() {
    return {
      newdueDate: "",
    };
  },
  methods: {
    // ...mapActions("itemStore", ["requestExtension"]),
    ...mapActions("notificationStore", {
      requestExtension: "userRequestsLoanExtension",
    }),
    returnItem() {
      this.$emit("openReturnModal");
    },
  },
  computed: {
    ...mapGetters("userStore", {
      user: "getUser",
    }),
    maxDate() {
      let date = new Date(this.itemObject.loan.dueDate);
      date.setDate(date.getDate() + 31);
      return date.toISOString().split("T")[0];
    },
  },
  onCreated() {
    console.log(this.itemObject);
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

#inputNewdueDate {
  margin: 0.5rem;
}
</style>
