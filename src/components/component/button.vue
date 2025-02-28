<script setup>
    defineProps({
    label: String,
    });
</script>


<template>
    <button>{{ label }}</button>
</template>

<style scoped>
    button{
        border-radius: 1rem;
        cursor: pointer;
        width: auto;
        height: 3rem;
        color: black;
        background-color: aqua;
        border: none;
        box-sizing: border-box;
        padding: 1rem;
        display: flex;
        align-content: center;
        justify-content: center;
    }
</style>