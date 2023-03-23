import styles from "../About/About.module.css"

function About(){
    return(
        <>
        <div >
      <h2 className={styles.stroke}>About me</h2>
      </div>
      <p className={styles.text}>Soy estudiante de programación con habilidades en React, Redux, JavaScript, Node js, HTML y CSS. Poseo experiencia en el desarrollo de proyectos personales que demuestran un sólido entendimiento de estas tecnologías y una habilidad para trabajar en equipo. Apasionada por aprender y mejorar mis habilidades. Estoy en la búsqueda de oportunidades para aplicar estos conocimientos en el mundo laboral.</p>
        </>
    )
}

export default About;