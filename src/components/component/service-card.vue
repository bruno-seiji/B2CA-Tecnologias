<script setup>
   defineProps({
    text1: String,
    imageSrc:String,
    });

    import thebutton from "../component/TheButton.vue"
</script>


<template>
    <div>
        <img :src="imageSrc"  >
        <p>{{ text1 }}</p>
        <thebutton class="thebutton" label="Saiba Mais"></thebutton>
    </div>
  </template>



<style>
    :root{--img-square: 150px;}
</style>


<style scoped>
    

    
    
    div {
        background-color: rgb(255, 254, 254);
        border:gray 0.2rem solid;
        border-radius: 1rem;
        width: 350px;
        height: 450px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-content: center;
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
            display: flex;
            box-sizing: border-box;
            padding: 2rem;
            font-weight: 700;
            font-size: 1.5rem;
            justify-content: center;
            align-items: center;
        }

        .thebutton:hover{
            width: 100%;
            height: 60px;
            transition: 1.5s;
        }

        img{
            width: 70%;
           } 

    }
</style>