import styles from './footer.module.css'; // Usando CSS Modules para estilos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <h2 className={styles.title}>Zampet</h2>
        <div className={styles.socialLinks}>
          <a href="#" className={styles.icon}>
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="#" className={styles.icon}>
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a href="#" className={styles.icon}>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <nav className={styles.nav}>
          <a href="#" className={styles.navItem}>Quem somos</a>
          <a href="#" className={styles.navItem}>Encontre uma ONG</a>
          <a href="#" className={styles.navItem}>Segurança e Privacidade</a>
          <a href="#" className={styles.navItem}>Contato</a>
        </nav>
      </div>
      <div className={styles.bottom}>
        <hr className={styles.separator} />
        <p className={styles.copyright}>Direitos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;
