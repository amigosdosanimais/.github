import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu, menuClasses } from 'react-pro-sidebar';
import styles from './sidebar.module.css';


export default function SidebarComponent(){
    const [collapsed, setCollapsed] = useState(false);
    return(
        <div className={styles.principal} >
            <Sidebar collapsed={collapsed}>
                
                <Menu className={styles.menu}>
                    <div className={styles.logozampet}>
                        <img className={styles.logo} src={'/images/logo.png'} />
                        <h1>ZAMPET</h1>
                    </div>

                    <MenuItem className={styles.menuitem} rootStyles={{['.'+menuClasses.button]: {'&:hover': {
                            backgroundColor: '#293020 !important',},},}}>
                        <img className={styles.menuimage} src="/images/logo.png" alt="." />
                        Dashboard
                    </MenuItem>
                    <MenuItem className={styles.menuitem} rootStyles={{['.'+menuClasses.button]: {'&:hover': {
                            backgroundColor: '#293020 !important',},},}}> 
                        <img className={styles.menuimage} src="/images/logo.png" alt="." />
                        Animais
                    </MenuItem>
                    <MenuItem className={styles.menuitem} rootStyles={{['.'+menuClasses.button]: {'&:hover': {
                            backgroundColor: '#293020 !important',},},}}> 
                        <img className={styles.menuimage} src="/images/logo.png" alt="." />
                        Financeiro
                    </MenuItem>
                    <MenuItem className={styles.menuitem} rootStyles={{['.'+menuClasses.button]: {'&:hover': {
                            backgroundColor: '#293020 !important',},},}}> 
                        <img className={styles.menuimage} src="/images/logo.png" alt="." />
                        Pessoas
                    </MenuItem>
                </Menu>

            </Sidebar>
            <div>
                <button className={styles.sbButton} onClick={() => setCollapsed(!collapsed)}>
                <img 
                    src={collapsed ? '/images/expand.png' : '/images/collapse.png'}
                />   
                </button>
            </div>  
      </div>
    )
}