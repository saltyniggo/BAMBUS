<template>
  <div class="content">
    <div class="rented">
      <h1>Derzeit ausgeliehen</h1>
      <base-container-narrow v-if="rentedItems.length === 0">Du hast derzeit keine Artikel ausgeliehen.</base-container-narrow>
      <rented-item 
        v-for="item in rentedItems"
        :key="item.itemId"
        :item="item"
        @openReturnModal="openReturnModal(item.itemId)"
      />
    </div>

    <div class="reserved">
      <h1>Reserviert für dich</h1>
      <base-container-narrow v-if="reservedItems(user.userId).length === 0">Du hast derzeit keine Artikel reserviert.</base-container-narrow>
      <reserved-item
        v-for="item in reservedItems"
        :key="item.itemId"
        :item="item"
        :userId="user.userId"
      />
    </div>
  </div>
</template>

<script>
import RentedItem from "./RentedItem.vue";
import ReservedItem from "./ReservedItem.vue";
import BaseContainerNarrow from "@/components/base-components/BaseContainerNarrow.vue";

export default {
  name: "OrdersTab",
  components: {
    RentedItem,
    ReservedItem,
    BaseContainerNarrow,
  },
  data() {
    return {
      rentedItems: [],
    };
  },
  computed: {
    rentedItemIds() {
      return this.$store.getters["loanStore/getActiveItemIdFromUserId"](
        this.user.userId
      );
    },
    loans() {
      return this.$store.getters["loanStore/getActiveItemIdFromUserId"](
        this.user.userId
      );
    },
    user() {
      return this.$store.getters["userStore/getUser"];
    },
    reservedItems() {
      return this.$store.getters["itemStore/getItemsReservedByUser"](
        this.user.userId
      );
    },
  },
  watch: {
    loans: {
      immediate: true,
      handler() {
        this.setRentedItems();
      },
    },
  },
  methods: {
    openReturnModal(id) {
      this.$emit("openReturnModal", id);
    },
    setRentedItems() {
      this.rentedItems = [];
      this.rentedItemIds.forEach((id) => {
        let item = this.$store.getters["itemStore/getItemById"](id);
        this.rentedItems.push(item);
      });
    },
  },
  beforeMount() {
    this.setRentedItems();
  },
};
</script>

<style scoped>
.content {
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-areas: "rented reserved";
  gap: 1rem;
  padding: 1rem;
}

.rented {
  grid-area: rented;
}

.reserved {
  grid-area: reserved;
}
</style>
