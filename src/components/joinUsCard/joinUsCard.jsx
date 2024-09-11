import styles from './joinUsCard.module.css';

const JoinUsCard = () => {
  return (
    <div className={styles.card}>
      <h1 className={styles.title}>Faça parte!</h1>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in porttitor sapien. Sed non tincidunt turpis.
        Aliquam fermentum ut lorem nec ornare. Curabitur elit erat, accumsan ac condimentum vel, elementum quis nisi.
        Maecenas pretium, felis quis congue dignissim, elit diam aliquam elit, vel porttitor arcu ipsum vel tortor.
        Cras lobortis, ex id finibus ullamcorper, orci ligula consequat sapien, quis tempus turpis sapien a sapien.
        Aliquam elit nibh, laoreet quis congue vel, imperdiet vitae neque. Integer id dolor ac tellus fringilla faucibus.
        Nulla accumsan ligula in mattis luctus. Suspendisse sit amet nunc nisl. Sed rutrum sem auctor sem convallis, 
        in mollis dolor fermentum. Praesent fringilla nibh quis molestie porta. Aenean commodo, nibh quis pretium finibus,
        urna urna ullamcorper tortor, eu scelerisque mauris arcu id ligula.
      </p>
    </div>
  );
};

export default JoinUsCard;
