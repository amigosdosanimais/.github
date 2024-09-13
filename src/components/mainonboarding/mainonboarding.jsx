import styles from "./mainonboarding.module.css"

export default function MainOnboardingComponent(){
    return(
        <div className={styles.main}>
            <div className={styles.grid1}>
                <p>Home</p>
            </div>
            <div className={styles.grid2}>
                <div>
                    <h1>Bem-vindo a Zampet!</h1>
                    <p className={styles.text}>Explicação simplificada em um parágrafo do que é a Zampet e o que faz.</p>
                </div>
                <div className={styles.buttons}>
                    <button className={styles.btn}><a className={styles.link}href="#">Fazer Login</a></button>
                    <button className={styles.btn}><a className={styles.link}href="#">Fazer Cadastro</a></button>
                </div>
            </div>
            <div className={styles.grid3}>
                <img src='/images/example.png' alt="imagem" />
            </div>
            <div className={styles.grid4}>
                <img src='/images/example.png' alt="imagem" />
            </div>
            <div className={styles.grid5}>
                <div>
                    <h1>O que é a Zampet?</h1>
                    <p className={styles.text}>Explicação mais completa do que é o projeto, quais são as principais atividades que disponibiliza para os clientes</p>
                </div>
                <button className={styles.btn3}><a className={styles.link} href="#">Conheça o projeto</a></button>
            </div>
            <div className={styles.grid6}>
                <h1 className={styles.titulogrid6}>Faça parte da Zampet!</h1>
                <p>Chamada para se tornar um voluntário ou inscrever a ONG no sistema.</p>
            </div>
            <div className={styles.grid7}>
                <button className={styles.btn4}><a className={styles.link}href="#">Inscrever minha ONG</a></button>
            </div>
            <div className={styles.grid8}>
                <button className={styles.btn5}><a className={styles.link} href="#">Me tornar voluntário</a></button>
            </div>
        </div>
    )
}