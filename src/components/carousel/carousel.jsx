//importar css
import styles from './carousel.module.css';

//imagens para o carrossel

import image3 from '../../imagens/3.jpg';
import image4 from '../../imagens/4.jpg';
import items from '../../imagens/Items.png';

// import do frame motion
import { motion } from 'framer-motion';




//mapeando as imagens
const images = [ image3, image4, items];


export default function Carousel() {
    return (
        <div className="App">
            <motion.div className={styles.carousel}>
                <motion.div className={styles.inner}>
                    {images.map(images => (
                        <motion.div className={styles.item} key={images}>
                            <img src={images} alt="texto alt" />
                        </motion.div>
                    ))}

                </motion.div>

            </motion.div>

        </div>


    );
}

