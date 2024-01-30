import { connect, styled } from "frontity";
import Link from "../link";

/**
 * Item Component
 *
 * It renders the preview of a blog post. Each blog post contains
 * - Title: clickable title of the post
 * - Author: name of author and published date
 * - FeaturedMedia: the featured image/video of the post
 */
const CatItem = ({ state, item }) => {

  const media= state.source.attachment[item.featured_media];
  return (
      <ArticleComp>
        <StyledLink link={item.link} >
            <CatListItem  image={item.acf.category_image || media?.source_url}>
              <div>
                <h1>{item.name || item.title.rendered}</h1>
                {
                  item.count > 0 ? 
                  <p>{item.count} Paintings</p>
                  : null
                }
              </div>
            </CatListItem>
            {/* <ImgComp src={item.acf.category_image || media?.source_url} /> */}
        </StyledLink>
      </ArticleComp>
  );
};

// Connect the Item to gain access to `state` as a prop
export default connect(CatItem);
  
  const CatListItem  = styled.div`
    background-image: ${props => `url(${props.image})`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: grid;
    place-items: center;
    width: 100%;
    aspect-ratio: 1;
    div{
      /* backdrop-filter: blur(1px); */
      /* padding: 1rem; */
      /* background: rgba(0, 0, 0, 0.2) */
    }
    h1{
      margin-top:0px;
      text-shadow: 0px 0px 20px black;
      margin-bottom:5px;
    }
    p{
      color: #fc4523;
      margin-top:5px;
      text-shadow: 0px 0px 20px black;
      font-weight:bold;
      margin-bottom: 0;
    }
`
  const ArticleComp = styled.article`
    text-align: center;
    /* use instead of border */
    color: #fff;
    border-bottom: 1px solid black;
    :nth-of-type(3n-1){
      border-left: 1px solid black;
      border-right: 1px solid black;
    }
  `
  const StyledLink = styled(Link)`
    cursor: pointer;
  `;

  const ImgComp = styled.img`
  max-width: 100%;
  `

