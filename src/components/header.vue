<script setup>
  import { ref } from 'vue'; 
  const Yscrool = ref(0);

  const handleScroll = () => {
    Yscroll.value = window.scrollY;
  };

  if (Yscrool>128){
    console.log("naruto")
  }

  window.addEventListener('scroll', handleScroll);

</script>





<template>

    <header>
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

</style>
