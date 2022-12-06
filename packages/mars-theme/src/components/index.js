import { useState } from "react";
import { Global, css, connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Header from "./header";
import List from "./list";
import Post from "./post";
import Loading from "./loading";
import Title from "./title";
import PageError from "./page-error";
import Newsletter from "./newsletter";
import { HomePage } from "./HomePage/Homepage";
import { Footer } from "./footer";
import MerchantThin from "../assets/Merchant-Thin.woff"
import BagindaScript from "../assets/BagindaScript.woff"
import FooterButtons from "./FooterButtons";

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 *
 * @param props - The props injected by Frontity's {@link connect} HOC.
 *
 * @returns The top-level react component representing the theme.
 */
const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  const paint_cat = state.source.painting_cat
  console.log({ paint_cat });

  const [subscribed, setSubscribed] = useState(true)

  console.log({ "Index": data, state }, subscribed)
  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
      </Head>

      {/* Add some global styles for the whole site, like body or a's. 
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={globalStyles} />
      {
        subscribed ?
          <>
            {/* Add the header of the site. */}
            <HeadContainer>
              <Switch>
                <Header />
              </Switch>
            </HeadContainer>
            {/* Add the main section. It renders a different component depending
          on the type of URL we are in. */}
            <Main>
              <Switch>
                <HomePage when={data.isHome} />
                {/* <PaintingsCategories when={data.isPaintingArchive} /> */}
                <List when={data.isPaintingCat || data.isPaintingArchive} />
                <Post when={data.isPainting} />
                <Loading when={data.isFetching} />
                <PageError when={data.isError} />
              </Switch>
            </Main>
            <Footer />
            <FooterButtons />
          </>
          : <Newsletter setSubscribed={setSubscribed} />
      }

    </>
  );
};

export default connect(Theme);

const globalStyles = css`
  
  @font-face {
    font-family: 'Merchant Thin';
    font-style: normal;
    font-weight: normal;
    src: url(${MerchantThin}) format('woff');
    }

  @font-face {
    font-family: 'BagindaScript';
    font-style: normal;
    font-weight: normal;
    src: url(${BagindaScript}) format('woff');
    }

    *{
      box-sizing: border-box;
    }
  body {
    margin: 0;
    font-family: "Merchant Thin";
    background-color: #000000;
  }
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
    font-family: "Merchant Thin";
  }
  button{
    font-family: "Merchant Thin";
  }
  input{
    font-family: "Merchant Thin";
    font-weight: 500;
  }
`;

const HeadContainer = styled.div`
  background-color: transparent;
  position: fixed;
  width: 100%;
`;

const Main = styled.div`
  padding-top:120px;
  /* background-image: linear-gradient(
    180deg,
    rgba(66, 174, 228, 0.1),
    rgba(66, 174, 228, 0)
  ); */
`;
