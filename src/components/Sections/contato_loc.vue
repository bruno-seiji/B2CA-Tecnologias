<script setup></script>


<template>
    <Section id="localizacao" class="localizacao gradient-box">
        <h2>Contato / Localização</h2>
        <p>Horário: Segunda a sexta, das 8h às 18h.</p>
        <p>Endereço: Praça da Sé, São Paulo - SP, 01001-000</p>
        <p>Telefone: (XX) XXXXX-XXXX</p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.5047169917707!2d-46.636775825747534!3d-23.550309878807372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59abaaae4233%3A0xd9186faf714bc5b1!2sPra%C3%A7a%20da%20S%C3%A9%20-%20Se%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001001-000!5e0!3m2!1spt-BR!2sbr!4v1740753550913!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </Section>
</template>


<style scoped>
    .localizacao{
        width: 1270px;
        height: auto;
        box-sizing: border-box;
        padding: 1rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: repeat(4, auto);

        iframe{
            grid-row: 1 / span 4;
            grid-column: 2;
            height: 400px;
        }

        h2, p {
            grid-column: 1;
            text-align: center;
            font-size: 1rem;
            align-self:center;
            

        }

        h2{
            font-size: 2rem;
            font-weight: 700;
            align-self: center;
        }
    }
</style>