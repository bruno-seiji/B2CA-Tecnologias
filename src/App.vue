<script setup>
  import TheHeader from "../src/components/Sections/header.vue";
  import background from "./components/component/background.vue";
  import Intro from "../src/components/Sections/Intro.vue";
  import Produtos from "../src/components/Sections/Produtos.vue";
  import Competencias from "../src/components/Sections/competencias.vue";
  import Clientes from "../src/components/Sections/clientes.vue"
</script>

<template>
  <div class="app_container">
    <TheHeader></TheHeader>
    <background></background>
    <Intro></Intro>
    <Produtos></Produtos>
    <Competencias></Competencias>
    <Clientes></Clientes>
  </div>

</template>

<style scoped></style>
