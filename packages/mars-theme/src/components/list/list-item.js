import { connect, styled } from "frontity";
import Link from "../link";
import logoCircle from "../../assets/logo-circle.png"
/**
 * Item Component
 *
 * It renders the preview of a blog post. Each blog post contains
 * - Title: clickable title of the post
 * - Author: name of author and published date
 * - FeaturedMedia: the featured image/video of the post
 */
const Item = ({ state, item }) => {
  const media= state.source.attachment[item.featured_media];
  return (
      <ArticleComp>
        <StyledLink link={item.link} >
            <h1>{item.name || item.title.rendered} 
              <span> 
                Learn more
               
              </span>
            </h1>
           {/* {
             item.acf.has_offer?
              <ImgCompOffer>
                <img  src={item.acf.category_image || media?.source_url} />
              </ImgCompOffer>
             :  */}
             <ImgComp src={item.acf.category_image || media?.source_url} />
            {/* } */}
        </StyledLink>
      </ArticleComp>
  );
};

// Connect the Item to gain access to `state` as a prop
export default connect(Item);

  const ArticleComp = styled.article`
    display: inline-block;
    position: relative;
    img {
      width: 100%;
      /* border-radius: 5px; */
    }
    padding: 20px 20px;
    text-align: center;
    /* position:relative; */
    /* use instead of border */
    color: #fff;
  `

  const ProductOnOffer = styled.div`
    /* background-color: black; */
    background-image: url(${logoCircle});
    background-size: contain;
    position: absolute;
    color: white;
    border-radius: 50%;
    display: inline;
    /* padding: 5px 15px; */
    /* position: absolute; */
    /* aspect-ratio: 1; */
    display: grid;
    place-content: center;
    top: 30px;
    right: 10px;
    aspect-ratio: 1;
    width: 50px;
    font-size: 18px;
    letter-spacing: 1px;
  `
  const StyledLink = styled(Link)`
    position: relative;
    cursor: pointer;
    &:hover{
        color: #fc4523 !important;
    }

    h1{
      display: grid;
      align-items: baseline;
      grid-template-columns: auto 1fr;
      gap: 5px;
      margin-top: 0px;
      span{
        font-size: 14px;
        color: #fc4523;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
  `;

  const ImgComp = styled.img`
  max-width: 100%;
  `
  const ImgCompOffer= styled.div`
  img{
    max-width: 100%;
  }
  position: relative;
  ::after{
    z-index: 1;
    content: "Sale";
    background-image: url(${logoCircle});
    background-size: 93%;
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    color: white;
    border-radius: 50%;
    display: inline;
    /* padding: 5px 15px; */
    /* position: absolute; */
    /* aspect-ratio: 1; */
    display: grid;
    place-content: center;
    top: 3px;
    right: 3px;
    aspect-ratio: 1;
    width: 60px;
    font-size: 17px;
    letter-spacing: 0.5px;
  }

  `

