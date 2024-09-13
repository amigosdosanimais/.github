import styles from './cardVertical.module.css';

export default function CardVertical() {
    return (
        <div className={styles.card}>

            <div className={styles.imagem}>
                <div className={styles.imagePlaceholder}>
                    {/* Aqui você pode inserir uma tag img quando a imagem estiver disponível */}
                    <img src="/images/fi-rr-picture.svg" alt="Placeholder" className={styles.image} />
                </div>

            </div>

            <div className={styles.title}>
                <p>Título</p>
            </div>

            <div className={styles.content}>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in porttitor sapien. Sed non tincidunt turpis. Aliquam fermentum ut lorem nec ornare. Curabitur elit erat.
                </p>
            </div>
        </div>
    )

}