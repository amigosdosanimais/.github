import styles from './index.module.css';
import Header from '../src/components/header-home/header-home';


export default function HomePage() {
    return (
        <div className={styles.principal}>
            <Header/>

        </div>
    );
}
