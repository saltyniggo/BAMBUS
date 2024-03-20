<template>
    <button class="rectangle-button">
        <slot>
            <i class="fa-solid fa-dog" style="color: #f2eae4;"></i>
          
            <i class="fa-solid fa-otter" style="color: #f2eae4;"></i>
           
            <i class="fa-solid fa-dragon" style="color: #f2eae4;"></i>
        </slot>
    </button>
</template>

<script>
export default {
    name: "base-rectangle-button",
};
</script>

<style scoped>
button.rectangle-button {
    width: 100px;
    height: 50px;
    border-radius: 10px;
    background-color: #D9910D;
    color: #F2EAE4;
    border: none;
    box-shadow: 0px 0px 5px 0px #222126;
    cursor: pointer;
    transition: 0.3s;
}
</style>