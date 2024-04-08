<template>
    <base-modal-large :hasCloseButton=true>
        <template v-slot:modal-title>
            <h1>Rückgabe</h1>
        </template>
        <template v-slot:modal-content>

            <div class=modal-content>
                <div class=rating>
                    <h3>Wie hat dir deine Ausleihe gefallen?</h3>
                    <p> Wie viele Sterne würdest du vergeben?</p>
                    <i v-if="showAlert">Bitte gebe Sterne an, wenn du bewertest.</i>

                    <div class="stars">
                        <div v-for="(star, index) in stars" :key="index" @click="changeStar(index + 1)">
                            <i :class="[star ? 'fa-solid' : 'fa-regular', 'fa-star']" style="color: #222126"></i>
                        </div>
                    </div>

                    <p v-if="rating != 0"> {{ rating }} Sterne</p>

                    <br>
                    <textarea id="comment" name="comment" rows="5" cols="60" maxlength="200"
                        v-model="comment" placeholder="Möchtest du noch was hinzufügen?"></textarea>
                </div>
                <div class=recommendation>
                    <h3>Würdest du den Gegenstand weiter empfehlen?</h3>
                    <div class="radio-group">
                        <input type="radio" id="yesRecommend" name="recommendation" value="yes">
                        <label for="yes">Ja</label>
                        <input type="radio" id="noRecommend" name="recommendation" value="no">
                        <label for="no">Nein</label>
                    </div>

                </div>
                <div class=isDamaged>
                    <h3>Ist der Gegenstand beschädigt worden?</h3>
                    <div class="radio-group"><input type="radio" id="yesBroken" name="condition" value="yes">
                        <label for="yes">Ja</label>
                        <input type="radio" id="noNotBroken" name="condition" value="no">
                        <label for="no">Nein</label>
                    </div>

                </div>
            </div>
        </template>
        <template v-slot:modal-button>
            <base-rectangle-button @click="processReturn">Abgeben</base-rectangle-button>
        </template>
    </base-modal-large>

</template>

<script>
import BaseModalLarge from "@/components/base-components/BaseModalLarge.vue";
import BaseRectangleButton from "@/components/base-components/BaseRectangleButton.vue";
import BaseRoundButton from "@/components/base-components/BaseRoundButton.vue";
import { mapGetters } from "vuex";


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
        };
    },
    computed: {
        ...mapGetters("userStore", { user: "getUser" }),
        ...mapGetters("itemStore", { id: "getReturnItemId" }),

    },
    methods: {

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
            }
        },

        processReturn() {
            this.checkRecommendation();
            this.checkIsDamaged();


            if (this.rating != 0 || this.comment.trim() != "" || this.recommendation != null || this.isDamaged != false) {


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
                }

                console.log(newRating);

                this.$store.dispatch("ratingStore/addRating", newRating);
            }

            this.$store.dispatch("itemStore/changeItemAvailability", ({ id: this.id, isDamaged: this.isDamaged }));
            this.$store.dispatch("modalStore/closeAllModals");


        },

        changeStar(index) {
            this.stars = this.stars.map((star, i) => i < index);
            this.rating = this.stars.filter(star => star).length;

        },
    },
}
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
</style>