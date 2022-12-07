import { connect, styled, decode } from "frontity";
import {useEffect, useState} from "react"
import Link from "./link";
import MobileMenu from "./menu";
import logo from "../assets/logo.svg"

const Header = ({ state }) => {

  const data = state.source.get(state.router.link);
  let title = ""
  // Set the default title.
  if (data.isTaxonomy) {
    // Add titles to taxonomies, like "Category: Nature - Blog Name" or "Tag: Japan - Blog Name".
    // 1. Get the taxonomy entity from the state to get its taxonomy term and name.
    const { taxonomy, name } = state.source[data.taxonomy][data.id];
    // 3. Render the proper title.
    title = `${decode(name)}`;
  }
  else if(data.isPostType){
    const post = state.source[data.type][data.id]
    title = post.title.rendered
  }

  return (
    <>
      <Container>
        <StyledLink link="/">
          <Logo src={logo} />
        </StyledLink>
        <TitleCont>
          <Title>{title}</Title>
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
  background-color: #050609;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  /* width: 45%; */
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
  /* width: 55%; */
  display: flex;
  /* justify-content: start; */
  align-items: center;
  margin-left: auto;
  padding-right: 2rem;
  
`

const Title = styled.h1`
  font-size: 16px;
  /* color: #FF4D00; */
  color: white;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  };
`
