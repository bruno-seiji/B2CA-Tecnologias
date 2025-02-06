<script setup>
  import TheHeader from "../src/components/header.vue"
  import background from "./components/background.vue";
  import Intro from "./components/Intro.vue"
  import Produtos from "./components/Produtos.vue";
</script>

<template>
  <div class="app_container">
    <TheHeader></TheHeader>
    <background></background>
    <Intro></Intro>
    <Produtos class="produtos"></Produtos>
  </div>

</template>

<style scoped>
  .produtos{
    : 1200px;
    
  }

</style>
