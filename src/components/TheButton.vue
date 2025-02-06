<script setup>
    defineProps({
    label: String,
    });
</script>


<template>
    <button class="button">{{ label }}</button>
</template>

<style scoped>
    .button{
        border-radius: 1rem;
        cursor: pointer;
        width: 14rem;
        height: 3rem;
        color: black;
        background-color: aqua;
        border: none;
    }
</style>