<script setup>
    import { ref } from 'vue';
    import cards2 from "../component/comp-cards.vue";
    import inovacao  from "../../assets/ideia.png";
    import produtividade  from "../../assets/relogio.png";
    import empatia  from "../../assets/coracao.png";
    const inov_logo = ref(inovacao);
    const empat_logo = ref(empatia);
    const prod_logo = ref(produtividade);


</script>

<template>
    <section class="competencias"> 
        <cards2 :imageSrc="inov_logo" text1="Inovação" text2= "Atua com as mais recentes tecnologias do mercado" class="card2"></cards2>
        <cards2 :imageSrc="prod_logo" text1="Produtividade" text2= "Melhora resultado e desempenho da sua empresa" class="card2"></cards2>
        <cards2 :imageSrc="empat_logo" text1="Empatia" text2= "Coloca-se no lugar do cliente" class="card2"></cards2>



    </section> 
    
    <div class="back_comp">

    </div>
    
</template>


<style>
    .competencias{
        width: 1270px;
        box-sizing: border-box;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr;
        justify-content: center;
        align-items: center;
        gap: 3rem;
        padding: 2rem;

        .card2{
            justify-self: center;
        }
     
    }

    .back_comp{
        background-image: url("/src/assets/background2.png");
        background-repeat: no-repeat;
        background-size: cover;
        position: absolute;
        top: 1334px;
        width: 1270px;
        height: 414px;
        z-index: -10;
    }

</style>