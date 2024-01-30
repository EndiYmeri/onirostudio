import { connect, styled } from "frontity"
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
    display: flex;
    flex-direction: column;
    @media (min-width:767px){
        display: flex;
        flex-direction: row;
        align-items: center;
        min-height: 150px;
        padding: 50px 2rem;
        justify-content: space-between;

    }
`

const LogoContainer = styled.div`
    order: 2;
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
    order: 0;
    &:hover{
        color: #fc4523 !important;
    }
`
const ContactFormContainer = styled.div`
    order: 1;
    color: white;
    margin-bottom: 30px;
    align-items: center;
    @media (min-width:767px){
        order: 0;
    }
    p{
        margin: 5px 0;
    }
    label{
        font-size: 17px;
        letter-spacing: 0.5px;
        margin-bottom: 0;
     
    }
    label.bottom{
        font-size: 14px;
    }
    
    .input-and-button{
        display: grid;
        width: 100%;
        grid-template-columns: 1fr auto;
        align-items: center;
        gap: 10px;
        @media (min-width:767px){
                grid-template-columns: 1fr 1fr;
        }
        .wpcf7-email{
            padding: 0.5rem 1rem;
            max-width: 200px;
            outline: none;
            border: none;
            font-weight: bold;
            letter-spacing: 0.5px;
            @media (min-width:767px){
                max-width: unset;
            }
        }
        .wpcf7-submit{
            background-color: #fc4523;
            color: white;
            border-radius: 16px;
            padding: 0.5rem 1rem;
            font-size: 16px;
            cursor: pointer;
            font-weight: bold;
            letter-spacing: 0.5px;
            border: none;
            outline: none;
        }
    }
`

const Footer = ({state, actions, libraries}) => {
    const data = state.source.get('/subscribe/');
    const contactForm = state.source.page[data.id]
    const Html2React = libraries.html2react.Component;
    return (
        <FooterContainer>

            {
            contactForm? 
                <ContactFormContainer>
                    <Html2React html={contactForm.content.rendered} />
                </ContactFormContainer>
                :null
            }
              <FooterLinksContainer>
                <FooterLink href="https://www.instagram.com/oniro.studio" target={"_blank"}>
                    {/* <img src={instagram} /> */}
                    Instagram
                </FooterLink>
                <FooterLink>
                    <ReactWhatsapp number="+355697329797" message="Hello" element="span">
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
export default connect(Footer);