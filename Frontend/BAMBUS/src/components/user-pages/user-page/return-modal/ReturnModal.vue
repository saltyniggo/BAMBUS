<template>
  <base-modal-large :hasCloseButton="true" :hideModal>
    <template v-slot:modal-title>
      <h1>Rückgabe</h1>
    </template>
    <template v-slot:modal-content>
      <div class="modal-content">
        <div class="rating">
          <h3>Wie hat dir deine Ausleihe gefallen?</h3>
          <p>Wie viele Sterne würdest du vergeben?</p>
          <i v-if="showAlert">Bitte gebe Sterne an, wenn du bewertest.</i>

          <div class="stars">
            <div
              v-for="(star, index) in stars"
              :key="index"
              @click="changeStar(index + 1)"
            >
              <i
                :class="[star ? 'fa-solid' : 'fa-regular', 'fa-star']"
                style="color: #222126"
              ></i>
            </div>
          </div>

          <p v-if="rating != 0">{{ rating }} Sterne</p>

          <br />
          <textarea
            id="comment"
            name="comment"
            rows="5"
            cols="60"
            maxlength="200"
            v-model="comment"
            placeholder="Möchtest du noch was hinzufügen?"
          ></textarea>
        </div>
        <div class="recommendation">
          <h3>Würdest du den Gegenstand weiter empfehlen?</h3>
          <div class="radio-group">
            <input
              type="radio"
              id="yesRecommend"
              name="recommendation"
              value="yes"
            />
            <label for="yes">Ja</label>
            <input
              type="radio"
              id="noRecommend"
              name="recommendation"
              value="no"
            />
            <label for="no">Nein</label>
          </div>
        </div>
        <div class="isDamaged">
          <h3>Ist der Gegenstand beschädigt worden?</h3>

          <div class="radio-group">
            <input
              type="radio"
              id="yesBroken"
              name="condition"
              value="yes"
              @click="checkIsDamaged"
            />
            <label for="yes">Ja</label>
            <input
              type="radio"
              id="noNotBroken"
              name="condition"
              value="no"
              @click="checkIsDamaged"
            />
            <label for="no">Nein</label>
          </div>

          <input
            type="text"
            v-if="isDamaged == true"
            v-model="damageDescription"
            maxlength="150"
            placeholder="Bitte benenne den Schaden..."
          />
        </div>
      </div>
    </template>
    <template v-slot:modal-button>
      <base-rectangle-button @click="processReturn"
        >Abgeben</base-rectangle-button
      >
    </template>
  </base-modal-large>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

import BaseModalLarge from "@/components/base-components/BaseModalLarge.vue";
import BaseRectangleButton from "@/components/base-components/BaseRectangleButton.vue";
import BaseRoundButton from "@/components/base-components/BaseRoundButton.vue";

export default {
  name: "ReturnModal",
  components: {
    BaseModalLarge,
    BaseRectangleButton,
    BaseRoundButton,
  },
  data() {
    return {
      rating: 0,
      comment: "",
      recommendation: null,
      isDamaged: null,
      stars: [false, false, false, false, false],
      showAlert: false,
      damageDescription: "",
      itemTitle: "",
      hideModal: false,
    };
  },
  computed: {
    ...mapGetters("userStore", { user: "getUser" }),
    ...mapGetters("itemStore", { id: "getReturnItemId" }),
  },
  methods: {
    ...mapActions("itemStore", ["removeLoanIdFromItem"]),
    ...mapActions("itemStore", ["reportItem"]),
    ...mapActions("modalStore", ["closeAllModals"]),
    ...mapActions("ratingStore", ["addRating"]),
    ...mapActions("notificationStore", ["userReportsDamage"]),
    ...mapActions("loanStore", ["returnItem"]),

    checkRecommendation() {
      if (yesRecommend.checked) {
        this.recommendation = true;
      } else if (noRecommend.checked) {
        this.recommendation = false;
      } else {
        this.recommendation = null;
      }
    },

    checkIsDamaged() {
      if (yesBroken.checked) {
        this.isDamaged = true;
      } else {
        this.isDamaged = false;
        this.damageDescription = "";
      }
    },

    processReturn() {
      this.checkRecommendation();
      this.checkIsDamaged();

      if (
        this.rating != 0 ||
        this.comment.trim() != "" ||
        this.recommendation != null
      ) {
        if (this.rating == 0) {
          this.showAlert = true;
          return;
        }
        this.showAlert = false;
        let newRating = {
          ratingId: new Date().toISOString(),
          itemId: this.id,
          userId: this.user.userId,
          rating: this.rating,
          comment: this.comment,
          isRecommended: this.recommendation,
        };
        this.addRating(newRating);
      }

      if (this.isDamaged == true) {
        this.itemTitle = this.$store.getters["itemStore/getItemById"](
          this.id
        ).title;
        this.reportItem();
        this.userReportsDamage({
          itemId: this.id,
          userId: this.user.userId,
          title: this.itemTitle,
          damageDescription: this.damageDescription,
        });
      }
      this.returnItem(this.id);
      this.removeLoanIdFromItem(this.id);

      this.hideModal = true;
      setTimeout(() => {
        this.$store.dispatch("modalStore/closeAllModals");
      }, 500);
      this.$store.dispatch("itemStore/deleteAllModalIds");
    },

    changeStar(index) {
      this.stars = this.stars.map((star, i) => i < index);
      this.rating = this.stars.filter((star) => star).length;
    },
  },
};
</script>

<style scoped>
.modal-content {
  background-color: #f2eae4;
  padding: 2.5rem;
  border-radius: 1rem;
}

.rating,
.recommendation,
.isDamaged {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.stars {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.recommendation {
  margin-top: 1rem;
}

.isDamaged {
  margin-top: 1rem;
}

.radio-group {
  width: 6rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

h1 {
  color: #f2eae4;
}

input[type="text"] {
  width: 100%;
  margin-top: 1rem;
}
</style>
