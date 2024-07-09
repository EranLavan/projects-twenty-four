import React from 'react';
import styles from './Provinces.module.css';

function Yukon() {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>
        Yukon
      </h2>

      <div className={styles.innerContainer}>
        <div className={styles.linkpic}>
          <a href=''>
            <img className={styles.yukon1} src='' alt='Yukon 1'></img>
          </a>
        </div>

        <div className={styles.linkpic}>
          <a href=''>
            <img className={styles.yukon2} src='' alt='Yukon 2'></img>
          </a>
        </div>

        <div className={styles.linkpic}>
          <a href=''>
            <img className={styles.yukon3} src='' alt='Yukon 3'></img>
          </a>
        </div>

        <div className={styles.linkpic}>
          <a href=''>
            <img className={styles.yukon4} src='' alt='Yukon 4'></img>
          </a>
        </div>

        <div className={styles.linkpic}>
          <a href=''>
            <img className={styles.yukon5} src='' alt='Yukon 5'></img>
          </a>
        </div>

        <div className={styles.linkpic}>
          <a href=''>
            <img className={styles.yukon6} src='' alt='Yukon 6'></img>
          </a>
        </div>



      </div>
    </div>
  )
}

export default Yukon
