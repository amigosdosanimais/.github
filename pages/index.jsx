import styles from './index.module.css';
import Header from '../src/components/header-home/header-home';
import Footer from '../src/components/footer/footer';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import WelcomeCard from '../src/components/welcomeCard/welcomeCard';
import InfoCard from '../src/components/infoCard/infoCard';
import JoinUsCard from '../src/components/joinUsCard/joinUsCard';

config.autoAddCss = false;


export default function HomePage() {
    return (
        <div className={styles.principal}>
            <Header/>
            <WelcomeCard/>
            <InfoCard/>
            <JoinUsCard/>
            <Footer/>
        </div>
    );
}
