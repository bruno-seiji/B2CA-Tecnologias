<script setup>
    import cards from "../component/service-card.vue"
    import { ref } from 'vue';
    import maintenance from '../../assets/maintenance.png';
    import globo from '../../assets/globo.png';
    import globo_main from '../../assets/main+site.png';
    const maintence_logo = ref(maintenance);
    const globo_logo = ref(globo);
    const globo_maint_logo = ref(globo_main);
    
</script>

<template>
    <section class="produtos" id="produtos">
        <h1>Produtos</h1>
        <cards :imageSrc="globo_logo" text1="Site" class="cards card1 mt"></cards>
        <cards :imageSrc="globo_maint_logo" text1="Site, Manutenção e Acessoria Mensal" class="cards card2 "></cards>
        <cards :imageSrc="maintence_logo" text1="Manuteção" class="cards card3 mt"></cards>

    </section>
</template>


<style scoped>
    .produtos{
        width: 1270px;
        height: auto;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        gap: 3rem;
        padding: 3rem;
        background-color: white;
        display: grid;
        grid-template-columns: auto auto auto;
        grid-template-rows: auto auto;
        scroll-margin-top: 128px;
        
      
        
        h1{
            grid-column: span 3;
            text-align: center;
            font-weight: 700;
            font-size: 3rem;
        }

        .mt{
            margin-top: 4rem;
        }
    }
</style>