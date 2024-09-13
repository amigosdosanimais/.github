import React, { Component } from 'react'
import styles from './placeholder.module.css';

export class placeholder extends Component {
    render() {
        return (
            <div className={styles.card}>
                <div className={styles.imagePlaceholder}>
                    {/* Aqui você pode inserir uma tag img quando a imagem estiver disponível */}
                    <img src="/images/fi-rr-picture.svg" alt="Placeholder" className={styles.image} />
                </div>
            </div>
        )
    }
}

export default placeholder
