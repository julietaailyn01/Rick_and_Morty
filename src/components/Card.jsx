import styled from "styled-components";

const DivCards = styled.div `
  padding: 3em;
  border: solid 1px black;
  border-radius:10px;
  margin: 5px;
  box-shadow:3px 3px 5px black;
  display:inline-block;
  background-color: rgb(38, 38, 38);

  &:hover {
   border: 2px solid #39ff14; 
   box-shadow: 5px 5px 10px #39ff14;
   transition: 0.75s;
 }
   
   `;

   const Button = styled.button `
     width: fit-content;
     padding: 1em;
     justify-content: center;
     background-color: red;
     border-radius: 5px;
     border: none;
     color:white;

     &:hover {
      box-shadow: 5px 5px 10px black;
      transition: 0.3s;
      padding: 1.2em;

   `

   


export default function Card(props) {
   return (
      <DivCards>
         <Button onClick={()=>{alert("aun no se que hacer")}}>X</Button>
         <h2>Name: {props.name}</h2>
         <h2>Specie: {props.species}</h2>
         <h2>Gender: {props.gender}</h2>
         <div>
         <img src={props.image} height="250px" alt="rick and morty's character"></img>
         </div>

      </DivCards>
   );
}
