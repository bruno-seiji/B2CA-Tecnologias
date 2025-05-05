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


function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
</script>





<template>

    <header ref="header">
        <div class="logo" v-on:click="scrollToTop()"></div>
        <div class="menu">
          <ul>
            <li><a v-on:click="scrollToTop()">Inicio</a></li>
            <li><a href="#produtos">Produtos</a></li>
            <li><a href="#clientes">Clientes</a></li>
            <li><a href="#fale_conosco">Contato</a></li>
            <li><a href="#localizacao">Localização</a></li>
            
          </ul>
        </div>

    </header>


</template>




<style scoped>

@media screen and (min-width: 400px) {
  html{
    overflow: hidden;
  }

  body{
    width: 100vw;
 
    header {
      width: 100vw;
      margin: 0;
      padding: 1rem 0 1rem 0;
      justify-content: center;

      .menu{
        display: none;
      }

      .logo{
        margin: auto;
      }
    }
  
}

}



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
    z-index: 10;
    top: 0;
    

    .logo {
      background-image: url("/src/assets/logo-SF.png"); 
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain; 
      height: 80px;
      width: 120px;
      cursor: pointer;
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
          a{
            text-decoration: none;
            color: white;
          }

        }

        li:hover{
          text-decoration: underline;
          
        }

      }

    }


  }

</style>
