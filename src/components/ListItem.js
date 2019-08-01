import React from 'react';
import Button from './Button';
import styles from './ListItem.module.css';

function ListItem(props) {
  return (
    <div className={styles.listItem}>
      <div className={styles.id}>{props.data.id}</div>
      <div className={styles.title}>{props.data.title}</div>
      <div className={styles.buttons} />
    </div>
  );
}

export default ListItem;
