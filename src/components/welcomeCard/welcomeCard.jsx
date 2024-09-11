import styles from './welcomeCard.module.css';

const WelcomeCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.leftContent}>
        <h1 className={styles.title}>Bem-vindo à Zampet!</h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in porttitor sapien. Sed non tincidunt turpis.
          Aliquam fermentum ut lorem nec ornare. Curabitur elit erat, accumsan ac condimentum vel, elementum quis nisi.
        </p>
        <div className={styles.buttonGroup}>
          <button className={styles.registerButton}>Cadastrar</button>
          <button className={styles.loginButton}>Fazer login</button>
        </div>
      </div>
      <div className={styles.rightContent}>
        <div className={styles.imagePlaceholder}>
          {/* Aqui você pode inserir uma tag img quando a imagem estiver disponível */}
          <img src="/images/fi-rr-picture.svg" alt="Placeholder" className={styles.image}/>
        </div>
      </div>
    </div>
  );
};

export default WelcomeCard;
