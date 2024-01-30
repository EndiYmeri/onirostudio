import { connect, styled, decode } from "frontity";
import {useState, useEffect} from "react"
import Item from "./list-item";
import Pagination from "./pagination";

const PageTitle = styled.div`
  text-align: center;
  /* font-size: 2rem; */
  color: white;
  height: 60vh;
  display: grid;
  place-content: center;
  font-size: x-large;
`


const Container = styled.section`

  /* margin: 0;
  list-style: none;
  background-color: #050609;
  display: grid;
  grid-template-columns: repeat(3, minmax(300px, 1fr));
  grid-template-rows: masonry;
  justify-content: center;
  border-top: 1px solid black;

  @media screen and (max-width: 768px) {
   grid-template-columns: auto;
  }; */
  columns: ${props => `${props.colums}`};
  column-gap: 16px;
  @media (max-width: 992px) {
    columns: 2;
  }
  @media (max-width: 768px) {columns: 1;}
  /* .grid {
    display: inline-block;
    margin-bottom: 16px;
    position: relative; */
    /* &:before {
      border-radius: 5px;
      content:'';
      position:absolute;
      top:0;
      right:0;
      bottom:0;
      left:0;
      background-color:rgba(0,0,0,.2);
    } */
    /* img {
      width: 100%;
      border-radius: 5px;
    }
  } */

`;

const Header = styled.h3`
  font-weight: 300;
  /* text-transform: capitalize; */
  color: #fff;
`;

const List = ({ state }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);
    let dataToShow
    let dataToShowArray = []
    let dataReceived = {}

   if(data.isPaintingCat){
      dataReceived = data.items
      dataToShow = dataReceived.map(item => {
        return state.source.painting[item.id]
      })
      for(const item in dataToShow){
        dataToShowArray.push(dataToShow[item])
      }
    }else if(data.isPaintingArchive){
      dataReceived = data.items
      dataToShow = dataReceived.map(item => {
        return state.source.painting[item.id]
      })
      for(const item in dataToShow){
        dataToShowArray.push(dataToShow[item])
      }
    }
 // let categories = Object.values(categoriesObject)
 // categories.sort(name => categories.name)
 
  return (
    <>
      {dataToShowArray.length === 0? 
        <PageTitle>
          <h1> Coming Soon </h1> 
          <h2> Check back later </h2>
        </PageTitle> : null
      }
    <Container colums={dataToShowArray.length <= 4 ?  '2' : dataToShowArray.length <= 6 ? '3' : '4'} >
      {/* If the list is a taxonomy, we render a title. */} 
      
      {/* {data.isTaxonomy && (
        <Header>
          {data.taxonomy}:{" "}
          <b>{decode(state.source[data.taxonomy][data.id].name)}</b>
        </Header>
      )}
      
      {/* If the list is for a specific author, we render a title. */}
    
      {/* Iterate over the items of the list. */}
      { 
        dataToShowArray.map((painting => {
            return <Item key={painting.id} item={painting}/>
        }))
      }
    </Container>
    <Pagination />
    </>

  )
};

export default connect(List);