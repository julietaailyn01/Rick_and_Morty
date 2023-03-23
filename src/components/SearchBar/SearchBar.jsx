import { useState } from "react";
import styles from "../SearchBar/SearchBar.module.css"
import 'boxicons';


export default function SearchBar({onSearch}) {
   const[character,setCharacter]=useState("")

   const HandleChange = (event )=>{
      setCharacter(event.target.value)
   }
   
   return (
      <div className={styles.body}>
         
         <input type='search' value={character} onChange={HandleChange} placeholder="Search for ID" className={styles.input} />
         <button onClick={()=>onSearch(character)}className={styles.btn}> Add</button>
         
      </div>
   );
}