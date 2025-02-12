<script setup>
    import cards from "../components/service-card.vue"
    import { ref } from 'vue';

    const maintence_logo = ref(new URL('../assets/maintenance.png', import.meta.url).href);
    const globo_logo = ref(new URL('../assets/globo.png', import.meta.url).href);
    const globo_maint_logo = ref(new URL('../assets/main+site.png', import.meta.url).href);
    
</script>

<template>
    <section>
        <h1>Produtos</h1>
        <cards :imageSrc="globo_logo" text1="Site" class="cards card1 mt"></cards>
        <cards :imageSrc="globo_maint_logo" text1="Site Manutenção e Acessoria Mensal" class="cards card2 "></cards>
        <cards :imageSrc="maintence_logo" text1="Manuteção" class="cards card3 mt"></cards>

    </section>
</template>


<style scoped>
    section{
        width: 100%;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        gap: 3rem;
        padding: 3rem;
        background-color: white;
        display: grid;
        grid-template-columns: auto auto auto;
        grid-template-rows: auto auto;
        
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