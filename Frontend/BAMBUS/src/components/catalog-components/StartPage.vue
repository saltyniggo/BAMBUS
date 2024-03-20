<template>
     <div class="startpage"> 
        <h1>
            Was willst Du heute entdecken?
        </h1>
        <a class="startpage-shortcut">
            Bücher
        </a>
        <a class="startpage-shortcut">
            Zeitschriften
        </a>
        <a class="startpage-shortcut">
            Spiele
        </a >
        <a class="startpage-shortcut" href=#catalog>
            Alles
        </a>
    </div>
</template>

<style scoped>
    .startpage {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100%;
        background-image: url(../../../public/bambooBackground.jpg);
        background-color:#84bf9e;
    }

    .startpage h1 {
        font-size: 5em;
        text-align: center;
        color: #f2eae4;
        text-shadow: 4px 4px 10px #3c4e45;
    }

    .startpage-shortcut {
        width: 20rem;
        margin: 20px;
        padding: 20px;
        font-size: 3rem;
        color: #f2eae4;
        background-color: #d9910d;
        border: none;
        border-radius: 10px;
        box-shadow: 2px 2px 10px #446354;
        cursor: pointer;
        text-align: center;
        text-decoration: none;
        scroll-behavior: smooth;

    }

    .startpage-shortcut:hover {
        background-color: #f2eae4;
        color: #d9910d;
    }

</style>