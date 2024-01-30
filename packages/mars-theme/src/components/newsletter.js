import { connect, styled } from "frontity";
import { useEffect } from "react"
import heroBlackish from "../assets/hero-blackish.jpg"

const Newsletter = ({state, closeModal, actions, libraries})=>{
    
    if (typeof window !== 'undefined') {
        //here `window` is available

        if(state.cf7.forms["4"].status === "sent"){
            window.localStorage.setItem("subscribed", true)
        }
      }

    const Container = styled.div`
        position: relative;
        display: grid;
        place-items: center;
        color: white;
        background-color: #fc4523;
        padding: 4rem;
        @media screen and (max-width: 768px) {
            padding: 2rem 0;
        };
        /* ::before { */
            /* z-index: -1; */
            /* content: ""; */
            /* position: absolute; */
            /* top: 0; left: 0; */
            /* width: 100%; height: 100%; */
            /* background-image: url(${heroBlackish}); */
            /* background-size: contain; */
              /* filter: blur(8px); */
        /* } */
    .wpcf7-form{
        text-align: center;
    }  
    .wpcf7-form input {
            border: none;
            outline: none;
            padding: 10px;
            background-color: white;
            color: black;
            font-size: 18px;
            margin-bottom: 5px;
        }
    .wpcf7-form .wpcf7-submit{
        background-color: black ;
        color: white;
        font-size: 20px;
        font-weight: bold;
        line-height: 1;
        padding: 10px 20px;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        :hover{
            background-color: white;
            color: #fc4523;
        }
    }
    .success-message{
        border: 2px solid black;
    }
    `
    const CloseButton = styled.div`
    padding: 1px;
        position: absolute;
        right: 20px;
        top: 20px;
        cursor: pointer;
        :hover{
            transform: scale(1.1);
        }
        .line{
            width: 20px;
            height: 3px;
            background-color: white;
        };
        .first{
            transform: rotate(45deg);
            margin-bottom: -3px;
        }
        .second{
            transform: rotate(-45deg);
        }
            
`   
    const data = state.source.get('/subscribe/');
    const contactForm = state.source.page[data.id]
    const Html2React = libraries.html2react.Component;
    // if(state.cf7.forms["4"]?.status === "sent"){
    //     localStorage.setItem('subscribed', true)
    //     setSubscribed(true)
    //     actions.router.set("/");
    // }
    return  <Container>
            <CloseButton
                onClick={()=>{
                    closeModal()
                }}
            >
                 <div className="line first"></div>
                 <div className="line second"></div>
            </CloseButton>
        {
            contactForm? 
                <Html2React html={contactForm.content.rendered} />
                :null
            }
    </Container>
}

export default connect(Newsletter)