import styles from './home.module.css'
export default function HomeComponent(){
    return(
        <div className={styles.body}>
            <main className={styles.main}>
                <div className={styles.card}></div>
                <div className={styles.card}></div>
                <div className={styles.card}></div>
                <div className={styles.card}></div>
                <div className={styles.card}></div>
                <div className={styles.card}></div>
                <div className={styles.card}></div>
            </main>
        </div>
    )
}