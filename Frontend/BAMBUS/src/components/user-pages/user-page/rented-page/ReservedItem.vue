<template>
    <base-container-narrow>
        <div class="cardContent">
            <h2>{{ item.title }} yasdgfysdfysdfsdfgsdfgsdfg</h2>

            <div class="button">
                <base-round-button @click="addToCart(item.itemId)">
                <i class="fa-solid fa-basket-shopping" style="color: #f2eae4"></i>
                </base-round-button>
                <base-round-button @click="cancelReservation(item.itemId)">
                <i class="fa-solid fa-trash-can" style="color: #f2eae4"></i>
                </base-round-button>
            </div>

        </div>

    </base-container-narrow>
</template>

<script>
import BaseContainerNarrow from "@/components/base-components/BaseContainerNarrow.vue";
import BaseRoundButton from "@/components/base-components/BaseRoundButton.vue";

export default {
    name: "ReservedItem",
    components: {
        BaseContainerNarrow,
        BaseRoundButton,
    },
    props: ["item"],
    methods: {
        addToCart(itemId) {
            console.log("addToCart " + itemId);
        },
        cancelReservation(itemId) {
            console.log("cancelReservation " + itemId);
        },
    },

}
</script>

<style scoped>
.cardContent {
    width: 100%;
    max-width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    word-wrap: break-word;
}

h2 {
    width: 100%;
    max-width: 11vw;
    overflow: hidden;
    word-wrap: break-word;
}

.button {
    width: 110px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
</style>