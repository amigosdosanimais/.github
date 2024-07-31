import styles from './index.module.css'
import SidebarComponent from "../src/components/sidebar/sidebar"
import HomeComponent from "../src/components/home/home"
import HeaderComponent from '../src/components/header/header'


export default function HomePage(){
    return(
        <div className={styles.body}>
                <div className={styles.header}>
                    <HeaderComponent/>
                </div>
                <div className={styles.bottom}>
                    <SidebarComponent className={styles.sidebar}/> 
                    <HomeComponent className={styles.main}/>
                </div>
        </div>
    )
}