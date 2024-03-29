import { useEffect } from "react";
import { connect, styled, Head } from "frontity";
import List from "./list";
import React from "react";
import Link from "./link";
/**
 * The Post component that Mars uses to render any kind of "post type", like
 * posts, pages, attachments, etc.
 *
 * It doesn't receive any prop but the Frontity store, which it receives from
 * {@link connect}. The current Frontity state is used to know which post type
 * should be rendered.
 *
 * @param props - The Frontity store (state, actions, and libraries).
 *
 * @example
 * ```js
 * <Switch>
 *   <Post when={data.isPostType} />
 * </Switch>
 * ```
 *
 * @returns The {@link Post} element rendered.
 */
const Post = ({ state, actions, libraries }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  // Get the data of the post.
  const post = state.source[data.type][data.id];
  const paintCat = state.source["painting_cat"][post.painting_cat[0]]
  // Get the data of the author.
  // const author = state.source.author[post.author];
  // Get a human readable date.
  // const date = new Date(post.date);

  // Get the html2react component.
  const Html2React = libraries.html2react.Component;
  /**
   * Once the post has loaded in the DOM, prefetch both the
   * home posts and the list component so if the user visits
   * the home page, everything is ready and it loads instantly.
   */
   let message = "Hello"
   if(data.isPostType){
      message = `Hello, I would like more information about this: https://onirostudio.com${state.router.link}`
    }
  useEffect(() => {
    actions.source.fetch("/");
    List.preload();
  }, [actions.source]);
  const media = state.source.attachment[post.featured_media];
  let same = post.acf.primary_image === media.source_url
  // Load the post, but only if the data is ready.
  return data.isReady ? (
    <>
     <Head>
        {/* <meta name="description" content={"this post"} /> */}
        <meta property="og:site_name" content={post.title.rendered}/>
        {/* <meta property="og:title" content={} /> */}
        {/* <meta property="og:description" content="Programa de fiestas" /> */}
        <meta property="og:image" itemprop="image" content={media.media_details.sizes.thumbnail.source_url }/>
        <meta property="og:type" content="website" />
        {/* <meta property="og:updated_time" content="1440432930" /> */}
      </Head>
    <Container>
      <ContainerMain>
      <RightSide>
        {/* <img src={media.source_url} /> */}
        {same ? <img src={post.acf.primary_image}/>: <img src={media.source_url} /> }
      </RightSide>
      <LeftSide>
        <div>
          <SubTitle color="#fc4523">
            <StyledLink link={paintCat.link}>
             {paintCat.name}
            </StyledLink>
          </SubTitle>
          <Title>{post.title.rendered}</Title>
          <InfoContainer>
            <SubTitle >{post.acf.dimensions}</SubTitle>

            {
              post.acf.has_offer?
              <>
                <SubTitle textDecoration="line-through" >{post.acf.price} Lek</SubTitle>
                <SubTitle color="#fc4523">{post.acf.price_offer} Lek</SubTitle>
              </>
              :
              <>
                <SubTitle>{post.acf.price} Lek</SubTitle>
              </>
            }
          </InfoContainer>
        </div>

        {/* Look at the settings to see if we should include the featured image */}
        {/* {state.theme.featured.showOnPost && (
          <FeaturedMedia id={post.featured_media} />
        )} */}

        {data.isAttachment ? (
          // If the post is an attachment, just render the description property,
          // which already contains the thumbnail.
          <div dangerouslySetInnerHTML={{ __html: post.description.rendered }} />
        ) : (
          // Render the content using the Html2React component so the HTML is
          // processed by the processors we included in the
          // libraries.html2react.processors array.
          <Content>
            {/* <Html2React html={post.content.rendered} /> */}
          </Content>
        )}
        {/* <ActionButtonsContainer>
          <ActionButton>DM</ActionButton>
          <ActionButton><ReactWhatsapp number="+355697329797" message={message} element="span">WHATSAPP</ReactWhatsapp></ActionButton>
        </ActionButtonsContainer> */}
      </LeftSide>
      </ContainerMain>
      <OtherImagesCont>
        { !same? <Image src={post.acf.primary_image} /> : null}
        <Image src={post.acf.secondary_image} />
        {post?.acf?.extra_image ? <Image src={post?.acf?.extra_image} /> : null}
      </OtherImagesCont>
    </Container>
    </>
  ) : null;
  
};

