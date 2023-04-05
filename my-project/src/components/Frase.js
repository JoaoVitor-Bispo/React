import styles from './Frase.modules.css'
function Frase() {
    console.log(styles)
    return (
        <div className={styles.fraseContainer}>
            <p className={styles.fraseContent}>Essa é uma frase de um componente!</p>
            
        </div>
    )
}
export default Frase