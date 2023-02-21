import SearchBar from "./SearchBar"
import styled from "styled-components";
import { keyframes } from "styled-components";

const Headerdiv = styled.header `
background-color: rgb(38, 38, 38);
width: 100%;
  justify-content: flex-end;
  position: -webkit-sticky;
  position: sticky;
  width: 100%;
  z-index: 10;
  top:0;
  border-radius:10px;
  padding: 5px;
`
const typing = keyframes`from{width:0;}
to{width:100%;}`

const blinking = keyframes`
  from{border-color:transparent;}
  to{border-color:black;}
`

const Nombre = styled.h1 `
font-size:3rem;
overflow:hidden;
border-right:.15rem solid black;
white-space:nowrap;
animation:${typing} 1.5s steps(35,end) forwards, ${blinking} .75s infinite;
animation-duration: 7s;
justify-content: center;
`

const SearchNav = styled.div `
  display:flex;
  justify-content: end;
  padding-top:10px;
  padding-rigth: 10px;
  padding-bottom: 10px;
  background-color: grey;
  border-radius: 5px;
  width:100%;

  &:hover {
    border: 2px solid #39ff14; 
    box-shadow: 5px 5px 10px #39ff14;
    transition: 0.5s;
`

function Header(){
    return(
        <Headerdiv> 

        <SearchNav id="mostrar">
            <SearchBar 
            onSearch={(characterID) => window.alert(characterID)}/>
          
          </SearchNav>  
            <Nombre>Rick and Morty</Nombre>
      
        <nav className="claro">
        </nav>
      </Headerdiv>
    )
}

export default Header;