export default connect(Post);

const StyledLink = styled(Link)`
  /* width: 45%; */
`

const Container = styled.div`
  padding: 1rem;
  @media screen and (min-width: 768px) {
    padding: 1rem 2rem;
  };

`;
const ContainerMain = styled.div`
  width: 100%;
  margin: 0;
  background-color: #050609;
  display: grid;
  grid-template-columns: auto;
  gap: 20px;
  place-content: center;
  @media screen and (min-width: 768px) {
    grid-template-columns: 60% 40%;
    align-items: center;
    justify-content: left;
  };
`

const RightSide = styled.div`
  img{
    width: 100%;
  }

  @media (min-width:767px){
    width: 80%;
}
`
const LeftSide = styled.div`
  max-width: 400px;
`
const ActionButton = styled.button`
  background-color: #fc4523;
  color: #FFFFFF;
  /* border-radius: 50px; */
  font-size: 18px;
  text-align: center;
  text-transform: uppercase;
  width: 135px;
  border: none;
  padding: 0.5rem 0;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
  box-sizing: border-box;
  border: 1px solid transparent;
  :hover{
      color: #121A1C;
      font-weight: 900;
      background-color: transparent;
      color: #fc4523;
      border:1px solid #fc4523 ;
  }
 
`

const Image = styled.img`
  width: 100%;
  @media (min-width:767px){
    width: 25%;
}
`

const ActionButtonsContainer = styled.div`
  margin-top: 5rem;
  display: grid;
  gap: 25px;
  grid-auto-flow: column;
  justify-content: start;
`

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.h1`
  margin: 0;
  margin-top: 15px;
  margin-bottom: 3px;
  color: #fff;
  text-align: left;
`;

const SubTitle = styled.h3`
  margin: 0;
  margin-top: 10px;
  // margin-bottom: 8px;
  color: ${props => props.color || "white" };
  font-size: 15px;
  text-decoration-thickness: 2px;
  text-decoration: ${props => props.textDecoration || "none" };
`;

const OtherImagesCont = styled.div`
margin-top:20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (min-width:767px){
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`

/**
 * This component is the parent of the `content.rendered` HTML. We can use nested
 * selectors to style that HTML.
 */
const Content = styled.div`
  color: rgba(12, 17, 43, 0.8);
  word-break: break-word;

  * {
    max-width: 100%;
  }

  p {
    line-height: 28.2px;
    font-weight: 100;
    font-size: 28px;
  }

  img {
    width: 100%;
    object-fit: cover;
    object-position: center;
  }

  figure {
    margin: 24px auto;
    width: 100%;

    figcaption {
      font-size: 0.7em;
    }
  }

  iframe {
    display: block;
    margin: auto;
  }

  blockquote {
    margin: 16px 0;
    background-color: rgba(0, 0, 0, 0.1);
    border-left: 4px solid rgba(12, 17, 43);
    padding: 4px 16px;
  }

  a {
    color: rgb(31, 56, 197);
    text-decoration: underline;
  }

  /* Input fields styles */

  input[type="text"],
  input[type="email"],
  input[type="url"],
  input[type="tel"],
  input[type="number"],
  input[type="date"],
  textarea,
  select {
    display: block;
    padding: 6px 12px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 4px;
    outline-color: transparent;
    transition: outline-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    margin: 8px 0 4px 0;

    &:focus {
      outline-color: #1f38c5;
    }
  }

  input[type="submit"] {
    display: inline-block;
    margin-bottom: 0;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid #1f38c5;
    padding: 12px 36px;
    font-size: 14px;
    line-height: 1.42857143;
    border-radius: 4px;
    color: #fff;
    background-color: #1f38c5;
  }

  /* WordPress Core Align Classes */

  @media (min-width: 420px) {
    img.aligncenter,
    img.alignleft,
    img.alignright {
      width: auto;
    }

    .aligncenter {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }

    .alignright {
      float: right;
      margin-left: 24px;
    }

    .alignleft {
      float: left;
      margin-right: 24px;
    }
  }
`;
