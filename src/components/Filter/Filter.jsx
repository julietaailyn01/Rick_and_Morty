import { useDispatch } from "react-redux";
import React from "react"
import { filterCards, orderCards } from "../../redux/actions";
import styles from "../Filter/Filter.module.css"

export default function Filter(props){
    const dispatch = useDispatch();
    const handleClick = (event) => {
        const {name,value} = event.target
        switch(name){
            case "order":
                return dispatch(orderCards(value))
            case "filter":
                return dispatch(filterCards(value))
            default: return 0
        }
    }
        return(
            <div>
                <div>
                    <select name="order" onClick={handleClick} id="" className={styles.order}>
                        <option value="Ascendente">Ascendente</option>
                        <option value="Descendente">Descendiente</option>
                    </select>
                    <select name="filter" onClick={handleClick}  id="" className={styles.order}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Genderless">Genderless</option>
                        <option value="unknown">Unknown</option>
                    </select>
                </div>
            </div>
        )
}