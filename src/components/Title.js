import React from 'react';
import styles from './Title.module.css';

function Title(props) {
  return <h1 className={`${styles.title} ${props.className}`}>Список задач</h1>;
}

export default Title;
