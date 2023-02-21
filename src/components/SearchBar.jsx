import styled from "styled-components";

const Searchdiv = styled.div `
  padding: 10px;
`

const Searchinput = styled.input `
  width: 100%;
  padding: 5px;
  border-radius:5px;
  box-shadow: 5px 5px 10px black;
  margin: 3px;

  &:hover {
   border: 2px solid #39ff14; 
   box-shadow: 3px 3px 5px #39ff14;
   transition: 0.5s;
  
`
const Searchbutton = styled.button`
  padding: 5px;
  color:white;
  border-radius:5px;
  box-shadow: 5px 5px 10px black;
  margin: 2px;
  background-color: rgb(38, 38, 38);

  &:hover{
   background-color: #39ff14;
   color:black;
   transition:0.5s;
  }

`
export default function SearchBar(props) {
   return (
      <Searchdiv>
         <Searchinput type="search" value={"Buscar"}></Searchinput>
         <Searchbutton onClick={props.onSearch}>Aceptar</Searchbutton>
      </Searchdiv>
   );
}
