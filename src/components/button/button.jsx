import styles from './button.module.css'

export default function Button (variant= 'default', icon='false', disabled='false', onClick){

    const buttonClass = `${styles.button} ${styles[variant]} ${disabled ? styles.disabled : ''}`;
    const defaultIcon = <i></i>;

    return(
        <button >
            {icon && (<img src="../../../public/images/icon-plus.png" alt="Ícone" className={styles.icon} />)}
            Botão
        </button>
    )
}