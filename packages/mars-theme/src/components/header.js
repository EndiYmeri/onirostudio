import { connect, styled } from "frontity";
import Link from "./link";
import MobileMenu from "./menu";
import logo from "../assets/logo.svg"

const Header = ({ state }) => {
  console.log("Header state:", state.source)
  let pageTitle 

  if(state.source.painting_cat){
    // pageTitle = state.source.painting_cat["3"].name
  }
  return (
    <>
      <Container>
        <StyledLink link="/">
          <Logo src={logo} />
        </StyledLink>
        <TitleCont>
          <Title>{pageTitle}</Title>
          </TitleCont>
        {/* <MobileMenu /> */}
        <HeaderDesc></HeaderDesc>
      </Container>
      {/* <Nav /> */}


    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-content: center;
  flex-direction: row;
  background-color: black;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  width: 45%;
  padding: 2rem;
`

const Logo = styled.img`
  height: 40px;
  @media screen and (min-width: 768px) {
            height: 60px;
        };
`
const HeaderDesc = styled.p`
  font-size: 24px;
  color: black;
`

const TitleCont = styled.div`
  width: 55%;
  display: flex;
  justify-content: start;
  align-items: center;
`

const Title = styled.h1`
font-size: 24px;
  color: #FF4D00;
`
