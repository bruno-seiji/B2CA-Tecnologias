<script setup>
   defineProps({
    text: String,
    imageSrc:String
    });

    import thebutton from "../components/TheButton.vue"
</script>


<template>
    <div>
        <img :src="imageSrc" >
        <p>{{ text }}</p>
        <thebutton class="thebutton" label="Saiba Mais"></thebutton>
    </div>
  </template>



<style>
    :root{--img-square: 150px;}
</style>


<style scoped>
    

    
    
    div {
        background-color: #FFF;
        border:gray 0.2rem solid;
        border-radius: 1rem;
        width: 350px;
        height: 450px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding: 3rem;
        gap:1rem;

        p, .thebutton{
            color: black;
            font-weight: 700;
            font-size: 2rem;
            text-align: center;
        }

        .thebutton{
            font-size: 1rem;
        }

        .thebutton:hover{
            width: 250px;
            height: 55px;
        }

        img{
            width: var(--img-square);
            height: var(--img-square);
            
           } 

    }
</style>