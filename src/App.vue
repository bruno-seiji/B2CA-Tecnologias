<script setup>
  import TheHeader from "../src/components/Sections/header.vue";
  import background from "./components/component/background.vue";
  import Intro from "../src/components/Sections/Intro.vue";
  import Produtos from "../src/components/Sections/Produtos.vue";
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
   width : 1200px;
    
  }

</style>
