<template>
    <base-modal-large>
        <template v-slot:modal-title>
            <h1>Bewertungen</h1>
        </template>
        
        <template v-slot:modal-content >
            <div v-if="isLoading">
                <loading-spinner ></loading-spinner>
            </div>
            <div v-else>
                <base-content-container v-for="rating in ratings" class="ratings">
                <template v-slot:header>
                  Rating:   {{ rating.rating }}
                </template>
                <template v-slot:body>
                    <p>{{ rating.comment }}</p>

                    <p v-if= rating.isRecommended> Zu empfehelen</p>
                    <p v-else> Nicht zu empfehlen</p>
                </template>
        </base-content-container>
            </div>
        </template>
        <template v-slot:modal-button >
            
        </template>
    </base-modal-large>
</template>

<script>
import baseModalLarge from "../base-components/base-modal-large.vue";
import baseContentContainer from "../base-components/base-content-container.vue";
import loadingSpinner from "../base-components/base-loading-spinner.vue";


export default {
    name: "ratings-modal",
    components: {
        baseModalLarge,
        baseContentContainer,
        loadingSpinner,
    },
    data() {
        return {
            isLoading: true,  
            ratings: []
        }
    },
    methods: {
    },
    async mounted() {

        this.ratings = await this.$store.getters["ratingStore/getRatingsByItemId"];
        
        if (this.ratings != null || this.ratings != undefined) {
            this.isLoading = false;
        }
    },
}
</script>

<style scoped>
.ratings {
    margin-top: 2rem;
    width: 50vw;
}
</style>