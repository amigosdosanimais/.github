import * as React from 'react';
import styles from './index.module.css';
import Header from '../src/components/header-home/header-home';
import Footer from '../src/components/footer/footer';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import BreadcrumbsComponent from '../src/components/breadcrumbsComponent/breadcrumbsComponent';
import WhatsZampetCard from '../src/components/whatszampet/whatsZampetCard';
import Placeholder from '../src/components/placeholder/placeholder';
import CardVertical from '../src/components/cardVertical/cardVertical';

config.autoAddCss = false;



export default function HomePage() {
    return (
        <div className={styles.principal}>
            <Header />
            <div className={styles.breadcrumbs}>
                <BreadcrumbsComponent />
            </div>

            <WhatsZampetCard />
            <Placeholder />

            <div className={styles.cardVerticals}>
                <CardVertical />
                <CardVertical />
                <CardVertical />
            </div>

            <Footer />
        </div>
    );
}