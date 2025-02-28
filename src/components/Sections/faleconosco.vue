<script setup>
    import Thebutton from "../component/button.vue"
</script>


<template>
    <section id="fale_conosco" class="fale_conosco">
        <h2>Fale Conosco</h2>
        <p>Quer saber o que podemos fazer para otimizar a sua empresa? Consulte agora um especialista.</p>
        <input type="text" placeholder="Nome">
        <input type="number" placeholder="Telefone">
        <input type="text" placeholder="E-mail">
        <input type="text" placeholder="Menssagem" class="input_msg">
        <div class="input">
            <input type="checkbox" name="" id="chk">
            <span>Aceito receber informações sobre ofertas e serviços do grupo B2CA.</span>
        </div>
        <Thebutton label="Enviar" class="btn_fale"></Thebutton> 

    </section>

</template>



<style scoped>
    
    .fale_conosco{
        width: 1270px;
        box-sizing: border-box;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        scroll-margin-top: 128px;
    
        h2{
            text-align: center;
            font-size: 3rem;
            font-weight: 700;
        }

        p{
            text-align: center;
            font-size: 1rem;
            font-weight: 400;
        }

        input{
            width: 40%;
            height: 1.5rem;
            align-self: center;
            justify-self: center;
            padding-left: 1rem
        }

        #chk{
            width: 3rem;
        }
    
        .input{
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .btn_fale{
            width: 15%;
            align-self: center;
            font-weight: 700;
            font-size: 1rem;
        }

        .input_msg{
            height: 6rem;
        }
    }

</style>

