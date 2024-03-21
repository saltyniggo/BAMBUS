<template>
    <Transition><div class="backdrop" v-if="isShowing" @click="closeModal"></div></Transition>
    
    <Transition>
    <div class="modal" v-if="isShowing">
        <h1>
            <slot name="modal-title">
                <h1>Modal Title</h1>
            </slot>
        </h1>

        <div class="modal-content">         
            <slot name="modal-content">
                <p>Modal Content</p>
                <!-- <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia qui quis suscipit velit repellendus dolorum tenetur. Incidunt aperiam necessitatibus aliquid vel iste. Quo consequatur, distinctio accusamus voluptates quaerat pariatur a.</p> -->
                <!-- <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia qui quis suscipit velit repellendus dolorum tenetur. Incidunt aperiam necessitatibus aliquid vel iste. Quo consequatur, distinctio accusamus voluptates quaerat pariatur a.</p> -->
                <!-- <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia qui quis suscipit velit repellendus dolorum tenetur. Incidunt aperiam necessitatibus aliquid vel iste. Quo consequatur, distinctio accusamus voluptates quaerat pariatur a.</p> -->
                <!-- <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia qui quis suscipit velit repellendus dolorum tenetur. Incidunt aperiam necessitatibus aliquid vel iste. Quo consequatur, distinctio accusamus voluptates quaerat pariatur a.</p> -->
                <!-- <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia qui quis suscipit velit repellendus dolorum tenetur. Incidunt aperiam necessitatibus aliquid vel iste. Quo consequatur, distinctio accusamus voluptates quaerat pariatur a.</p> -->
            </slot>
        </div>

        <base-rectangle-button @click = closeModal()> <slot name = "modal-button">Close</slot> </base-rectangle-button>

       
       
    </div>
    </Transition>
  </template>

<script>
import baseRectangleButton from "./base-rectangle-button.vue";

export default {
    name: "base-modal",
    components: {
        baseRectangleButton
    },
  data() {
    return {
      isShowing: false,
    };
  },
  methods: {
    closeModal() {
      
  
     
      this.isShowing = false;
      setTimeout(() => {
        this.$store.dispatch("modalStore/closeAllModals");
      }, 500);
      this.$store.dispatch("itemStore/deleteAllModalIds");
    },
    
  },

  mounted() {
  this.isShowing = true;
},

};
</script>


<style scoped>

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.v-enter-to,
.v-leave-from {
  opacity: 1;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease-out;
}
.modal {
  position: fixed;
  width: 60vw;
  height: 60vh;
  top: 20vh;
  left: 20vw;
  z-index: 20;
  transition: all 1s;
    background-color: #7ca692;
    border-radius: 2rem;
    border: none;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 1rem;
    text-align: center;
}

.modal-content {
  overflow-y: auto;
  padding: 1rem;
  max-height: 70%;
}

h1, h2, h3, p, i {
  color: #F2EAE4;
}

.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 19;
  background-color: rgba(0, 0, 0, 0.8);
}
</style>