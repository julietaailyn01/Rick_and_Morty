import SearchBar  from "../SearchBar/SearchBar";
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";
import imagen from "../../img/randm.png"
// import { IconName } from "react-icons/fa";
import 'boxicons';


export default function Nav({onSearch}){
    return(
        <nav className={styles.nav}>
            <a className={styles.logo} href>
            <img className={styles.img}  src={imagen} alt="logo" /> 
            </a>
            <Link to ="/" className={styles.link} ><box-icon name='log-out' color="white"></box-icon> Logout</Link>
            <Link to ="/Home" className={styles.link}  ><box-icon name='home-alt-2' color="white" ></box-icon> Home</Link>
            <Link to ="/Favorites" className={styles.link}><box-icon name='heart-circle' color="white" ></box-icon> Favorites</Link>
            <Link to ="/About" className={styles.link}><box-icon name='message-rounded-dots' color="white"></box-icon> About Me</Link>
            <a href="https://github.com/julietaailyn01" className={styles.link} target="blank"><box-icon name='github' type='logo' color="white"></box-icon> GitHub</a>
            <div>
            <SearchBar onSearch={onSearch}/>
            </div>            
        </nav>
    )
}