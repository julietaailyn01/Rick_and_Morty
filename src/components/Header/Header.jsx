import styles from "./Header.module.css";
export default function Header (){
  return(
      <div className={styles.div}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg" alt="header" className={styles.img} />
      </div>
  )
}