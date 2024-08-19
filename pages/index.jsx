import styles from './index.module.css'
import HeaderOnboardingComponent from '../src/components/headeronboarding/headeronboarding'
import { MdMargin } from 'react-icons/md'
import FooterOnboardingComponent from '../src/components/footeronboarding/footeronboarding'
import MainOnboardingComponent from '../src/components/mainonboarding/mainonboarding'

export default function HomePage(){
    return(
        <div className={styles.principal}>
                           
                <div className={styles.header}><HeaderOnboardingComponent/></div>
                <div className={styles.main}><MainOnboardingComponent/></div>
                <div className={styles.footer}><FooterOnboardingComponent/></div>
               
        </div>
    )
}