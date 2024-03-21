<template>
<base-content-container>
    <v-slot:deafault>
        <div class="item-container">
        <div class="item-header">

              <div class="item-header-rating">
                <i v-for="index in 5" :key="index" :class="getStarClass(index)" style="color: #222126;"></i>
                <p style="font-size: smaller;">Lese hier Bewertungen</p>
              </div>
            
            <div class="item-header-category">
                <i v-if="item.itemCategory == 1" class="fa-solid fa-book" style="color: #222126;"></i>
                <i v-if="item.itemCategory == 0" class="fa-regular fa-newspaper" style="color: #222126;"></i>
                <i v-if="item.itemCategory == 2" class="fa-solid fa-dice-d20" style="color: #222126;"></i>
            </div>      
            
        </div>
   
        <div class="item-title">
            <h1 v-if="item.title">{{ item.title}}</h1>
            <h1 v-else>{{ item.name}}</h1>
            <i v-if="item.author">{{ item.author }}</i>
        </div>
     
      
        <div class="item-description">
            <p>{{ item.category }}</p>
            <p v-if="item.available"> Verfügbar</p>
            <p v-else> Nicht verfügbar</p>
        </div>
    <p v-if="item.ISBN">ISBN {{item.ISBN}}</p>
    <p v-else-if="item.ISSN">ISSN {{ item.ISSN }}</p>
    </div>
    </v-slot:deafault>
       
</base-content-container>
</template>

<script>
import baseContentContainer from "./base-content-container.vue";
export default {
    name: "base-item-container",
    components: {
        baseContentContainer,
    },
    props: {
        item: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            number: this.item.rating,
        };
    },
    methods: {
      getStarClass(index) {
        const roundedNumber = Math.round(this.number);
        if (index <= roundedNumber) {
          return 'fa-solid fa-star';
        } else {
           return 'fa-regular fa-star';
        }
      },
    },
};


</script>

<style scoped>
base-content-container {
    justify-content: none;
}
div.item-container {
    width: 100%;
    height: 100%;
}

div.item-header, div.item-description {
    margin: 5% 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}


div.item-header {
    position: relative;
    top: 0;
    
}
div.item-header-category {
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: #222126 1px solid;
}

div.item-title {
    margin-bottom: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

div.item-title h1, h2, i {
    margin: 5% 0;
}

h3, h2, h1, p, i {
    color: #222126; 
    text-align: center;
}


h1 {
    font-size: 1.3rem;
    font-weight: bold;
}

h2 {
    font-size: 1 rem;
    font-weight: normal;
}

div.star-container {

    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    box-sizing: border-box;
}

</style>