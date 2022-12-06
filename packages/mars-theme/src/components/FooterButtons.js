import { connect, styled } from "frontity";
import ReactWhatsapp from "react-whatsapp";

const FooterButtons = ({ state }) => {

  return (
    <>
      <Container>
        <Button><a href="https://www.instagram.com/oniro.studio" target={"_blank"}>DM</a></Button>
        <Button><ReactWhatsapp number="+355672418595" message="Hello" element="span">WHATSAPP</ReactWhatsapp></Button>
      </Container>
      {/* <Nav /> */}


    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(FooterButtons);

const Container = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: row;
  gap: .5rem
`;

const Button = styled.button`
  width: 5rem;
  height: 1.5rem;
  background-color: #FF4D00;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border : 0;
  font-weight: bold;
`
