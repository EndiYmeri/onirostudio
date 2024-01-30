import { useState, useEffect } from "react";
import { Global, css, connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Header from "./header";
import List from "./list";
import Post from "./post";
import Loading from "./loading";
import Title from "./title";
import PageError from "./page-error";
import Newsletter from "./newsletter";
import HomePage from "./Homepage";
import Footer from "./footer";
import MerchantThin from "../assets/Merchant-Thin.woff"
import BagindaScript from "../assets/BagindaScript.woff"
import FooterButtons from "./FooterButtons";
import CatList from "./list/cat-list";
import appleTouchIcon from "../assets/favicon/apple-touch-icon.png"
import favicon32 from "../assets/favicon/favicon-32x32.png"
import favicon16 from "../assets/favicon/favicon-16x16.png"
// import manifest from "../assets/favicon/site.webmanifest"
/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 *
 * @param props - The props injected by Frontity's {@link connect} HOC.
 *
 * @returns The top-level react component representing the theme.
 */
const Theme = ({ state, actions }) => {
  // Get information about the current URL.
  let data = state.source.get(state.router.link);
  const paint_cat = state.source.painting_cat
  const [subscribed, setSubscribed] = useState(false)
  const [showPopUpModal, setShowPopUpModal] = useState(false)
  // actions.source.fetch("/subscribe");

  useEffect(()=>{
    setTimeout(()=>{
      setShowPopUpModal(true)
    }, 1000)
  },[])
  useEffect(() => {
  if (typeof window !== 'undefined') {
    if(window.localStorage.getItem('subscribed')){
      setSubscribed(true)
      setShowPopUpModal(false)
    } else{
      setSubscribed(false)
      setShowPopUpModal(showPopUpModal? true : false)
    }
  }
}, [subscribed, showPopUpModal]);

  const closePopUpModal = () =>{
    console.log(showPopUpModal, subscribed)
    setShowPopUpModal(false)
    
  }

  // if(subscribed){
  //   if(state.router.link === "/subscribe/"){
  //     actions.router.set("/");
  //     state.source.get(state.router.link);
  //   }
  // }else{
  //   if(!subscribed){
  //     actions.router.set("/subscribe/");
  //     state.source.get('/subscribe/');

  //   }
  // }

  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
        <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon}/>
        <link rel="icon" type="image/png" sizes="32x32" href={favicon32}/>
        <link rel="icon" type="image/png" sizes="16x16" href={favicon16}/>
      
        {/* <link rel="manifest" href={manifest} /> */}
      </Head>
     {/* Google tag (gtag.js) */}
      {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-8N5MKQWVRZ"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments)}
        gtag('js', new Date());

        gtag('config', 'G-8N5MKQWVRZ');
      </script> */}
      
      {/* Add some global styles for the whole site, like body or a's. 
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={globalStyles} />
      {
        // subscribed ?
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
              {
              showPopUpModal && <PopUpContainer>
                <Newsletter closeModal={closePopUpModal} />
              </PopUpContainer>

              }
              <Switch>
                {/* <Newsletter  setSubscribed={setSubscribed} when={!subscribed}  /> */}
                <HomePage when={data.isHome} />
                {/* <PaintingsCategories when={data.isPaintingArchive} /> */}
                {/* <CatList when={} /> */}
                <List when={data.isPaintingArchive || data.isPaintingCat} />
                <Post when={data.isPainting} />
                <Loading when={data.isFetching} />
                <PageError when={data.isError} />
              </Switch>
             
            </Main>
            <Footer />
            <FooterButtons />
          </>
          // : <Newsletter setSubscribed={setSubscribed} />
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
    background-color: #050609;
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
  z-index: 10;
`;

const PopUpContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  display: grid;
  place-content: center;
  z-index: 200;
  background-color: transparent;
`

const Main = styled.div`
  padding-top:86px;
  @media (min-width:767px){
    padding-top: 100px;
  }
  /* background-image: linear-gradient(
    180deg,
    rgba(66, 174, 228, 0.1),
    rgba(66, 174, 228, 0)
  ); */
`;
