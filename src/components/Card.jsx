export default function Card(props) {
   return (
      <div>
         <button onClick={()=>{alert("aun no se que hacer")}}>X</button>
         <h2>{props.name}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <img src={props.image} height="250px"></img>


         {/* <button onClick={}>X</button>
         <h2></h2>
         <h2></h2>
         <h2></h2>
         <img  src={} alt="" /> */}
      </div>
   );
}
