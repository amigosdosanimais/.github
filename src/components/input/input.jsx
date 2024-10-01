import React from 'react';
import styles from './input.module.css';

export default function InputComponent() {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.inputLabel} htmlFor="inputField">Label</label>
      <input className={styles.inputField} type="text" id="inputField" placeholder="Input" />
      <p className={styles.supportText}>Texto suporte</p>
    </div>
  );
};
