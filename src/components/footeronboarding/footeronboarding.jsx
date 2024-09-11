import styles from "./footerOnboarding.module.css"
 export default function FooterOnboardingComponent(){
    return(
        <div className={styles.footer}>
            <div className={styles.esquerda}>
                <button className={styles.btnlogo}>Logotipo</button>
                <p className={styles.contato}>emaildecontato@zampet.com</p>
            </div>

            <div className={styles.centroe}>
                <h1>A Zampet</h1>
                <p className={styles.text}>Quem Somos</p>
                <p className={styles.text}>Missão, Visão e Valores</p>
                <p className={styles.text}>Perguntas Frequentes</p>
            </div>

            <div className={styles.centrod}>
                <h1>Encontre uma ONG</h1>
                <p className={styles.text}>Como doar</p>
            </div>

            <div className={styles.direita}>
                <h1>Segurança e Privacidade</h1>
                <p className={styles.text}>Política de Privacidade</p>
                <p className={styles.text}>Termos de Uso</p>
            </div>
        </div>
    )
 }