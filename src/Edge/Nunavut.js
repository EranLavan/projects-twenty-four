import React from 'react';
import styles from './Provinces.module.css';

function Nunavut() {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>
        Nunavut
      </h2>

      <div className={styles.innerContainer}>
        <div className={styles.linkpic}>
          <a href=''>
            <img className={styles.nunavut1} src='' alt='Nunavut 1'></img>
          </a>
        </div>

        <div className={styles.linkpic}>
          <a href=''>
            <img className={styles.nunavut2} src='' alt='Nunavut 2'></img>
          </a>
        </div>

        <div className={styles.linkpic}>
          <a href=''>
            <img className={styles.nunavut3} src='' alt='Nunavut 3'></img>
          </a>
        </div>

        <div className={styles.linkpic}>
          <a href=''>
            <img className={styles.nunavut4} src='' alt='Nunavut 4'></img>
          </a>
        </div>

        <div className={styles.linkpic}>
          <a href=''>
            <img className={styles.nunavut5} src='' alt='Nunavut 5'></img>
          </a>
        </div>

        <div className={styles.linkpic}>
          <a href=''>
            <img className={styles.nunavut6} src='' alt='Nunavut 6'></img>
          </a>
        </div>



      </div>
    </div>
  )
}

export default Nunavut
