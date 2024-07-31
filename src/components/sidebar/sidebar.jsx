import React, { useState } from 'react';
import styles from './sidebar.module.css';
import {
  ProSidebar,
  Menu,
  MenuItem,
  menuClasses,
  Sidebar
} from 'react-pro-sidebar';


export default function SidebarComponent(){
    const [collapsed, setCollapsed] = useState(false);
    const handleCollapsedChange = () => {
        setCollapsed(!collapsed);
      };
    return(
        <div className={styles.principal} >           
            <Sidebar className={styles.sidebar} collapsed={collapsed} >              
                <div className={styles.container}>
                    <Menu className={styles.header}>
                        {collapsed?
                        <button type="button" className={styles.sbButtonCollapse} onClick={() => setCollapsed(!collapsed)}>
                        <img src={'/images/expand.png'} alt={'expand'}/>   
                        </button>:
                        <div className={styles.logozampet}>
                            <img className={styles.logo} src={'/images/logo.png'} alt={'expand'} />
                            <h1>ZAMPET</h1>
                            <button type="button" className={styles.sbButton} onClick={() => setCollapsed(!collapsed)}>
                                <img src={'/images/collapse.png'} alt={'collapse'}/>   
                            </button>
                        </div>
                        }
                    </Menu>    
                    <Menu className={styles.menu}>
                        <MenuItem className={styles.menuitem} rootStyles={{[`.${menuClasses.button}`]:{'&:hover': {
                                backgroundColor: '#293020 !important'}}}}>
                            <picture className={styles.menuimage}>
                                <svg role="graphics-symbol" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#F3F7ED" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M3 12m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                                <path d="M9 8m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                                <path d="M15 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                                <path d="M4 20l14 0" />
                                </svg>
                            </picture>
                            <p>Dashboard</p>
                        </MenuItem>
                        <MenuItem className={styles.menuitem} rootStyles={{[`.${menuClasses.button}`]: {'&:hover': {
                                backgroundColor: '#293020 !important',},},}}>
                            <picture className={styles.menuimage}>
                                <svg role="graphics-symbol" xmlns="http://www.w3.org/2000/svg"  width="25" height="25" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#F3F7ED" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M14.7 13.5c-1.1 -2 -1.441 -2.5 -2.7 -2.5c-1.259 0 -1.736 .755 -2.836 2.747c-.942 1.703 -2.846 1.845 -3.321 3.291c-.097 .265 -.145 .677 -.143 .962c0 1.176 .787 2 1.8 2c1.259 0 3 -1 4.5 -1s3.241 1 4.5 1c1.013 0 1.8 -.823 1.8 -2c0 -.285 -.049 -.697 -.146 -.962c-.475 -1.451 -2.512 -1.835 -3.454 -3.538z" />
                                <path d="M20.188 8.082a1.039 1.039 0 0 0 -.406 -.082h-.015c-.735 .012 -1.56 .75 -1.993 1.866c-.519 1.335 -.28 2.7 .538 3.052c.129 .055 .267 .082 .406 .082c.739 0 1.575 -.742 2.011 -1.866c.516 -1.335 .273 -2.7 -.54 -3.052z" />
                                <path d="M9.474 9c.055 0 .109 0 .163 -.011c.944 -.128 1.533 -1.346 1.32 -2.722c-.203 -1.297 -1.047 -2.267 -1.932 -2.267c-.055 0 -.109 0 -.163 .011c-.944 .128 -1.533 1.346 -1.32 2.722c.204 1.293 1.048 2.267 1.933 2.267z" />
                                <path d="M16.456 6.733c.214 -1.376 -.375 -2.594 -1.32 -2.722a1.164 1.164 0 0 0 -.162 -.011c-.885 0 -1.728 .97 -1.93 2.267c-.214 1.376 .375 2.594 1.32 2.722c.054 .007 .108 .011 .162 .011c.885 0 1.73 -.974 1.93 -2.267z" />
                                <path d="M5.69 12.918c.816 -.352 1.054 -1.719 .536 -3.052c-.436 -1.124 -1.271 -1.866 -2.009 -1.866c-.14 0 -.277 .027 -.407 .082c-.816 .352 -1.054 1.719 -.536 3.052c.436 1.124 1.271 1.866 2.009 1.866c.14 0 .277 -.027 .407 -.082z" />
                                </svg>
                            </picture>
                            <p>Animais</p>
                        </MenuItem>
                        <MenuItem className={styles.menuitem} rootStyles={{[`.${menuClasses.button}`]: {'&:hover': {
                                backgroundColor: '#293020 !important',},},}}>
                            <picture className={styles.menuimage}>
                                <svg role="graphics-symbol" xmlns="http://www.w3.org/2000/svg"  width="25" height="25" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#F3F7ED" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
                                <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
                                <path d="M14 11h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
                                <path d="M12 17v1m0 -8v1" />
                                </svg>
                            </picture>
                            <p>Financeiro</p>
                        </MenuItem>
                        <MenuItem className={styles.menuitem} rootStyles={{[`.${menuClasses.button}`]: {'&:hover': {
                                backgroundColor: '#293020 !important',},},}}>
                            <picture className={styles.menuimage}>
                                <svg role="graphics-symbol" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#F3F7ED" fill="none" strokeLinecap="round" strokeLinejoin="round">  
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                                <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
                                </svg>
                            </picture>
                            <p>Pessoas</p>
                        </MenuItem>
                    </Menu>
                    <Menu className={styles.footer}>
                        <div className={styles.profile}>
                            <picture className={styles.imguser}>
                            <svg role="graphics-symbol" xmlns="http://www.w3.org/2000/svg"  width="50" height="50" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#F3F7ED" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M12 13a3 3 0 1 0 0 -6a3 3 0 0 0 0 6z" />
                            <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
                            <path d="M6 20.05v-.05a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v.05" />
                            </svg>
                            </picture>
                            <div>
                                <h1>Johnny Doe</h1>
                                <p>johnnysdoe@example.com</p>
                            </div>
                        </div>
                    </Menu>
                </div>
            </Sidebar>
            <div>
                
            </div>  
      </div>

    )
}
