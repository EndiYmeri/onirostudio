import { connect, css, styled } from "frontity"
import React, { useState, useEffect } from "react"
import Link from "./link";
import heroImg from "../assets/hero-blackish.jpg"
import oniroCircle from "../assets/oniroCircle.svg"
import Item from "./list/list-item";
import CatItem from "./list/list-cat-item";
import Kristina from "../assets/kristina.jpg"
import paint_cat_arr from "./paint-cat-static"
const Container = styled.div`
        width: 100%;
        margin: 0;
        @media screen and (min-width: 768px) {
            /* padding: 131px 160px; */
        };
    `
const ContainerMain = styled.div`
    padding: 1rem;
    h3{
        color: white;
        margin-bottom: 5px;
    }
    @media screen and (min-width: 768px) {
        padding: 2rem;
    };
`
const HeroSection = styled.div`
        background-image: url(${heroImg});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        text-align: center;
        display: grid;
        min-height: 800px;
        width: 100%;
        place-items:center;
        color: white;
        h1{
            font-size: 31px;
            font-weight: 200;
        }
    `


const Categories = styled.div`
    display: grid;
    gap: 20px;
    margin-bottom: 30px;
        @media screen and (min-width: 768px) {
            grid-template-columns: 1fr 1fr 1fr;
        };
    `
const About = styled.div`
        color: white;
        display: grid;
        h3{
            text-align: center;
            margin-bottom: 5px;
            text-align: left;
        }
    `
    const ImageCont = styled.div`
    min-width: 30%;
    @media screen and (min-width: 768px) {
        width: 30%
    };
`
const AboutImg = styled.img`
        max-width: 500px;
        width: 100%;
        margin: auto;
    `
const AboutTextCont = styled.div`
        display: grid;
        width: 100%;
        grid-template-columns: auto;
        text-align: justify;
        @media screen and (min-width: 768px) {
            grid-template-columns: 50% 50%;
            gap: 10px;
        };
    `
const AboutText = styled.div`
    /* padding: 1rem; */
    line-height: 1.4;
    p{
        margin-top: 10px;
        margin-bottom: 0;
    }
`

const Homepage = ({state, actions}) => {
    // useEffect(()=>{
    //     actions.source.fetch("/painting_cat");
    // },[])

    // let paintCat = state.source.get('/painting_cat')
    // dataToShow = paintCat.map(item => {
    //     return state.source.painting[item.id]
    //   })
    // let paintCatArray  = []
    // for(const item in paintCat){
    //     paintCatArray.push(paintCat[item])
    //   }

    let paintCatArray = paint_cat_arr
    return <Container>
        <HeroSection>
            <h1>
                Unique art pieces for your interior
            </h1>
        </HeroSection>
        <ContainerMain>
            <h3>Categories</h3>
            <Categories>
                {
                    paint_cat_arr.map((painting => {
                        return <CatItem key={painting.id} item={painting} />
                    }))
                }
            </Categories>
            <About id="aboutSection" >
                <h3>About Us</h3>
                <AboutImg src={Kristina} />
                <AboutTextCont>
                    <AboutText>
                        <p>Hello! I am Kristina Shkurti, the artist behind ONIRO studio (“Dream studio “ from Greek) and all the handmade artworks since 2016,based in Tirana,Albania.</p>
                        <p>
                            Graduated in Architecture but art chose me as part of my heart and soul since I was a child. I did my first exhibition in 2017 with abstract acrylic paintings named “Gjendje Pragnore” .
                            For 6 years now I am a full time artist with hundred of artworks sold worldwide.
                        </p>
                    </AboutText>
                    <AboutText>
                        <p>
                            As an contemporary artist l experiment with different materials to create special effects to express my feelings and concerns through my art. Materials such as resin,3D art texture,acrylics , oil colors,spray ext. My art can be minimalist only by some black brush strokes but also colorful and daydreaming.
                        </p>
                        <p>
                            My inspiration come from my every day life,from our beautiful nature and interesting compositions and colors that  offers us.
                            As an observational person I am also inspired from people’s stories and portraits. Every time I try to bring the best quality and different original ideas in my creations.
                            Feel free to look around and let me know if you are interested in one of the available artworks or if I can create you one.
                        </p>
                    </AboutText>
                </AboutTextCont>
            </About>
        </ContainerMain>

    </Container>
}
export default connect(Homepage)
