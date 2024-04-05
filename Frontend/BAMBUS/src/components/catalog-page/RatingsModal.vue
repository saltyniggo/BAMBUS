<template>
  <base-modal-large>
    <template v-slot:modal-title>
      <h1>Bewertungen</h1>
    </template>

    <template v-slot:modal-content>
      <div  v-for="rating in ratings" class="ratings" >
        <base-content-container v-if="showRating && editId != rating.ratingId">
          <template v-slot:header> 
            <i
              v-for="index in 5"
              :key="index"
              :class="getStarClass(index, rating.rating)"
              style="color: #222126"
            ></i>

          </template>
          <template v-slot:body>
            <div class="body">
              <div class="text">
                <p>{{ rating.comment }}</p>
                <br>
                <p v-if="rating.isRecommended">Zu empfehelen</p>
                <p v-else>Nicht zu empfehlen</p>
              </div>

              <div class="buttons" v-if="role == 1 || userId == rating.userId">
                <base-rectangle-button @click="editRating(rating.ratingId)">Bearbeiten</base-rectangle-button>
                <base-rectangle-button @click="deleteRating(rating.ratingId)"> Löschen </base-rectangle-button>
              </div>
            </div>
          </template>

        </base-content-container>
        <base-content-container class="ratings" v-else-if="!showRating && editId == rating.ratingId">
          <template v-slot:header> 
            <div class="stars">
    <div v-for="(star, index) in stars" :key="index" @click="changeStar(index + 1)">
        <i :class="[star ? 'fa-solid' : 'fa-regular', 'fa-star']" style="color: #222126"></i>
    </div>
</div>
          </template>
          <template v-slot:body>
            <div class="body">
              <div class="text">
                <textarea name="editRating" id="editRating" cols="55" rows="5" v-model="comment"></textarea>
                <p>Ist die Ausleihe zu empfehlen?</p>
                <div class="radio-group">
                  <input type="radio" id="yesRecommend" name="recommendation" value="yes" :checked="isRecommended">
                  <label for="yes">Ja</label>
                  <input type="radio" id="noRecommend" name="recommendation" value="no" :checked="isRecommended==false">
                  <label for="no">Nein</label>
                </div>
              </div>
              <div class="buttons">
                <base-rectangle-button @click="saveRating">Speichern</base-rectangle-button>
                <base-rectangle-button @click="editRating">Abbrechen</base-rectangle-button>
            </div>
            </div>
          </template>
        </base-content-container>
      </div>
    </template>
    <template v-slot:modal-button>
      <base-rectangle-button @click="closeModal">Schließen</base-rectangle-button>  
    </template>
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
  data() {
    return {
      editId: null,
      showRating: true,
      comment: "",
      isRecommended: "",
      numericalRating: "",
      itemId: "",
      creatorId: "",
      stars: [false, false, false, false, false],
    };
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
      deleteRating: "ratingStore/deleteRatingById",
    }),
    changeStar(starId) {
      this.stars = this.stars.map((star, index) => {
        if (index < starId) {
          return true;
        } else {
          return false;
        }
      });
      this.numericalRating = starId;
    
    },
    editRating(id) {
      this.editId = id
      this.showRating = !this.showRating
      this.comment = this.ratings.find(rating => rating.ratingId == id).comment
      this.isRecommended = this.ratings.find(rating => rating.ratingId == id).isRecommended
      this.numericalRating = this.ratings.find(rating => rating.ratingId == id).rating
      this.itemId = this.ratings.find(rating => rating.ratingId == id).itemId
      this.creatorId = this.ratings.find(rating => rating.ratingId == id).userId
    },

    getStarClass (index, rating) {
      const roundedNumber = Math.round(rating);
      if (index <= roundedNumber) {
        return "fa-solid fa-star";
      } else {
        return "fa-regular fa-star";
      }
    },

    saveRating() {
      if (yesRecommend.checked) {
        this.isRecommended = true
      } else if (noRecommend.checked) {
        this.isRecommended = false
      } else {
        this.isRecommended = null
      }

      let  newRating =  {
        ratingId: this.editId,
        itemId : this.itemId,
        userId : this.creatorId,
        rating : this.numericalRating,
        comment : this.comment,
        isRecommended : this.isRecommended
      }
      this.$store.dispatch("ratingStore/updateRating", newRating)

      this.editId = null
      this.showRating = !this.showRating

    },
    closeModal() {
      this.$store.dispatch("modalStore/closeAllModals")
    },
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
  min-height: 8.5vw;
}

.text {
  width: 90%;
  min-width: 200px;
  margin-right: 2rem;
  text-align: left;
}

.radio-group {
  display: flex;
  justify-content: space-between;
  width: 100px;
}

.buttons {
  width: 10%;
  min-width: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

}

.stars {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>
