<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const Yscroll = ref(0);
const header = ref(null);


const handleScroll = () => {
  Yscroll.value = window.scrollY;
  
  if (Yscroll.value > 80) {
    header.value.style.position = 'fixed';
    header.value.classList.add ('gradient-box');
  }
  else{
    header.value.style.position = 'relative';
    header.value.classList.remove ('gradient-box');
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>





<template>

    <header ref="header">
        <div class="logo"></div>
        <div class="menu">
          <ul>
            <li>Produtos</li>
            <li>Sobre</li>
            <li>Parceiros</li>
            <li>Localização</li>
            <li>Contato</li>
          </ul>
        </div>

    </header>


</template>




<style>

header{
    margin: auto;
    width: 1270px;
    position: relative;
    display: flex;
    justify-content: space-between;
    padding: 1.5rem;
    box-sizing: border-box;
    align-items: center;
    background-color: transparent;
    

    .logo {
      background-image: url("../assets/logo-SF.png"); 
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain; 
      height: 80px;
      width: 120px;
    }


    .menu{
      ul{
        display: flex;
        gap: 3rem;
        
        li {
          cursor: pointer;
          color: white;
          font-weight: 400;
          font-size: 1.5rem;

        }

        li:hover{
          text-decoration: underline;
        }
      }

    }


  }


  /*------------Especific styles----------------------------------------- */

  .gradient-box {
  background: linear-gradient(to right, white, #0cc0df);
  
}

</style>
