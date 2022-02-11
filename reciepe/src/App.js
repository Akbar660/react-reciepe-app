import styled from "styled-components"

import {Header,
  APPNameComponent,
  AppIcon,
  SearchComponent,
  SearchIcon,
  SearchInput} from "./components/headercomponent"

const Container=styled.div`
  display: flex;
  flex-direction:column;
`
const ReciepeListContainer = styled.div`
display: flex;
flex-direction: row;
gap:20px;
flex-wrap: wrap;
padding: 30px;
justify-content: space-evenly;
`

const ReciepeCotainer=styled.div`
width: 300px;
display: flex;
flex-direction: column;
padding: 10px;
box-shadow: 0 3px 10px 0 #aaa;

`
const CoverImage=styled.img`
height: 200px;
`
const ReciepeName=styled.span`
 font-size: 18px;
 font-weight: bold;
 color: black;
 margin: 10px;
`
const Ingrediants=styled.span`
 font-size: 18px;
 font-weight: bold;
border: 1px solid green;
text-align: center;
padding: 8px 13px ;
cursor: pointer;
margin-bottom: 10px;
border-radius: 4px;
color: green;
`
const SeeMoreText=styled(Ingrediants)`
color: red;
border: 1px solid red;
`

function App() {
  return (
 
      <Container>
        <Header>

          <APPNameComponent>
            <AppIcon src="/burger.svg"/>
            Reciepe Finder
          </APPNameComponent>

          <SearchComponent>
            <SearchIcon src="/search-icon.svg"/>
            <SearchInput placeholder="Search Reciepe"/>
          </SearchComponent>

        </Header>

        <ReciepeListContainer>
          <ReciepeCotainer>
            <CoverImage src="/burger.svg"/>
            <ReciepeName>Mutton Palav</ReciepeName>
            <Ingrediants>Ingrediants</Ingrediants>
            <SeeMoreText>See Complete Recepie</SeeMoreText>
            </ReciepeCotainer>
            <ReciepeCotainer>
            <CoverImage src="/burger.svg"/>
            <ReciepeName>Mutton Palav</ReciepeName>
            <Ingrediants>Ingrediants</Ingrediants>
            <SeeMoreText>See Complete Recepie</SeeMoreText>
            </ReciepeCotainer>
            <ReciepeCotainer>
            <CoverImage src="/burger.svg"/>
            <ReciepeName>Mutton Palav</ReciepeName>
            <Ingrediants>Ingrediants</Ingrediants>
            <SeeMoreText>See Complete Recepie</SeeMoreText>
            </ReciepeCotainer>
            <ReciepeCotainer>
            <CoverImage src="/burger.svg"/>
            <ReciepeName>Mutton Palav</ReciepeName>
            <Ingrediants>Ingrediants</Ingrediants>
            <SeeMoreText>See Complete Recepie</SeeMoreText>
            </ReciepeCotainer>
           
        </ReciepeListContainer>
      </Container>
  
  );
}

export default App;
