import { styled } from "frontity"
import React from "react"
import oniroCircleWhiteBig from "../assets/oniroCircleWhiteBig.svg"
import oniroCircleWhiteMedium from "../assets/oniroCircleWhiteMedium.svg"
import logo from "../assets/logo.svg"
import instagram from "../assets/instagram.svg"
import whatsapp from "../assets/whatsapp.svg"
import ReactWhatsapp from 'react-whatsapp';

const FooterContainer = styled.div`
    width: 100%;
    overflow-x: hidden;
    padding: 50px 5.5%;
    position: relative;
    min-height: 450px;
    overflow: visible;

    @media (max-width:767px){
        overflow: hidden;
    }
`
const Logo = styled.img`
    height: 70px;
`

const FooterLinksContainer = styled.div`
    margin-top: 100px;
    display: flex;
    flex-flow:column;
    gap: 20px;
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
            <Logo src={logo} alt="Logo White" />
            <FooterLinksContainer>
                <FooterLink href="https://www.instagram.com/oniro.studio" target={"_blank"}>
                    <img src={instagram}/>
                    Follow my work on instagram for daily content 
                </FooterLink>
                <ReactWhatsapp number="+355672418595" message="Hello" element="span">
                    <FooterLink>
                        <img src={whatsapp}/>
                            Lets have a conversation on how you make your interior pop
                    </FooterLink>
                </ReactWhatsapp>
            </FooterLinksContainer>
        </FooterContainer>
    )}