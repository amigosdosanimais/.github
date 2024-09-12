import styles from './button.module.css'
import IconSVG from '../../../public/images/icon-plus.svg'

export default function Button ({
    type = 'dark',
    disabled = false,
    icon = false,
    text = 'Botão',
    width = '84px',
    height = '48px',
    shadow = false,
    onClick
})
    {
        const buttonClasses = `${styles.button} ${styles[type]} ${disabled ? styles.disabled : ''} ${shadow ? styles.shadow : ''}`;

        
        return (
            <button
                className={buttonClasses}
                style={{width: width, height: height}}
                onClick={onClick}
                disabled={disabled}
            >
                {icon && <IconSVG className={styles.icon}/>}
                <p className={styles.text}>{text}</p>
            </button>
        )
    }