import styles from "./header.module.css"

export default function HeaderComponent(){
    return(
        <div className={styles.header}>
            <button type="button" className={styles.btnCadastrar}>
            <svg role="graphics-symbol" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" strokeWidth="3" stroke="#F3F7ED" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
            <path d="M9 12h6" />
            <path d="M12 9v6" />
            </svg>
                <p>Cadastrar</p>
            </button>
        </div>
    )
}