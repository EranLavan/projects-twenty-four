import React from 'react';
import styles from './Provinces.module.css';

function Saskatchewan() {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>
        Saskatchewan
      </h2>

      <div className={styles.innerContainer}>
        <div className={styles.linkpic}>
          <a href=''>
            <img className={styles.sask1} src='' alt='Saskatchewan 1'></img>
          </a>
        </div>

        <div className={styles.linkpic}>
          <a href=''>
            <img className={styles.sask2} src='' alt='Saskatchewan 2'></img>
          </a>
        </div>

        <div className={styles.linkpic}>
          <a href=''>
            <img className={styles.sask3} src='' alt='Saskatchewan 3'></img>
          </a>
        </div>

        <div className={styles.linkpic}>
          <a href=''>
            <img className={styles.sask4} src='' alt='Saskatchewan 4'></img>
          </a>
        </div>

        <div className={styles.linkpic}>
          <a href=''>
            <img className={styles.sask5} src='' alt='Saskatchewan 5'></img>
          </a>
        </div>

        <div className={styles.linkpic}>
          <a href=''>
            <img className={styles.sask6} src='' alt='Saskatchewan 6'></img>
          </a>
        </div>



      </div>
    </div>
  )
}

export default Saskatchewan
