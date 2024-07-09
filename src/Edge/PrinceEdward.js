import React from 'react';
import styles from './Provinces.module.css';

function PrinceEdward() {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>
        Prince Edward Island
      </h2>

      <div className={styles.innerContainer}>
        <div className={styles.linkpic}>
          <a href=''>
            <img className={styles.pei1} src='' alt='Prince Edward Island 1'></img>
          </a>
        </div>

        <div className={styles.linkpic}>
          <a href=''>
            <img className={styles.pei2} src='' alt='Prince Edward Island 2'></img>
          </a>
        </div>

        <div className={styles.linkpic}>
          <a href=''>
            <img className={styles.pei3} src='' alt='Prince Edward Island 3'></img>
          </a>
        </div>

        <div className={styles.linkpic}>
          <a href=''>
            <img className={styles.pei4} src='' alt='Prince Edward Island 4'></img>
          </a>
        </div>

        <div className={styles.linkpic}>
          <a href=''>
            <img className={styles.pei5} src='' alt='Prince Edward Island 5'></img>
          </a>
        </div>

        <div className={styles.linkpic}>
          <a href=''>
            <img className={styles.pei6} src='' alt='Prince Edward Island 6'></img>
          </a>
        </div>



      </div>
    </div>
  )
}

export default PrinceEdward
