import { connect, styled, decode } from "frontity";
import {useState, useEffect} from "react"
import Item from "./list-item";
import Pagination from "./pagination";

const Container = styled.section`
  margin: 0;
  list-style: none;
  background-color: #000000;
  display: grid;
  grid-template-columns: repeat(3, minmax(300px, 1fr));
  justify-content: center;
  border-top: 1px solid black;

  @media screen and (max-width: 768px) {
   grid-template-columns: auto;
  };
`;

const Header = styled.h3`
  font-weight: 300;
  /* text-transform: capitalize; */
  color: #fff;
`;

const CatList = ({ state }) => {
    // Get the data of the current list.
    const data = state.source.get(state.router.link);
    let dataToShowArray = []
    let dataReceived = {}
    dataToShowArray = []
    dataReceived = {}
    dataReceived = state.source.painting
    for(const item in dataReceived){
    dataToShowArray.push(dataReceived[item])
    }
 // let categories = Object.values(categoriesObject)
 // categories.sort(name => categories.name)
 
  return (
    <Container>
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
       dataToShowArray?.map((painting => {
            return <Item key={painting.id} item={painting}/>
        }))
      }
      {/* <Pagination /> */}
    </Container>
  )
};




export default connect(CatList);


