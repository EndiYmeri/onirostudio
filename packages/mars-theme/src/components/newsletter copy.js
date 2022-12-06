import { connect, styled } from "frontity";
import heroBlackish from "../assets/hero-blackish.jpg"

const Newsletter = ({state, setSubscribed, actions, libraries})=>{
    
    // if (typeof window !== 'undefined') {
    //     //here `window` is available

    //     window.location.pathname === "/subscribe" ? null : window.location.replace('/subscribe')
    //   }
    

    const Container = styled.div`
        width: 100%;
        height: 100vh;
        display: grid;
        place-items: center;
        color: white;
        ::before {
            z-index: -1;
            content: "";
            position: absolute;
            top: 0; left: 0;
            width: 100%; height: 100%;
            background-image: url(${heroBlackish});
            background-size: contain;
              filter: blur(8px);
        }
    .wpcf7-form{
        text-align: center;
    }  
    .wpcf7-form input {
            border: none;
            outline: none;
            padding: 10px;
            background-color: black;
            color: white;
        }
    .wpcf7-form .wpcf7-submit{
        background-color: #FF4D00 ;
        color: white;
        padding: 10px 20px;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        :hover{
            background-color: black;
            color: #FF4D00;
        }
    }    
    `

    const data = state.source.get('/subscribe');
    const contactForm = state.source.page[data.id]
    const Html2React = libraries.html2react.Component;
    console.log("Newsletter:", state, data)
    return  <Container>
        <Html2React html={contactForm.content.rendered} />
    </Container>
}

export default connect(Newsletter)