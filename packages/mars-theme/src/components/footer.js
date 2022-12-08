import { styled } from "frontity"
import React from "react"
import logo from "../assets/logo.svg"
import instagram from "../assets/instagram.svg"
import whatsapp from "../assets/whatsapp.svg"
import ReactWhatsapp from 'react-whatsapp';

const FooterContainer = styled.div`
    width: 100%;
    padding: 20px 1rem;
    min-height: 250px;
    overflow: visible;
    background-color: #050609;
    z-index: 1;
    @media (min-width:767px){
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        min-height: 150px;
        padding: 50px 2rem;
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
    height: 60px;
`

const FooterLinksContainer = styled.div`
    margin: auto;
    margin-bottom: 20px;
    display: flex;
    flex-flow:column;
    gap: 10px;
    @media (min-width:767px){
        display: flex;
        flex-direction: row;
        align-items: center;
    }
`
const FooterLink = styled.a`
    display: grid;
    grid-template-columns: auto 1fr;
    justify-items: flex-start ;
    align-items: center;
    gap: 10px;
    font-weight: 200;
    cursor: pointer;
    color: white !important;
    font-size: 18px;
    text-decoration: underline;
    &:hover{
        color: #FF4D00 !important;
    }
`

export function Footer(props) {
    return (
        <FooterContainer>
              <FooterLinksContainer>
                <FooterLink href="https://www.instagram.com/oniro.studio" target={"_blank"}>
                    {/* <img src={instagram} /> */}
                    Instagram
                </FooterLink>
                <FooterLink>
                    <ReactWhatsapp number="+355672418595" message="Hello" element="span">
                        Phone
                    </ReactWhatsapp>
                </FooterLink>
                    <FooterLink href="mailto:oniro.studio16@gmail.com" target={"_blank"}>
                        {/* <img src={whatsapp} /> */}
                       Email
                    </FooterLink>
                    <FooterLink href="https://goo.gl/maps/Xj7gApxTURP2QS7t5" target={"_blank"} >
                        Location
                    </FooterLink>
                {/* Address */}
            </FooterLinksContainer>
            <LogoContainer>
                <a href="/">
                    <Logo src={logo} alt="Logo White" />
                </a>
            </LogoContainer>
          
        </FooterContainer>
    )
}