import React from 'react';
import styles from './Button.module.css';

function Button(props) {
  return (
    <div className={`${styles.button} ${props.className} ${styles[props.type] || ''}`}>
      <span>{props.text}</span>
    </div>
  );
}

export default Button;
