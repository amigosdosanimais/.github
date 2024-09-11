import styles from './index.module.css'
import HeaderOnboardingComponent from '../src/components/headerOnboarding/headerOnboarding'
import { MdMargin } from 'react-icons/md'
import FooterOnboardingComponent from '../src/components/footerOnboarding/footerOnboarding'
import MainOnboardingComponent from '../src/components/mainOnboarding/mainOnboarding'

export default function HomePage(){
    return(
        <div className={styles.principal}>
                           
                <div className={styles.header}><HeaderOnboardingComponent/></div>
                <div className={styles.main}><MainOnboardingComponent/></div>
                <div className={styles.footer}><FooterOnboardingComponent/></div>
               
        </div>
    )
}