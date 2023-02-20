export default function SearchBar(props) {
   return (
      <div>
         <input type="search"></input>
         <button onClick={props.onSearch}></button>


         {/* <input type='search' />
      <button onClick={}>Agregar</button> */}
      </div>
   );
}
