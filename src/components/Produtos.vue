<script setup>
    import cards from "../components/service-card.vue"
    import { ref } from 'vue';

    const logoSrc = ref(new URL('../assets/logo.png', import.meta.url).href);
</script>

<template>
    <section>
        <cards :imageSrc="logoSrc" text="Site" class="cards card1 mt"></cards>
        <cards :imageSrc="logoSrc" text="Site + Manuteção + Acessoria Mensal" class="cards card2 "></cards>
        <cards :imageSrc="logoSrc" text="Manuteção" class="cards card3 mt"></cards>

    </section>
</template>


<style scoped>
    section{
        width: 100%;
        height: 630px;
        border: 1rem black solid;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        gap: 3rem;
        padding: 3rem;
        


        .mt{
            margin-top: 4rem;
        }
    }
</style>