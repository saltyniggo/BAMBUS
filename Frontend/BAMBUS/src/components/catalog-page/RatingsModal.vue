<template>
  <base-modal-large>
    <template v-slot:modal-title>
      <h1>Bewertungen</h1>
    </template>

    <template v-slot:modal-content>
      <div>
        <base-content-container v-for="rating in ratings" class="ratings">
          <template v-slot:header> Rating: {{ rating.rating }} </template>
          <template v-slot:body>
            <p>{{ rating.comment }}</p>

            <p v-if="rating.isRecommended">Zu empfehelen</p>
            <p v-else>Nicht zu empfehlen</p>
          </template>
        </base-content-container>
      </div>
    </template>
    <template v-slot:modal-button> </template>
  </base-modal-large>
</template>

<script>
import { mapGetters } from "vuex";

import BaseModalLarge from "../base-components/BaseModalLarge.vue";
import BaseContentContainer from "../base-components/BaseContentContainer.vue";

export default {
  name: "ratings-modal",
  components: {
    BaseModalLarge,
    BaseContentContainer,
  },
  computed: {
    ...mapGetters({
      ratings: "ratingStore/getRatingsByItemId",
    }),
  },
};
</script>

<style scoped>
.ratings {
  margin-top: 2rem;
  width: 50vw;
}
</style>
