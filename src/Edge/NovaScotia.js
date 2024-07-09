import React from 'react';
import styles from './Provinces.module.css';

function NovaScotia() {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>
        Nova Scotia
      </h2>

      <div className={styles.innerContainer}>
        <div className={styles.linkpic}>
          <a href=''>
            <img className={styles.novasc1} src='' alt='Nova Scotia 1'></img>
          </a>
        </div>

        <div className={styles.linkpic}>
          <a href=''>
            <img className={styles.novasc2} src='' alt='Nova Scotia 2'></img>
          </a>
        </div>

        <div className={styles.linkpic}>
          <a href=''>
            <img className={styles.novasc3} src='' alt='Nova Scotia 3'></img>
          </a>
        </div>

        <div className={styles.linkpic}>
          <a href=''>
            <img className={styles.novasc4} src='' alt='Nova Scotia 4'></img>
          </a>
        </div>

        <div className={styles.linkpic}>
          <a href=''>
            <img className={styles.novasc5} src='' alt='Nova Scotia 5'></img>
          </a>
        </div>

        <div className={styles.linkpic}>
          <a href=''>
            <img className={styles.novasc6} src='' alt='Nova Scotia 6'></img>
          </a>
        </div>



      </div>
    </div>
  )
}

export default NovaScotia
