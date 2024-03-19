<template>
    <div class="item-container">
        <i class="fa-solid fa-book" style="color: #f2eae4;"></i>
        <h3>Robbie, Tobbie, und das Fliwatüüt</h3>
        <h2>Die Entdeckung des Himbeersaftes als nachhaltige Energiequlle für Flugmaschienen und dazugehörige Roboter</h2>
        <p>Max Mustermann</p>
        <p>ISBN 978-3-12-732320-7</p>
        <p>Action Wissenschaft</p>
        <p>Verfügbar</p>
        <div class="star-container"> <i class="fa-solid fa-star" style="color: #f2eae4"></i>
        <i class="fa-regular fa-star" style="color: #f2eae4"></i>
        <i class="fa-regular fa-star" style="color: #f2eae4"></i>
        <i class="fa-regular fa-star" style="color: #f2eae4"></i>
        <i class="fa-regular fa-star" style="color: #f2eae4"></i>
    </div>
    
    </div>
</template>

<style scoped>

/* <-- TODo: realtive widrh and height --> */
div.item-container{
    max-width: 250px;
    min-height: 300px;
    border-radius: 10px;
    margin: 10px;
    padding: 10px;
    background-color: #84BF9E;
    color: #F2EAE4;
    border: none;
    box-shadow: 0px 0px 5px 0px #222126;
    cursor: pointer;
    transition: 0.3s;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    box-sizing: border-box;
}

h3, h2, h1, p {
    color: #F2EAE4; 
}

div.star-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;
    box-sizing: border-box;
}

</style>