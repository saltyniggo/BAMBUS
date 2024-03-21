<template>
    <base-modal-large>
        <template v-slot:modal-title>
            <h1>Bewertungen</h1>
        </template>
        <template v-slot:modal-content>
        </template>
    </base-modal-large>
</template>

<script>
import baseModalLarge from "../base-components/base-modal-large.vue";

export default {
    name: "ratings-modal",
    components: {
        baseModalLarge,
    },
    props: {
        ratingsId: {
            type: Number,
            required: true,
        },
    },
}

</script>