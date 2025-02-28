<script setup>
   defineProps({
    text1: String,
    text2: String,
    imageSrc:String,
    });
</script>

<template>
    <section class="comp_card">
        <img :src="imageSrc"  >
        <p>{{ text1 }}</p>
        <p>{{ text2 }}</p>
    </section>
</template>

<style scoped>
    .comp_card{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        padding: 1rem 1rem;
        font-size: 2rem;
        font-weight: 700;
        width: 300px;
        height: 350px;
        border: solid 0.1rem black;
        border-radius: 1rem;
        gap: 1rem;

            img{
                width: 40%;
            }

            p{
                text-align: center;
            }
}
</style>

