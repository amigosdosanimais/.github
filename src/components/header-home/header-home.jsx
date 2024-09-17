import styles from './header-home.module.css';

export default function Header() {
  return (
    <div className={styles.header}>
        <div className={styles.logo}>Zampet</div>
        <button className={styles.login_button}>
            <div className={styles.text_login}>
                <img src="/images/fi-rr-plus-small.svg" alt="Plus Icon" className={styles.plusIcon} />
                <a href="./testComponents">Login</a>
            </div>
        </button>
    </div>
  )
}