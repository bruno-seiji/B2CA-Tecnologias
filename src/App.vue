<script setup>
  import TheHeader from "../src/components/Sections/header.vue";
  import Intro from "./components/Sections/intro.vue";
  import Produtos from "./components/Sections/produtos.vue";
  import Competencias from "../src/components/Sections/competencias.vue";
  import Clientes from "../src/components/Sections/clientes.vue";
  import Faleconosco from "./components/Sections/faleconosco.vue";
  import Localiza from "./components/Sections/contato_loc.vue";
  import TheFooter from "./components/Sections/footer.vue";
</script>

<template>
  <div class="app_container">
    <TheHeader></TheHeader>
    <Intro></Intro>
    <Produtos></Produtos>
    <Competencias></Competencias>
    <Clientes></Clientes>
    <Faleconosco></Faleconosco>
    <Localiza></Localiza>
    <TheFooter></TheFooter>
  </div>

</template>

<style scoped>
  	.app_container{
    width: 1270px;
    margin: auto;
    }
</style>
