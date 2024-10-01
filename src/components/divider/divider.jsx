import styles from './divider.module.css'

export default function Divider ({width}){
    return (
        <div className={styles.divider}>
            <div className={styles.rectangle} style={{width: width}}></div>
        </div>
    )
}