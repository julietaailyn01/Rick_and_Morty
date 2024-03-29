import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import { addFavorite,deleteFavorite } from "../../redux/actions";
import { useState} from "react";
import { connect, useDispatch, } from "react-redux";
import { useEffect } from "react";

export  function Card(props) {
   const dispatch = useDispatch();
   const [isFav,setIsFav] = useState(false);

   useEffect(() => {
      (props.myFavorites)?.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [props.myFavorites]);

   const handleFavorite= ()=>{
      if(isFav){
         setIsFav(false);
         dispatch(deleteFavorite(props.id));
      }
      if(!isFav){
         setIsFav(true);
         dispatch(addFavorite(props));
      }
   }

   return (
      <div className={styles.card}>
         <div>
         <div>
         {
            isFav ? (
               <button  onClick={handleFavorite} className={styles.favorite}>❤️</button>
            ) : (
               <button  onClick={handleFavorite} className={styles.favorite}>🤍</button>
            )
         }
         <button className={styles.button} onClick={props.onClose}>Close</button>
         </div>
         <img src={props.image} alt="img" className={styles.img}/>
         <div >
            <Link to={`/detail/${props.id}`} className={styles.nameDecorate}>
               <h2 className={styles.name}>{props.name}</h2>
            </Link>
            <div className="">
               <h3 className={styles.species}>Species: {props.species}</h3>
               <h3 className={styles.gender}>Gender : {props.gender}</h3>
            </div>
         </div>
      </div>
      </div>
   );
}

export function mapDispatchToProps (dispatch){
   return{
   addFavorite:(id)=>dispatch(addFavorite(id)),
   deleteFavorite :(id)=>dispatch(deleteFavorite(id))
   }
}

export function mapStateToProps (state){
   return {
      myFavorites : state.myFavorites
   }
}


export default connect(mapStateToProps , mapDispatchToProps)(Card);