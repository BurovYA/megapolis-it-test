import React from 'react';
import styles from './Footer.module.css';

function Footer(props) {
  return <div className={`${styles.footer} ${props.className}`}>© 2019 АО "Мегаполис"</div>;
}

export default Footer;
