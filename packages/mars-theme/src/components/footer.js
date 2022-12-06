import { styled } from "frontity"
import React from "react"
import logo from "../assets/logo.svg"
import instagram from "../assets/instagram.svg"
import whatsapp from "../assets/whatsapp.svg"
import ReactWhatsapp from 'react-whatsapp';

const FooterContainer = styled.div`
    width: 100%;
    overflow-x: hidden;
    padding: 50px 2rem;
    position: relative;
    min-height: 250px;
    overflow: visible;

    @media (min-width:767px){
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: 150px
    }
`

const LogoContainer = styled.div`
        display: flex;
        justify-content: center;
    @media (min-width:767px){
        display: flex;
        align-items: center;
}
`

const Logo = styled.img`
    height: 70px;
`

const FooterLinksContainer = styled.div`
    margin-top: 50px;
    display: flex;
    flex-flow:column;
    gap: 20px;
    @media (min-width:767px){
        display: flex;
        justify-content: center;
        align-items: center;
    }
`
const FooterLink = styled.a`
    display: grid;
    grid-template-columns: auto 1fr;
    justify-items: flex-start ;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    color: white !important;
    font-size: 20px;
    text-decoration: underline;
`

export function Footer(props) {
    return (
        <FooterContainer>
            <LogoContainer>
                <Logo src={logo} alt="Logo White" />
            </LogoContainer>
            <FooterLinksContainer>
                <FooterLink href="https://www.instagram.com/oniro.studio" target={"_blank"}>
                    <img src={instagram} />
                    Follow my work on instagram for daily content
                </FooterLink>
                <ReactWhatsapp number="+355672418595" message="Hello" element="span">
                    <FooterLink>
                        <img src={whatsapp} />
                        Lets have a conversation on how you make your interior pop
                    </FooterLink>
                </ReactWhatsapp>
            </FooterLinksContainer>
        </FooterContainer>
    )
}