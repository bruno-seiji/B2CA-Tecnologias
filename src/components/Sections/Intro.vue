<script setup>
    import TheButton from "../component/TheButton.vue"
    import { ref, onMounted, onUnmounted } from 'vue';

    const Yscroll = ref(0);
    const intro = ref(0);


    const handleScroll = () => {
      Yscroll.value = window.scrollY;
      
      if (Yscroll.value > 80) {
        intro.value.style.marginTop = '128px';
      }
      else{
        intro.value.style.marginTop = '0px';
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
    <section class="Intro" ref="intro">
      <p>Soluções Front personalizadas, sob-medida para seu Negócio</p>
      <TheButton class="the_button" label="Contate nossos Especialistas"></TheButton>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/sQ22pm-xvrE?si=oPH0jkqhRixmTqRm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </section>
</template>

<style>
    
.Intro{
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
  margin: auto;
  width: 100%;
  height: 500px;
  padding: 3rem;
  box-sizing: border-box;
  justify-content: space-between;



  p{
    width: 100%;
    grid-column: 1;
    grid-row: 1;
    font-weight: 400;
    font-size: 3.5rem;
    justify-self: normal;
    color: white;
  }

    .the_button{
        grid-column: 1;
        grid-row: 2;
        justify-self: start;
        align-self: center;
        display: flex;
        box-sizing: border-box;
        padding: 2rem;
        font-weight: 700;
        font-size: 1.5rem;
        justify-content: center;
        align-items: center;
        

    }

  iframe{
    grid-column: 2;
    grid-row: span 2 ;
  }

}

</style>


