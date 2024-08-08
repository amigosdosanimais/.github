import styles from './index.module.css'
import HeaderOnboardingComponent from '../src/components/headeronboarding/headeronboarding'
import { MdMargin } from 'react-icons/md'

export default function HomePage(){
    return(
        <div className={styles.principal}>            
                <HeaderOnboardingComponent/>
        </div>
    )
}