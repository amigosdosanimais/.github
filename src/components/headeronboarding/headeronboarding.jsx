import styles from "./headerOnboarding.module.css"

export default function HeaderOnboardingComponent(){
    return(
        <div className={styles.header}>
        <button className={styles.btnlogo}>
            <a className={styles.link} href="/">
                Logotipo
            </a>
        </button>
        <button className={styles.btnlogin}>
            <a className={styles.link} href="/homePage">Login</a>
        </button>
        </div>
    )
}