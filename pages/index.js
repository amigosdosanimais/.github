import styles from './index.module.css'
import SidebarComponent from "../src/components/sidebar/sidebar"
import HomeComponent from "../src/components/home/home"

export default function HomePage(){
    return(
        <div>
            <div className={styles.sidebar}>
                <SidebarComponent></SidebarComponent>
            </div>
           <HomeComponent></HomeComponent>
        </div>
    )
}