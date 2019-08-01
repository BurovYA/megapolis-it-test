import React from 'react';
import Button from './Button';
import Title from './Title';
import styles from './TopBar.module.css';

function TopBar(props) {
  return (
    <div className={`${styles.topBar} ${props.className}`}>
      <Title className={styles.title} />
      <Button text="Добавить" className={styles.addButton} />
    </div>
  );
}

export default TopBar;
