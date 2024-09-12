import styles from './button.module.css'
import IconSVG from './icon-plus.svg';

export default function Button ({
    type = 'dark',
    disabled = false,
    icon = false,
    text = 'Botão',
    width = '100px',
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
                <p className={styles.text}>
                    {icon && <IconSVG className={styles.icon}/>}
                    {text}
                </p>
            </button>
            
        )
    }