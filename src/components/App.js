import React from 'react';
import styles from './App.module.css';
import Footer from './Footer';
import TopBar from './TopBar';
import List from './List';

function App() {
  return (
    <div className={styles.app}>
      <TopBar className={styles.topBar} />
      <List className={styles.list} />
      <Footer className={styles.footer} />
    </div>
  );
}

export default App;
