import { connect, styled } from "frontity";
import ReactWhatsapp from "react-whatsapp";
import backButtonImg from "../assets/chevron-left.svg"


const FooterButtons = ({ state, actions }) => {
  const data = state.source.get(state.router.link)
  let message = "Hello"
  if(data.isPostType){
     message = `Hello, I would like more information about this: https://onirostudio.com${state.router.link}`
   }
   const goBack = () =>{
    if(data.isPostType){
      // actions.router.set()
      actions.router.set(state.router.previous)
    }
    if(data.isPaintingArchive || data.isPaintingCat){
      actions.router.set('/')
    }
   }
  return (
    <>

      <Container>
        {
        data.isHome
          ? null
          : <BackButton onClick={goBack}>
              <img src={backButtonImg} alt="Back button"/>
            </BackButton>
        }
        <ContactButtonContainer>
          <Button><a href="https://www.instagram.com/oniro.studio" target={"_blank"}>DM</a></Button>
          <Button><ReactWhatsapp number="+355697329797" message={message} element="span">WhatsApp</ReactWhatsapp></Button>
        </ContactButtonContainer>
      </Container>
      {/* <Nav /> */}


    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(FooterButtons);

const Container = styled.div`
  position: fixed;
  z-index: 10;
  bottom: 1rem;
  /* right: 1rem; */
  padding:1rem;
  box-sizing: border-box;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  gap: .5rem;
  pointer-events: none;
  @media screen and (min-width: 768px) {
    /* left: 2rem; */
    /* bottom: 2rem; */
    /* right: unset; */
    padding: 0 2rem
};
`;

const ContactButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-left: auto;

`
const BackButton = styled.button`
  /* width: 7rem; */
  /* height: 1.5rem; */
  background-color: transparent;
  cursor: pointer;
  display: flex;
  height: auto;
  border : 0;
  color: #FFFFFF;
  padding: 0;
  cursor: pointer;
  pointer-events: all;
  img{
    width: 40px;
  }
`
const Button = styled.button`
 
  width: 5.5rem;
  /* height: 1.5rem; */
  background-color: #fc4523;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border : 0;
  color: #FFFFFF;
  font-size: 14px;
  text-align: center;
  /* text-transform: uppercase; */
  padding: 0.5rem 0;
  cursor: pointer;
  pointer-events: all;
  border-radius: 50px;
  font-weight: bold;
  margin-left: auto;
`
