<template>
    <div class="header">
        <p id="itemID" @click="sortId">ID</p>
        <p id="title" @click="sortTitle">Titel</p>
        <p id="acceptDamage" @click="sortAcceptDamage">Akzeptieren</p>
        <p id="rejectDamage" @click="sortRejectDamage">Ablehnen</p>
    </div>
    <hr>
    <div class="row" v-for="(item, index) in reportedItems" :key="item.index" :class="{uneven: index%2 == 0}" >
        <p id="itemID">{{ item.itemId }}</p>
        <p id="title">{{ item.title }}</p>
        <p id="acceptDamage" @click="acceptDamage(item.itemId)">
            <BaseRectangleButton>Beschädigt</BaseRectangleButton>
        </p>
        <p id="rejectDamage" @click="rejectDamage(item.itemId)">
            <BaseRectangleButton>Noch gut</BaseRectangleButton>
        </p>
        
    </div>
</template>

<script>
import BaseRectangleButton from "@/components/base-components/BaseRectangleButton.vue";
import { mapActions } from "vuex";

export default {
    name: "ReportedDamagesTable",
    components: {
        BaseRectangleButton,
    },
    data() {
        return {
            reportedItems: [],
        };
    },
    computed:
    {
        reportedItems() {
            return this.$store.getters["itemStore/getReportedItems"];
        }
    },

    methods: {
        ...mapActions("itemStore", ["acceptDamage", "rejectDamage"]),
        sortId() {
            this.reportedItems.sort((a, b) => a.itemId - b.itemId);
        },
        sortTitle() {
            this.reportedItems.sort((a, b) => a.title.localeCompare(b.title));
        },
        sortAcceptDamage() {
            this.reportedItems.sort((a, b) => a.acceptDamage - b.acceptDamage);
        },
        sortRejectDamage() {
            this.reportedItems.sort((a, b) => a.rejectDamage - b.rejectDamage);
        },
    },
    mounted() {
       this.reportedItems = this.$store.getters["itemStore/getReportedItems"];
    },
};
</script>

<style scoped>
.header, .row {display: inline-flex;
    width: 75vw;
    align-items: center;
    padding: 0.5rem;
    overflow: auto;
}
.header {
    font-weight: bold;
}

.header p:hover {
    cursor: pointer;
}
.uneven {
    background-color: #d8c6b9;
}

#title {
    width: 50%;
    text-align: left;
    min-width: 120px;
    overflow-wrap: break-word;
}

#acceptDamage, #rejectDamage {
    width: 20%;
    text-align: center;
    min-width: 40px;
    overflow-wrap: break-word;
}

#itemID {
    width: 10%;
    text-align: center;
    min-width: 50px;
    overflow-wrap: break-word;
}

hr {
    width: 75vw;
    background-color:  #222126;
}
</style>