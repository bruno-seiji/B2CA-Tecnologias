import styled from "styled-components";
import logo from "../assets/logo-SF.png"
import intro_bg from "../assets/background.png"


const Intro_bg = styled.div`
    background-image: url(${intro_bg});
    background-size: cover;
    background-position: center;
    width: 1270px;
    margin: auto;
    overflow: hidden;
    
    
    header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 4.375rem;
        padding: 1rem;
        box-sizing: border-box;

        ul{ 
            display: flex;
            justify-content: space-between;
            gap: 1rem;

            li{
                cursor:pointer;
                color: white;
            }

            li:hover{
                text-decoration: underline;
            }
        }
    }
    
    section{
        width: 1270px;
        height: 100vh;
    }

`

const __logo = styled.div`
    background-image: url(${logo});
    background-size: cover;
    background-position: center;
    color: blue;
    width: 100px;
    height: 70px;
`

export default function Header() {

    return (
        <Intro_bg>
            <header>
                <__logo></__logo>
                <ul>
                    <li>Serviços</li>
                    <li>Sobre nós</li>
                    <li>Clientes</li>
                    <li>Fale Conosco</li>
                    <li>Localização</li>
                </ul>
            </header>
            <section></section>
        </Intro_bg>


    )

}