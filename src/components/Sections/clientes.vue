<script setup>
    import microsoft from "../../assets/microsoft - logo.png"
    import amazon from "../../assets/amazon - logo.png"
    import google from "../../assets/google - logo.png"
    import kpmg from "../../assets/kpmg - logo.png"
    
    import 'vue3-carousel/carousel.css'
    import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

        const images = [
            { id: 1, url: microsoft },
            { id: 2, url: google },
            { id: 2, url: amazon },
            { id: 2, url: kpmg },
        ];

        const carouselConfig = {
            height: 300,
            itemsToShow: 3,
            autoplay: 3000,
            wrapAround: true,
        }
</script>

<template>
    <section id="clientes" class="clientes">
        <h2>Clientes</h2>
        <p>Projetos com gigantes do mercado</p>
        <div class="slider">
            <Carousel v-bind="carouselConfig">
                <Slide v-for="image in images" :key="image.id">
                    <img :src="image.url" alt="image" class="carousel-image"/>
                </Slide>
                    <template #addons>
                        <Pagination />
                    </template>
            </Carousel>
        </div>
    </section>
</template>



<style scoped> 
    .clientes{
        width: 1270px;
        height: auto;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
        z-index: -1;
        scroll-margin-top: 128px;
        
        h2{
            font-size: 3rem;
            font-weight: 700;
            text-align: center;
        }

        p{
            font-size: 1rem;
            font-weight: 400;
            text-align: center;

        }
               

        .slider{
            width: 1270px;
            height: 400px;
            box-sizing: border-box;
            position: relative;

        }

        .carousel-image{
            width: 300px; 
            height: auto; 
            object-fit: contain;
        }
    }


</style>