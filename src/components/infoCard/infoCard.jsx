import { useRouter } from 'next/router'; // Importa o hook useRouter
import styles from './infoCard.module.css';

const WelcomeCard = () => {
  const router = useRouter(); // Inicializa o hook useRouter

  const handleLearnMore = () => {
    // Redireciona para a página 'infopage'
    router.push('/infopage');
  };

  return (
    <div className={styles.card}>
      <div className={styles.rightContent}>
        <div className={styles.imagePlaceholder}>
          {/* Aqui você pode inserir uma tag img quando a imagem estiver disponível */}
          <img src="/images/fi-rr-picture.svg" alt="Placeholder" className={styles.image} />
        </div>
      </div>

      <div className={styles.leftContent}>
        <h1 className={styles.title}>O que é a Zampet!</h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in porttitor sapien. Sed non tincidunt turpis.
          Aliquam fermentum ut lorem nec ornare. Curabitur elit erat, accumsan ac condimentum vel, elementum quis nisi.
        </p>

        <div>
          <button className={styles.learnMoreButton} onClick={handleLearnMore}>
            Saiba mais...
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeCard;
