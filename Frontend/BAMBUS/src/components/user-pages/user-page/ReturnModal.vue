<template>
    <base-modal-large :hasCloseButton = true>
        <template v-slot:modal-title>
            <h1>Rückgabe</h1>
        </template>
        <template v-slot:modal-content>

            <div class = modal-content>
            <div class=rating>
                <h3>Wie hat dir deine Ausleihe gefallen?</h3>
            <p> Wie viele Sterne würdest du vergeben?</p>

            <div class="stars">
                <div id="star1"  @click="changeStar">
                    <i id="star1" v-if="stars[0]" class="fa-solid fa-star" style="color: #222126"></i>
                    <i id="star1" v-else class="fa-regular fa-star" style="color: #222126"></i>
                </div>
                <div id="star2"  @click="changeStar">
                    <i id="star2" v-if="stars[1]" class="fa-solid fa-star" style="color: #222126"></i>
                    <i id="star2" v-else class="fa-regular fa-star" style="color: #222126"></i>
                </div>
                <div id="star3"  @click="changeStar">
                    <i id="star3" v-if="stars[2]" class="fa-solid fa-star" style="color: #222126"></i>
                    <i id="star3" v-else class="fa-regular fa-star" style="color: #222126"></i>
                </div>
                <div id="star4"  @click="changeStar">
                    <i id="star4" v-if="stars[3]" class="fa-solid fa-star" style="color: #222126"></i>
                    <i id="star4" v-else class="fa-regular fa-star" style="color: #222126"></i>
                </div>
                <div id="star5"  @click="changeStar">
                    <i id="star5" v-if="stars[4]" class="fa-solid fa-star" style="color: #222126"></i>
                    <i id="star5" v-else class="fa-regular fa-star" style="color: #222126"></i>
                </div>
            </div>
            <p v-if="rating!= 0"> {{rating}} Sterne</p>
            <p> Möchtest du noch etwas hinzufügen?</p>
            <textarea id="comment" name="comment" rows="5" cols="60"></textarea>
            </div>
            <div class = recommendation>
                <h3>Würdest du den Gegenstand weiter empfehlen?</h3>
                <div class="radio-group">
                    <input type="radio" id="yes" name="recommendation" value="yes">
            <label for="yes">Ja</label>
            <input type="radio" id="no" name="recommendation" value="no">
            <label for="no">Nein</label>
                </div>
            
            </div>
            <div class = condition>
            <h3>Ist der Gegenstand beschädigt worden?</h3>
            <div class="radio-group"><input type="radio" id="yes" name="condition" value="yes">
            <label for="yes">Ja</label>
            <input type="radio" id="no" name="condition" value="no">
            <label for="no">Nein</label></div>

            
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
            recommendation: "",
            condition: "",
            stars: [false, false, false, false, false],
        };
    },
    methods: {
        processReturn() {
            console.log("processReturn");
        },
        changeStar(event) {

            const starId = event.target.id.slice(-1);
            console.log(starId);
         
            this.rating = starId;

            for (let i = 1; i <= 5; i++) {
                if (i <= starId) {
                    if ((starId == i && this.stars[starId-1] == true && this.stars[i] == false) || (this.stars[starId-1] == true && starId == 5)){
                        this.stars= [false, false, false, false, false];

                        
             
                        this.rating = 0;
                        
                        console.log(this.rating);
                        console.log(this.stars);
                    } else {
                        this.stars[i-1] = true;
                    }
                } else {
                    this.stars[i-1] = false;
                }
            }

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

.rating, .recommendation, .condition {
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

.condition {
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