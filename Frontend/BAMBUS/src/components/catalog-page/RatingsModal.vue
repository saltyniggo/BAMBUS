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
            <div class="body">
              <div class="text">
                <p>{{ rating.comment }}</p>
                <br>
                <p v-if="rating.isRecommended">Zu empfehelen</p>
                <p v-else>Nicht zu empfehlen</p>
              </div>

              <div class="button" v-if="role == 1 || userId == rating.userId">
                <base-rectangle-button @click="deleteRating"> Löschen </base-rectangle-button>
              </div>
            </div>

          </template>
        </base-content-container>
      </div>
    </template>
    <template v-slot:modal-button> </template>
  </base-modal-large>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

import BaseModalLarge from "../base-components/BaseModalLarge.vue";
import BaseContentContainer from "../base-components/BaseContentContainer.vue";
import BaseRectangleButton from "../base-components/BaseRectangleButton.vue";

export default {
  name: "ratings-modal",
  components: {
    BaseModalLarge,
    BaseContentContainer,
    BaseRectangleButton,
  },
  computed: {
    ...mapGetters({
      ratings: "ratingStore/getRatingsByItemId",
      role: "userStore/getRoleLoggedUser",
      userId: "userStore/getUserIdLoggedUser",
    }),
  },
  methods: {
    ...mapActions({
      deleteRating: "ratingStore/deleteRating",
    }),
  },
};
</script>

<style scoped>
.ratings {
  margin-top: 2rem;
  width: 50vw;
}

.body {
  width: 40vw;
  display: flex;
}

.text {
  width: 90%;
  min-width: 200px;
  margin-right: 2rem;
  text-align: left;
}
.button {
  width: 10%;
  min-width: 100px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>
