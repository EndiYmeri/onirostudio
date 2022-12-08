import { connect, styled } from "frontity";
import ReactWhatsapp from "react-whatsapp";

const FooterButtons = ({ state }) => {
  const data = state.source.get(state.router.link)
  let message = "Hello"
  if(data.isPostType){
     message = `Hello, I would like more information about this: https://onirostudio.com${state.router.link}`
   }
  return (
    <>
      <Container>
        <Button><a href="https://www.instagram.com/oniro.studio" target={"_blank"}>DM</a></Button>
        <Button><ReactWhatsapp number="+355672418595" message={message} element="span">WHATSAPP</ReactWhatsapp></Button>
      </Container>
      {/* <Nav /> */}


    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(FooterButtons);

const Container = styled.div`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  box-sizing: border-box;
  display: flex;
  align-content: center;
  flex-direction: column;
  gap: .5rem;
  @media screen and (min-width: 768px) {
    left: 2rem;
    bottom: 2rem;
    right: unset;
};
`;

const Button = styled.button`
  width: 7rem;
  /* height: 1.5rem; */
  background-color: #FF4D00;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border : 0;
  color: #FFFFFF;
  font-size: 18px;
  text-align: center;
  text-transform: uppercase;
  padding: 0.5rem 0;
  cursor: pointer;
  border-radius: 50px;
  font-weight: bold;
  margin-left: auto;
`
