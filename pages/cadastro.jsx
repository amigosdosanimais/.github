import React, { Component } from 'react';
import styles from './cadastro.module.css';
import BreadcrumbsComponent from '../src/components/breadcrumbsComponent/breadcrumbsComponent';
import Header from '../src/components/header-home/header-home';
import Footer from '../src/components/footer/footer';
import Divider from '../src/components/divider/divider'
import InputComponent from '../src/components/input/input'
import Button from '../src/components/button/button'

export default function Cadastro () {
  
    return (
      <div className={styles.principal}>
        <Header />
        <div className={styles.breadcrumbs}>
          <BreadcrumbsComponent />
        </div>

        <div className={styles.title}>
          <h1>Cadastro</h1>
          
        </div>

        <div  className={styles.divider}>
          <Divider ></Divider>
        </div>
        <div className={styles.texto}>
          <p>Preencha os campos abaixo para fazer o cadastro</p>
        </div>
        <div className={styles.input}>
          <InputComponent ></InputComponent>
        </div>
        <div className={styles.input}>
          <InputComponent ></InputComponent>
        </div>
        <div className={styles.input}>
          <InputComponent ></InputComponent>
        </div>
        <div className={styles.input}>
          <InputComponent ></InputComponent>
        </div>
        <div className={styles.texto}><p>PASSWORD-CHECKLIST</p></div>
        <div className={styles.input}>
          <InputComponent ></InputComponent>
        </div>

        <div className={styles.texto}><p>Li e concordo com os <a href="#">Termos de Uso</a> e <a href="#">Política de Privacidade</a></p></div>

        <div className={styles.button}><Button type='dark' text='Criar conta' width='526px' /></div>
        <div className={styles.button}><Button type='light'text='Fazer login' width='526px'></Button></div>
        <div className={styles.footer}>
          <Footer />
        </div>
        
      </div>
    )
}
