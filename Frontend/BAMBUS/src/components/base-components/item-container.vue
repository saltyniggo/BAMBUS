<template>
    <div class="item-container">

        <div class="item-header">
            <div class="item-header-rating"> 
                <i class="fa-solid fa-star" style="color: #f2eae4"></i>
                <i class="fa-regular fa-star" style="color: #f2eae4"></i>
                <i class="fa-regular fa-star" style="color: #f2eae4"></i>
                <i class="fa-regular fa-star" style="color: #f2eae4"></i>
                <i class="fa-regular fa-star" style="color: #f2eae4"></i>
            </div>  
            <div class="item-header-category">
                <i class="fa-solid fa-book" style="color: #f2eae4;"></i>
            <!-- <i class="fa-regular fa-newspaper" style="color: #f2eae4;"></i> -->
            <!-- <i class="fa-solid fa-dice-d20" style="color: #f2eae4;"></i> -->
            </div>      
            
        </div>
   
        <div class="item-title">
            <h1>Robbie, Tobbie, und das Fliwatüüt</h1>
    	    <h2>Die Entdeckung des Himbeersaftes als nachhaltige Energiequlle für Flugmaschienen und dazugehörige Roboter</h2>
            <i>Max Mustermann</i>
        </div>
     
      
        <div class="item-description">
            <p>Action Wissenschaft</p>
            <p>Verfügbar</p>
        </div>
        
        

    
    <p>ISBN 978-3-12-732320-7</p>
    
    </div>
</template>

<style scoped>

div.item-container{
    width: 33%;
    min-width: 300px;
    min-height: 300px;

    border-radius: 10px;
    border: none;
    box-sizing: border-box;

    margin: 10px;
    padding: 10px;
    background-color: #7ca692;
    color: #F2EAE4;
    
    box-shadow: 0px 0px 5px 0px #222126;
    cursor: pointer;
    transition: 0.3s;
    display: flex;
    flex-direction: column;
    text-align: center;
}

div.item-container:hover {
    box-shadow: 0px 0px 10px 0px #222126;
}

div.item-header, div.item-description {
    margin: 5% 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

div.item-header-category {
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: #F2EAE4 1px solid;
}

div.item-title {
    margin-bottom: 5%;
}

div.item-title h1, h2, i {
    margin: 5% 0;
}

h3, h2, h1, p, i {
    color: #F2EAE4; 
}


h1 {
    font-size: 1.5rem;
    font-weight: bold;
}

h2 {
    font-size: 1.3rem;
    font-weight: normal;
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