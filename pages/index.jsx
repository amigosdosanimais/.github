import * as React from 'react';
import styles from './index.module.css';
import Header from '../src/components/header-home/header-home';
import Footer from '../src/components/footer/footer';
import {config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import WelcomeCard from '../src/components/welcomeCard/welcomeCard';
import InfoCard from '../src/components/infoCard/infoCard';
import JoinUsCard from '../src/components/joinUsCard/joinUsCard';
import BreadcrumbsComponent from '../src/components/breadcrumbsComponent/breadcrumbsComponent';

config.autoAddCss = false;


export default function HomePage() {

    return (
        <div className={styles.principal}>

            <Header />

            <div className={styles.breadcrumbs}>
                <BreadcrumbsComponent />
            </div>
            
            <WelcomeCard />
            <InfoCard />
            <JoinUsCard />
            <Footer />
        </div>
    );
}
