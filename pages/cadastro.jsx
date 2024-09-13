import React, { Component } from 'react';
import styles from './cadastro.module.css';
import BreadcrumbsComponent from '../src/components/breadcrumbsComponent/breadcrumbsComponent';
import Header from '../src/components/header-home/header-home';
import Footer from '../src/components/footer/footer';

export default function Cadastro () {
  
    return (
      <div className={styles.principal}>
        <Header />
        <div className={styles.breadcrumbs}>
          <BreadcrumbsComponent />
        </div>

        <div className={styles.title}>
          <h1>Teste de pagina</h1>
        </div>

        <Footer />

      </div>
    )
}
