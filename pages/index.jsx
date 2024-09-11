import styles from './index.module.css';
import Header from '../src/components/header-home/header-home';
import Footer from '../src/components/footer/footer';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;


export default function HomePage() {
    return (
        <div className={styles.principal}>
            <Header/>
            <h1>teste de tela</h1>

            <Footer />


        </div>
    );
}
